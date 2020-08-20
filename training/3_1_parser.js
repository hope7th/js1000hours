const css = require("css");
const layout = require("./4_1_layout.js")
let cunrrentToken = null;
let cunrrentAttribute = null;
let stack = [{
    type: "document",
    children: []
}];
let cunrrentTextNode = null;
let rules = [];

function specificity(selector){
    var p = [0,0,0,0];
    var selectorParts = selector.split(" ");
    for(var part of selectorParts){
        if(part.charAt(0)=="#"){
            p[1] += 1;
        }else if(part.charAt(0)=="."){
            p[2]+=1;
        }else {
            p[3]+=1;
        }
    }
    return p;
}

function compare(sp1,sp2){
    if(sp1[0]-sp2[0])
        return sp1[0]-sp2[0]
    if(sp1[1]-sp2[1])
        return sp1[1]-sp2[1]
    if(sp1[2]-sp2[2])
        return sp1[2]-sp2[2];
    return sp1[3]-sp2[3];
}

function addCSSRules(text) {
    var ast = css.parse(text);
    console.log(JSON.stringify(ast, null, "  "));
    rules.push(...ast.stylesheet.rules);
}

function match(element,selector){
    if(!selector||!element.attibutes)
        return false;
    if(selector.charAt(0)=="#"){
        var attr = element.attibutes.filter(attr=>attr.name==="id")[0];
        if(attr&&attr.value===selector.replace("#",''))
            return true;

    }else if(selector.charAt(0)=="."){
        var attr = element.attibutes.filter(attr=>attr.name==="class")[0];
        if(attr&&attr.value===selector.replace("#",'.'))
            return true;
    }else {
        if(element.tagName=== selector){
            return true;
        }
    }
    return false;
}

function computeCSS(element) {
    console.log(rules);
    console.log("comput CSS for Element", element);
    var element = stack.slice().reverse();
    if (!element.computedStyle)
        element.computedStyle = {};

    for (let rule of rules) {
        var selectorParts = rule.selectors[0].splict(" ").reverse();

        if (!match(element.selectorParts[0]))
            continue
        let matched = false;
        var j = 1;
        for (var i = 0; i < element.length; i++) {
            if (match(element[i], selectorParts[j])) {
                j++;
            }
        };
        if (j > selectorParts.length)
            matched = true;
        if (matched) {
            var sp = specificity(rule.selectors[0])
            var computedStyle = element.computedStyle;
            for(var declaration of rule.declarations){
                if(!computedStyle[declaration.property])
                    computedStyle[declaration.property] = {}
                if(!computedStyle[declaration.property].specificity){
                    computedStyle[declaration.property].value = declaration.value;
                    computedStyle[declaration.property].specificity = sp;
                }else if(compare(computedStyle[declaration.property].specificity,sp)<0){
                    computedStyle[declaration.property].value = declaration.value;
                    computedStyle[declaration.property].specificity = sp;
                }
            }
            console.log("Element", element, "matched rule", rule);
        }
    }
}

function emit(token) {
    console.log(token)
    let top = stack[stack.length - 1];
    if (token.type == "startTag") {
        let element = {
            type: "element",
            children: [],
            attibutes: []
        };
        element.tagName = token.tagName;
        for (let p in token) {
            if (p != token && p != "tagName") {
                element.attibutes.push({
                    name: p,
                    value: token[p]
                })
            }
        }
        computeCSS(element);
        top.children.push(element);
        element.parent = top;
        if (!token.isSelfClosing) {
            stack.push(element);
        }
        cunrrentTextNode = null;
    } else if (token.type == "endTag") {
        if (token.tagName != token.tagName) {
            throw new Error("Tag start end doesn't match")
        } else {
            if (top.tagName === "style") {
                addCSSRules(top.children[0].content)
            }
            layout(top)
            stack.pop()
        }
        cunrrentTextNode = null;
    } else if (token.type == "text") {
        if (cunrrentTextNode == null) {
            cunrrentTextNode = {
                type: "text",
                content: ""
            }
            top.children.push(cunrrentTextNode);
        }
        cunrrentTextNode.content += token.content;
    }
}
const EOF = Symbol("EOF");

function data(c) {
    if (c == "<") {
        return tagOpen;
    } else if (c == EOF) {
        emit({
            type: "EOF"
        })
        return;
    } else {
        emit({
            type: "text",
            content: c
        })
        return data
    }
}

function tagOpen(c) {
    if (c == "/") {
        return endTagOpen;
    } else if (c.match(/^[a-zA-Z$]/)) {
        cunrrentToken = {
            type: "startTag",
            tagName: ""
        }
        return tagName(c);
    } else {
        return;
    }
}

function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]¥/)) {
        cunrrentToken = {
            type: "endTag",
            tagName: ""
        }
        return tagName(c)
    } else if (c == ">") {

    } else if (c == EOF) {

    } else {

    }
}

function tagName(c) {
    if (c.match(/^[\t\n\g ]$/)) {
        return beforeAttributeName;
    } else if (c == "/") {
        return selfCloseingStartTag;
    } else if (c.match(/^[a-zA-Z]$/)) {
        cunrrentToken.tagName += c
        return tagName;
    } else if (c == ">") {
        return data;
    } else {
        return tagName;
    }
}

function beforeAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c == ">" || c == "/" || c == EOF) {
        return afterAttributeName(c)
    } else if (c == "=") {

    } else {
        cunrrentAttribute = {
            name: "",
            value: ""
        }
        return attributeName(c);
    }
}

function afterAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/) || c == "/" || c == EOF) {
        return afterAttributeName(c);
    } else if (c == "=") {
        return beforeAttributeValue;
    } else if (c == "\u0000") {

    } else if (c == "\"" || C == "'" || c == "<") {

    } else {
        cunrrentAttribute.name += c;
        return attributeName
    }

}

function beforeAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/) || c == "/" || c == EOF) {
        return beforeAttributeValue;
    } else if (c == "\"") {
        return doubleQuotedAttributeValue;
    } else if (c == "\'") {
        return singleQuotedAttributeValue;

    } else if (c == ">") {

    } else {
        return UnquotedAttributeValue(c);
    }

}


function doubleQuotedAttributeValue(c) {
    if (c == "\"") {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        return afterQuotedAttributeValue;
    } else if (c == "\u0000") {

    } else if (c == EOF) {

    } else {

        cunrrentAttribute.value += c;
        return doubleQuotedAttributeValue
    }

}

function singleQuotedAttributeValue(c) {
    if (c == "\'") {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        return afterQuotedAttributeValue;
    } else if (c == "\u0000") {

    } else if (c == EOF) {

    } else {

        cunrrentAttribute.value += c;
        //    return singleQuotedAttributeValue 奇怪
        return doubleQuotedAttributeValue
    }


}

function UnquotedAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        return beforeAttributeName;
    } else if (c == "/") {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        return selfCloseingStartTag;
    } else if (c == ">") {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        emit(cunrrentToken);
        return data;
    } else if (c == "\u0000") {

    } else if (c == "\"" || C == "'" || c == "<" || c == "=" || c == "`") {

    } else if (c == EOF) {} else {
        cunrrentAttribute.name += c;
        return UnquotedAttributeValue
    }

}

function afterQuotedAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c == "/") {
        return selfCloseingStartTag;
    } else if (c == ">") {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        emit(cunrrentToken);
        return data;
    } else if (c == EOF) {

    } else {
        cunrrentAttribute.name += c;
        return doubleQuotedAttributeValue
    }

}




function attributeName(c) {

}

function selfCloseingStartTag(c) {
    if (c == ">") {
        cunrrentToken.isSelfClosing = true;
        return data;
    } else if (c == "EOF") {

    } else {

    }
}

module.exports.paserHTML = function paserHTML(html) {
    console.log("------")
    console.log(html);
    let state = data;
    for (let c of html) {
        state = state(c)
    }
    state = state(EOF)
}