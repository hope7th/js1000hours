let childrenSymbol = Symbol('children');
class ElementWrapper {
  constructor(type) {
    this.type = type;
    this.props = Object.create(null);
    this[childrenSymbol] = [];
    this.children = [];
  }

  setAttribute(name, value) {
    this.props[name] = value;
  }

  get vdom() {
    return this;
  }

  /**/
  appendChild(vchild) {
    this[childrenSymbol].push(vchild);
    this.children.push(vchild.vdom);
  }

  mountTo(range) {
    this.range = range;
    if (range) {
      let placeholder = document.createComment('placeholder');
      let endRange = document.createRange();
      endRange.setStart(range.endContainer, range.endOffset);
      endRange.setEnd(range.endContainer, range.endOffset);
      endRange.insertNode(placeholder);

      range.deleteContents();
    }
    const element = document.createElement(this.type);
    for (let name in this.props) {
      const value = this.props[name];
      if (name.match(/^on([\s\S]+)$/)) {
        const eventName = RegExp.$1.replace(/^[\s\S]/, (s) => {
          return s.toLocaleLowerCase();
        });
        element.addEventListener(eventName, value);
      }
      if (name === 'className') {
        name = 'class';
      }
      element.setAttribute(name, value);
    }
    for (const child of this.children) {
      const range = document.createRange();
      if (element.children.length) {
        range.setStartAfter(element.lastChild);
        range.setEndAfter(element.lastChild);
      } else {
        range.setStart(element, 0);
        range.setEnd(element, 0);
      }
      child.mountTo(range);
    }

    range && range.insertNode(element);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
    this.type = '#text';
    this.children = [];
    this.props = Object.create(null);
  }

  get vdom() {
    return this;
  }

  mountTo(range) {
    this.range = range;
    range.deleteContents();
    range.insertNode(this.root);
  }
}

/**
 * 组件的父类
 */
export class Component {
  constructor(type) {
    this.children = [];
    this.props = Object.create(null);
  }

  get type() {
    return this.constructor.name;
  }

  get vdom() {
    return this.render().vdom;
  }

  setAttribute(name, value) {
    this.props[name] = value;
    this[name] = value;
  }

  setState(state) {
    const merge = (oldState, newState) => {
      for (const p in newState) {
        if (typeof newState[p] === 'object' && newState[p] !== null) {
          if (typeof oldState[p] !== 'object') {
            if (newState[p] instanceof Array) {
              oldState[p] = [];
            } else {
              oldState[p] = {};
            }
          }
          merge(oldState[p], newState[p]);
        } else {
          oldState[p] = newState[p];
        }
      }
    };
    if (!this.state && state) {
      this.state = {};
    }
    merge(this.state, state);
    this.update();
  }
  mountTo(range) {
    this.range = range;
    this.update();
  }

  update() {
    const vdom = this.vdom;
    if (this.oldVdom) {
      const isSameNode = (node1, node2) => {
        if (node1.type !== node2.type) {
          return false;
        }
        for (let name in node1.props) {
          if (
            typeof node1.props[name] === 'object' &&
            node2.props[name] === 'object' &&
            JSON.stringify(node1.props[name]) ===
              JSON.stringify(node2.props[name])
          ) {
            continue;
          }
          if (node1.props[name] !== node2.props[name]) {
            return false;
          }
        }
        if (
          Object.keys(node1.props).length !== Object.keys(node2.props).length
        ) {
          return false;
        }
        return true;
      };
      const isSameTree = (node1, node2) => {
        if (!isSameNode(node1, node2)) {
          return false;
        }
        if (node1.children.length !== node2.children.length) {
          return false;
        }
        for (let i = 0; i < node1.children.length; i++) {
          if (!isSameTree(node1.children[i], node2.children[i])) {
            return false;
          }
        }
        return true;
      };
      const replace = (newTree, oldTree) => {
        if (isSameTree(newTree, oldTree)) {
          return;
        }
        if (!isSameNode(newTree, oldTree)) {
          newTree.mountTo(oldTree.range);
        } else {
          for (let i = 0; i < newTree.children.length; i++) {
            replace(newTree.children[i], oldTree.children[i]);
          }
        }
      };
      replace(vdom, this.oldVdom);
    } else {
      vdom.mountTo(this.range);
    }
    this.oldVdom = vdom;
  }

  appendChild(vchild) {
    this.children.push(vchild);
  }
  
}

/**
 * 核心函数
 * 每个JSX都需要经过的
 */
export const ToyReact = {
  createElement(type, attributes, ...children) {
    let element;
    if (typeof type === 'string') {
      element = new ElementWrapper(type);
    } else {
      element = new type();
    }
    for (const name in attributes) {
      element.setAttribute(name, attributes[name]);
    }
    const insertChildren = (children) => {
      for (const child of children) {
        if (typeof child === 'object' && child instanceof Array) {
          insertChildren(child);
          continue;
        }
        if (child === null || child === void 0) {
          child = ''
        }
        if (
          !(child instanceof Component) &&
          !(child instanceof ElementWrapper) &&
          !(child instanceof TextWrapper)
        ) {
          child = String(child);
        }
        if (typeof child === 'string') {
          child = new TextWrapper(child);
        }
        element.appendChild(child);
      }
    };
    insertChildren(children);
    return element;
  },
  render(vdom, element) {
    const range = document.createRange();
    if (element.children.length) {
      range.setStartAfter(element.lastChild);
      range.setEndAfter(element.lastChild);
    } else {
      range.setStart(element, 0);
      range.setEnd(element, 0);
    }
    vdom.mountTo(range);
  },
};