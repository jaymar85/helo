import React, {Component} from 'react';
import './App.css';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
import {connect} from 'react-redux';
import {getSession} from './Ducks/Reducers/UserReducer'

class App extends Component {

  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div className="App">
      {this.props.userId ?
        <Auth />
      :
        <div>
          <Nav/>
          {routes}
        </div>
      }
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.userReducer.user_id,
  };
};

export default connect(mapStateToProps,
  {
    getSession
  }
)(App);