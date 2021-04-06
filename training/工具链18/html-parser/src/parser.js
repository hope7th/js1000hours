let cunrrentToken = null;
let cunrrentAttribute = null;
let stack = [{
    type: "document",
    children: []
}];
let cunrrentTextNode = null;

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
            if (p != "type" && p != "tagName") {
                element.attibutes.push({
                    name: p,
                    value: token[p]
                })
            }
        }
        top.children.push(element);
        if (!token.isSelfClosing) {
            stack.push(element);
        }
        cunrrentTextNode = null;
    } else if (token.type == "endTag") {
        if (token.tagName != token.tagName) {
            throw new Error("Tag start end doesn't match")
        } else {
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
    } else if (c.match(/^[a-zA-Z]$/)) {
        cunrrentToken = {
            type: "startTag",
            tagName: ""
        }
        return tagName(c);
    } else {
        emit({
            type: "text",
            content: c
        })
        return data;
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
        emit(cunrrentToken);
        return data;
    } else {
        cunrrentToken.tagName +=c;
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


function attributeName(c) {
    if (c.match(/^[\t\n\f ]$/)|| c == "/" || c == ">" || c == "EOF"){
        return afterAttributeName(c);
    } else if (c == "=") {
        return beforeAttributeValue;
    } else if (c == "\u0000") {

    } else if (c == "\"" || c == "'" || c == "<") {

    } else {
        cunrrentAttribute.name += c;
        return afterAttributeName;
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

function selfCloseingStartTag(c) {
    if (c == ">") {
        cunrrentToken.isSelfClosing = true;
        return data;
    } else if (c == "EOF") {

    } else {

    }
}

function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]$/)) {
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

function afterAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return afterAttributeName(c);
    }else if (c == "/") {
        return selfCloseingStartTag;
    }  else if (c == "=") {
        return beforeAttributeValue;
    } else if (c == ">") {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        emit(cunrrentToken);
        return data;
    } else if (c == EOF) {

    } else {
        cunrrentToken[cunrrentAttribute.name] = cunrrentAttribute.value;
        cunrrentAttribute = {
            name:"",
            value:""
        };
        return attributeName(c)
    }

}

export function paserHTML(html) {
    console.log("------")
    console.log(html);
    let state = data;
    console.log(state);
    for (let c of html) {
        state = state(c)
    }
    state = state(EOF)
    return stack[0];
}