import { Component,createElement } from "./framework.js"
class Carousel extends Component {
    constructor(){
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name,value){
        this.attributes[name] = value;
    }
    render(){
        console.log(this.attributes);
        this.root = document.createElement("div");
        this.root.classList.add("carousel");
        for(let record of this.attributes.src){
            let child = document.createElement("div");
            child.style.backgroundImage = `url(${record})`
            // child.style.display = "none";
            // child.src = record;
            this.root.appendChild(child);
        }
        this.root.addEventListener("mousedown",event=>{
            console.log("mousedown");
        });
        let move = event=>{
            console.log("mousemove");
        }
        let up = event=>{
            console.log("mouseup");
            document.removeEventListener("mouseover",move);
            document.removeEventListener("mouseup",up);
        }
        document.addEventListener("mousemove",move)
        document.addEventListener("mouseup",up)
        let currentIndex = 0;
        setInterval(()=>{
            let children = this.root.children;
            let nextIndex = (currentIndex+1) % children.length;
            let current = children[currentIndex];
            let next = children[nextIndex];
            next.style.transform = "none"
            next.style.transform = `translateX(${100-nextIndex*100}%)`
            setTimeout(()=>{
                next.style.transform = ""
                current.style.transform = `translateX(${-100-currentIndex*100}%)`
                next.style.transform = `translateX(${-nextIndex*100}%)`
                currentIndex = nextIndex;
            },16)
            

            // for(let child of children){
            //     child.style.transform = `translateX(-${current*100}%）`;
            // }
        },3000)
        return this.root
    }
    mountTo(parent){
        parent.appendChild(this.render());
    }
   
}

let d = [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
]


// document.body.appendChild(a)
let a = <Carousel src={d} />
a.mountTo(document.body);
