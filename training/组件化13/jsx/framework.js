export function createElement(type, attributes, ...children) {
    debugger;
    console.log(attributes);
    //div变成 Div的话，会被当成class，所以需要在createElement里面区分
    let element;
    if (typeof type === "string") {
        // element = document.createElement(type)
        element = new ElementWrapper("type")
    } else {
        element = new type;
    }

    for (let name in attributes) {
        element.setAttribute(name, attributes[name])
    }
    for (let child of children) {
        if (typeof child === "string") {
            //文本节点会生产字符串，不会重复调用createElement
            child = new TextWrapper(child);
            //child = document.createTextNode(child);
        }
        element.appendChild(child);
    }
    return element
}


export class Component {
    constructor() {
        // this.root = this.render();
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(child) {
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class ElementWrapper extends Component {
    constructor(type) {
        this.root = document.createElement(type);
    }
}

class TextWrapper extends Component {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
}
