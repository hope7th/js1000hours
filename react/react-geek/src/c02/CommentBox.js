import React from "react"
import CommentList from "./CommentList"
import CommentFrom from "./CommentForm"
import withTimer from "../c06/withTimer"
import "./CommentBox.css"
import CommentForm from "./CommentForm"
const comments = [
    {
        author:"Nate",
        content:'hello react,this is a nice book'
    },
    {
        author:"kevin",
        content:'hello redux'
    },
    {
        author:"kevin",
        content:"hello Rekit! "
    }
]

export class CommentBox extends React.PureComponent {
    render(){
        return (
            <div className="comment-box">
                <h1>
                    Coments ({comments.length})
                </h1>
                <CommentList comments={comments} ></CommentList>
                <CommentForm />
                {this.props.time.getTime()}
            </div>
        )
    }
}

export default withTimer(CommentBox)
