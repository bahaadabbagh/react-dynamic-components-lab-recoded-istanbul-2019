// your code here
import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div className="Comment">{this.props.commentText}</div>
        );
    }
}