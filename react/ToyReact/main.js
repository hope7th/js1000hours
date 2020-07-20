import {ToyReact,Component} from "./ToyReact.js"

class MyComponent extends Component {
    render(){
        return <div>
            cool{this.children}
        </div>
    }
}

let a = <MyComponent name="a"><div>123</div></MyComponent>

ToyReact.render(
    a,
    document.body
);