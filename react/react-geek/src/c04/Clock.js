import React from "react"
export default class clock extends React.Component {
    constructor(props){
        super(props);
        console.log("Clock constructed");
        this.state = {date:new Date()}
    }
    componentDidMount(){
        console.log("Clock did mount");
        this.timeID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        console.log("Clock will unmount");
        clearInterval(this.timeID)
    }
    componentDidUpdate(){
        console.log("Clock did update");
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return(
            <div>
                <h2>
                    it is {this.state.date.toLocaleDateString()}
                </h2>
            </div>
        )
    }
}