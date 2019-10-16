import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {logoutUser} from '../../Ducks/Reducers/UserReducer';
import {connect} from 'react-redux';

class Nav extends Component {

    handleLogout = () => {
        this.props.logoutUser().then(res => {
        this.props.history.push("/");
        });
    };

    render() {
        return (
            <div>
                <img src={this.props.user_photo}/>
                <Link to="/dashboard"><button>Home</button></Link>
                <Link to="/new"><button>New Post</button></Link>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        user_photo: reduxState.userReducer.user_photo
    };
};

export default connect(mapStateToProps,
    {
        logoutUser
    }
)(Nav);