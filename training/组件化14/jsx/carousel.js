import {
    Component
} from "./framework.js"
export class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render() {
        console.log(this.attributes);
        this.root = document.createElement("div");
        this.root.classList.add("carousel");
        for (let record of this.attributes.src) {
            let child = document.createElement("div");
            child.style.backgroundImage = `url(${record})`
            // child.style.display = "none";
            // child.src = record;
            this.root.appendChild(child);
        }
        let position = 0;
        this.root.addEventListener("mousedown", event => {
            console.log("mousedown");
            let children = this.root.children;
            let startX = event.clientX,
                startY = event.clientY;
            let move = event => {
                let x = event.clientX - startX;
                let current = position - ((x - x % 500) / 500);
                for (let offset of [-1, 0, 1]) {
                    let pos = current + offset;
                    pos = (pos + children.length) % children.length;
                    children[pos].style.transition = "none";
                    children[pos].style.transform = `translateX(${-pos*500+offset*500+x%500}px)`;
                }

            }

            let up = event => {
                let x = event.clientX - startX;
                position = position - Math.round(x / 500);
                for (let offset of [-1, -Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length;
                    children[pos].style.transition = "";
                    children[pos].style.transform = `translateX(${-pos*500+offset*500+x%500}px)`;
                }
                document.removeEventListener("mouseover", move);
                document.removeEventListener("mouseup", up);
            }
            document.addEventListener("mousemove", move)
            document.addEventListener("mouseup", up)
        });
        let currentIndex = 0;
        setInterval(() => {
            let children = this.root.children;
            let nextIndex = (currentIndex + 1) % children.length;
            let current = children[currentIndex];
            let next = children[nextIndex];
            next.style.transform = "none"
            next.style.transform = `translateX(${100-nextIndex*100}%)`
            setTimeout(() => {
                next.style.transform = ""
                current.style.transform = `translateX(${-100-currentIndex*100}%)`
                next.style.transform = `translateX(${-nextIndex*100}%)`
                currentIndex = nextIndex;
            }, 16)


            // for(let child of children){
            //     child.style.transform = `translateX(-${current*100}%）`;
            // }
        }, 3000)
        return this.root
    }
    mountTo(parent) {
        parent.appendChild(this.render());
    }

}