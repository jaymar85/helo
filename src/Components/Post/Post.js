import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {deletePost} from '../../Ducks/Reducers/postReducer';
import { connect } from "react-redux";

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.post_id}</h1>
                <button 
                onClick={() => this.props.deletePost(this.props.match.params.post_id)}
                >
                Delete
                </button>
            </div>
        )
    }
}

export default connect(null, 
    { 
        deletePost 
    }
)(Post)