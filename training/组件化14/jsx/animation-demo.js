import { Timeline,Animation } from "./animation.js"
import {ease,easeIn} from "./ease.js"
let tl = new Timeline();
window.tl = tl;
tl.add(new Animation(document.querySelector("#el").style,"transform",0,500,2000,0,ease,v=>`translateX(${v}px)`))
tl.start();
document.querySelector("#el2").style.transition = "transform 2s ease";
document.querySelector("#el2").style.transform = `translateX(500px)`;
document.querySelector("#pause-btn").addEventListener("click",()=> tl.pause());

document.querySelector("#resume-btn").addEventListener("click",()=>t1.resume());