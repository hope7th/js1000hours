import {
    Component,
    createElement
} from "./framework.js"
class Carousel extends Component {
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
        //mousedown里面套mousemove和mouseup,这段代码背会，因为永远不会改变刘备三兄弟
        this.root.addEventListener("mousedown", event => {
            console.log("mousedown");
            let children = this.root.children;
            let startX = event.clientX,
                startY = event.clientY;
            let move = event => {
                let x = event.clientX - startX;
                // debugger
                // 过程代码
                // for(let child of children){
                //     child.style.transition = "none";
                //     child.style.transform = `translateX(${-position*500+x}px)`
                // }
                let current = position - ((x - x % 500) / 500);
                //起到整数的效果，非常聪明，大爷的，我怎么没想到
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

                //过程代码
                // for(let child of children){
                //     child.style.transition = "";
                //     child.style.transform = `translateX(${-position*500}px)`;
                // }

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

        //自动轮播的代码
        // setInterval(() => {
        //     /*0,1,2,3
        //     滑倒可见区域分别对应的代码是
        //     translateX(${-0*100}%),translateX(${-1*100}%),translateX(${-2*100}%),translateX(${-3*100}%)
        //     从可见区域滑走分别对应的代码是
        //      translateX(${-1*100}%),translateX(${-2*100}%),translateX(${-3*100}%),translateX(${-4*100}%)
        //     */
        //    //轮播非常巧妙的写法
        //     let children = this.root.children;
        //     let nextIndex = (currentIndex + 1) % children.length;
        //     let current = children[currentIndex];
        //     let next = children[nextIndex];
        //     next.style.transform = "none"
        //     next.style.transform = `translateX(${100-nextIndex*100}%)`
        //     setTimeout(() => {
        //         next.style.transform = ""
        //         current.style.transform = `translateX(${-100-currentIndex*100}%)`
        //         next.style.transform = `translateX(${-nextIndex*100}%)`
        //         currentIndex = nextIndex;
        //     }, 16)
        //     //16毫秒是浏览器一帧的时间


        //     // for(let child of children){
        //     //     child.style.transform = `translateX(-${current*100}%）`;
        //     // }
        // }, 3000)
        return this.root
    }
    mountTo(parent) {
        parent.appendChild(this.render());
    }

}

let d = [
    "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604407002&di=fe798776664b335a9e9c1b620f143968&src=http://imgs.focus.cn/upload/cd/37050/b_370495686.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1488887097,2201518003&fm=26&gp=0.jpg",
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2332437421,282123163&fm=26&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3057015534,400790425&fm=26&gp=0.jpg"
]


// document.body.appendChild(a)
let a = <Carousel src ={d} id="carousel" />
a.mountTo(document.body);