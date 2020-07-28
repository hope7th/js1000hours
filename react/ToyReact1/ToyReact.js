export let ToyReact = {
    createElement(type,attributes,...children){
        // console.log(arguments)
        console.log("type:",type);
        console.log("-----------");
        console.log("attributes:",attributes);
        console.log("-----------");
        console.log("children:",children);
        console.log("-----------");
        let element = document.createElement(type)
        for(let name in attributes){
           element.setAttribute(name,attributes[name])
        }
        for(let child of children){
            console.log("child",child);
            console.log("-------------")
            element.appendChild(child);
        }
        return element;
    }
}