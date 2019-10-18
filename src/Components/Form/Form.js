import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPost} from '../../Ducks/Reducers/postReducer'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            post_image: "",
            content: ""
        }
    }

    addNewPost() {
        const {title, post_image, content} = this.state;
        const { user_id } = this.props;
        const newPost = { title, post_image, content, user_id };

        this.props.addPost(newPost);
        this.props.history.push("/dashboard");
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Add a new Post</h2>
                    <div>
                        <label>Title:</label>
                        <input 
                        type='text'
                        name="title"
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div alt="no img" style={{ backgroundImage: `url(${this.state.post_image})` }} className="Form-img-box"></div>
                    <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        onChange={this.handleInputChange} />
                    </div>
                    <div>
                    <label>Content:</label>
                    <textarea
                        rows="10"
                        cols="180"
                        type="text"
                        name="content"
                        onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <button onClick={this.handlePost}>Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        post_image: reduxState.postReducer.post_image
    }
}

export default connect(mapStateToProps, 
    {
        addPost
    }
)(Form);