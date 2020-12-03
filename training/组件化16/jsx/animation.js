// 1000ms / 60frame = 16.666ms/frame 每秒60帧
// setInterval(()=>{},16); //和浏览器底层相关不安全

import { linear } from "./ease";

// let tick = ()=>{
//     setTimeout(tick,16);
// }

// let tick2 = ()=>{
//     //执行下一帧的🈴️执行代码，适用于降帧，降频
//      requestAnimationFrame(tick2)
// }
//symbol当作key，具有唯一性
const TICK = Symbol("tick");
const TICK_HANDLER = Symbol("tick-handler");
const ANIMATION = Symbol("animation");
const START_TIME = Symbol("start-time");
const PAUSE_START = Symbol("pause-start");
const PAUSE_TIME = Symbol("pause-time");
export class Timeline {
    constructor() {
        this.state = "Inited";
        this[ANIMATION] = new Set();
        this[START_TIME] = new Map();
    }
    start() {
        if(this.state!=="Inited")
            return;
        this.state = "started";
        let startTime = Date.now();
        this[PAUSE_TIME] = 0;
        this[TICK] = () => {
            console.log("tick");
            let t = Date.now() - startTime;
            for (let animation of this[ANIMATION]) {

                let now = Date.now();
                let t;
                if (this[START_TIME].get(animation) < startTime)
                    t = now - startTime - this[PAUSE_TIME] - animation.delay;
                else
                    t = this[START_TIME].get(animation) - this[PAUSE_TIME]- animation.delay;
                if (animation.duration < t) {
                    this[ANIMATION].delete(animation);
                    t = animation.duration;
                }
                if(t>0)
                    animation.receive(t);
            }
            this[TICK_HANDLER] = requestAnimationFrame(this[TICK])
        }
        this[TICK]();
    }
    pause() {
        if(this.state!=="started")
            return;
        this.state = "paused";
        this[PAUSE_START] = Date.now();
        cancelAnimationFrame(this[TICK_HANDLER])
    }
    resume() {
        if(this.state!=="paused")
            return;
        this.state = "started";
        this[PAUSE_TIME] = Date.now() - this[PAUSE_START];
        this[TICK]();
    }
    reset() {
        this.pause();
        let startTime = Date.now();
        this[PAUSE_TIME] = 0;
        this[ANIMATION] = new Set();
        this[START_TIME] = new Map();
        this[TICK_HANDLER] = null;
        this[PAUSE_START] = 0;
    }
    add(animation) {
        this[ANIMATION].add(animation);
        this[START_TIME].set(animation, Date.now());
    }
}

export class Animation {
    constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
        timingFunction = timingFunction || (v=>v);
        template = template || (v=>v);
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction;
        this.delay = delay;
        this.template = template;
    }
    receive(time) {
        console.log(time);
        let range = (this.endValue - this.startValue);
        let progress = this.timingFunction(time / this.duration);
        this.object[this.property] = this.template(this.startValue + range * progress);
    }
}