import React, { Component } from 'react';
import { getUserPosts, getPostsByTitle } from '../../Ducks/Reducers/postReducer';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }

    componentDidMount() {
        this.props.getUserPosts();
        // this.props.getPostsByTitle;
    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props.posts.title || this.state.searchText !== '') {
            return null
        } else {
            this.props.getPostsByTitle();
        }
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.props.getPostsByTitle(searchText);
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                Dashboard
            </div>
        )
    }
}
