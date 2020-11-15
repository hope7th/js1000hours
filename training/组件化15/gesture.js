let element = document.documentElement;

let handler;
let startX, startY;
let isPan = false,
    isTap = true,
    isPress = false;
export class Dispatcher{
    constructor(element){
        this.element = element;
    }
    dispatch(type, properties) {
        let event = new Event(type);
        for (let name in properties) {
            event[name] = properties[name];
        }
        this.element.dispatchEvent(event);
        console.log(event);
    }
}

//listen=>recognize=>dispath

//new Listener(new Recognizer(dispath))

export class Listener {
    constructor(element, recognizer) {
        let isListeningMouse = false;
        let contexts = new Map();
        element.addEventListener("mousedown", event => {
            let context = Object.create(null);
            //用移位处理鼠标的按键
            contexts.set("mouse" + (1 << event.button), context);
            recognizer.start(event, context);
            let mousemove = event => {
                let button = 1;
                while (button <= event.buttons) {
                    //按下去，move才成立，掩码的使用方式，掩码成立才回调
                    if (button & event.buttons) {
                        //鼠标的中键和右键是反过来的，需要额外处理
                        //order of buttns & button properyu is not same
                        let key;
                        if (button === 2)
                            key = 4;
                        else if (button === 4)
                            key = 2;
                        else
                            key = button;
                        let context = contexts.get("mouse" + key);
                        recognizer.move(event, context);
                    }

                    button = button << 1;
                }
            }
            let mouseup = event => {
                let context = contexts.get("mouse" + (1 << event.button));
                recognizer.end(event, context);
                contexts.delete("mouse" + (1 << event.button))
                if (event.buttons === 0) {
                    document.removeEventListener("mousemove", mousemove);
                    document.removeEventListener("mouseup", mouseup);
                    isListeningMouse = false;
                }

            }
            if (!isListeningMouse) {
                document.addEventListener("mousemove", mousemove);
                document.addEventListener("mouseup", mouseup);
                isListeningMouse = true;
            }

        })
        element.addEventListener("touchstart", event => {
            for (let touch of event.changedTouches) {
                let context = Object.create(null);
                contexts.set(touch.identifier, context);
                recognizer.start(touch, context);
            }
        })

        element.addEventListener("touchmove", event => {
            for (let touch of event.changedTouches) {
                let context = contexts.get(touch.identifier);
                recognizer.move(touch, context);
            }
        })

        element.addEventListener("touchend", event => {
            for (let touch of event.changedTouches) {
                let context = contexts.get(touch.identifier);
                recognizer.end(touch, context);
                contexts.delete(touch.identifier);

            }
        })
        element.addEventListener("touchcancel", event => {
            //打断end，即为cancel.
            for (let touch of event.changedTouches) {
                let context = contexts.get(touch.identifier);
                recognizer.cancel(touch, context);
                contexts.delete(touch.identifier);
            }
        })
    }
}

export class Recognizer {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    };
    start(point, context) {
        console.log("start", point.clientX, point.clientY);
        context.startX = point.clientX;
        context.startY = point.clientY;
        context.points = [{
            t: Date.now(),
            x: point.clientX,
            y: point.clientY
        }]
        context.isPan = false;
        context.isTap = true;
        context.isPress = false
        context.handler = setTimeout(() => {
            console.log("press");
            this.dispatcher.dispatch("press", {});
            context.isPan = false;
            context.isTap = false;
            context.isPress = true;
        }, 500)
    }
    move(point, context) {
        let dx = point.clientX - context.startX,
            dy = point.clientY - context.startY;
        if (dx ** 2 + dy ** 2 > 100) {
            context.isPan = true;
            context.isPan = false;
            context.isTap = true;
            context.isPress = false;
            context.isVertical = Math.abs(dx) < Math.abs(dy)
            console.log("panstart");
            this.dispatcher.dispatch("panstart", {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                isVertical: context.isVertical
            });
            clearTimeout(context.handler);
        }
        if (context.isPan) {
            console.log(dx, dy);
            console.log("pan");
            context.isVertical =
                this.dispatcher.dispatch("pan", {
                    startX: context.startX,
                    startY: context.startY,
                    clientX: point.clientX,
                    clientY: point.clientY,
                    isVertical: context.isVertical
                });
        }
        context.points = context.points.filter(point => Date.now() - point.t < 500)
        context.points.push({
            t: Date.now(),
            x: point.clientX,
            y: point.clientY
        })
        console.log("move", point.clientX, point.clientY)
    }
    end(point, context) {
        console.log("end", point.clientX, point.clientY)
        if (context.isTap) {
            console.log("tap");
            this.dispatcher.dispatch("tap", {})
            clearTimeout(context.handler);
            // 不清除会立即触发
        }

        if (context.isPress) {
            this.dispatcher.dispatch("pressend", {})
            console.log("pressend");
        }
        let d, v;
        context.points = context.points.filter(point => Date.now() - point.t < 500)
        if (!context.point.length) {
            v = 0;
        } else {
            d = Math.sqrt((point.clientX - context.points[0].x) ** 2 +
                (point.clientY - context.points[0].y) ** 2);
            v = d / (Date.now() - contexts.point.t);
        }
        if (v > 1.5) {
            console.log("flick");
            context.isFlick = true;
        } else {
            context.isFlick = false;
        }
        if (context.isPan) {
            console.log("panend");
            this.dispatcher.dispatch("panend", {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                isVertical: context.isVertical,
                isFlick: context.isFlick
            });
        }

    }
    cancel(point, context) {
        clearTimeout(context.handler);
        console.log("cancel", point.clientX, point.clientY);
        this.dispatcher.dispatch("cancel", {});
    }

}
export function enableGesture(element) {
    new Listener(element,new Recognizer(new Dispatcher(element)))
}