import { Carousel } from "./carousel.js"
import { Timeline,Animation } from "./animation.js"
import {
    Component,
    createElement
} from "./framework.js"

let d = [
    "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604407002&di=fe798776664b335a9e9c1b620f143968&src=http://imgs.focus.cn/upload/cd/37050/b_370495686.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1488887097,2201518003&fm=26&gp=0.jpg",
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2332437421,282123163&fm=26&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3057015534,400790425&fm=26&gp=0.jpg"
]


// document.body.appendChild(a)
let a = <Carousel src ={d} />
a.mountTo(document.body);
let tl = new Timeline();
window.tl = tl;
window.animation
tl.add(new Animation({set a(v){console.log(v)}},"a",0,100,1000,null))
tl.start();