import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.post_id}</h1>
            </div>
        )
    }
}
