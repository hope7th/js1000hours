import React from "react"
import withTimer from "../c06/withTimer"

class MessageList extends React.PureComponent {
    render(){
    return <ul>{this.props.messages.map(msg=><li>{msg}</li>)}</ul>
    }
}

export class ChatApp extends React.Component{
    state = {
        messages:[],
        inputMsg:""
    };
    handleInput = evt => {
        this.setState({
            inputMsg:evt.target.value
        })
    };
    handleSend =()=>{
        const text = this.state.inputMsg;
        if(text){
            const newMessages = [...this.state.messages,text];
            this.setState({
                messages:newMessages,
                inputMsg:""
            })
        }
    }
    onchange= (evt)=>{
        this.setState({inputMsg: evt.target.value});
    }

    render(){
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <div>
                    <input value={this.state.inputMsg} onChange={this.onchange} />
                    <button onClick={this.handleSend}>send</button>
                </div>
                <h2>{this.props.time.toLocaleString()}</h2>
            </div>
        )
    }
}

export default withTimer(ChatApp);