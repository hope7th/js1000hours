export default {
    name:"FunctionalButton",
    functional:true,
    render:(createElement, { data, children })=>{
        return createElement("button",data,children)
    }
}