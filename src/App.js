import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import QuickRoundContainer from './QuickRoundContainer';
import Test from './Test';
import User from './User';
import Login from './Login';
import Register from './Register';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      apiKey: '',
      stats: [],
      isLogged: false
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = () => {
    fetch('https://word-gather.herokuapp.com/user', {
      credentials: 'include',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          username: data.username,
          apiKey: data['api-key'],
          stats: data.stats,
          isLogged: true
        })
      })
  }

  handleLogin = () => {
    this.setState({
      isLogged: true
    })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='App'>
          <Nav isLogged={this.state.isLogged} username={this.state.username} />
          <Switch>
            <Route path='/' exact render={props => <Main {...props} username={this.state.username} />} />
            <Route path='/quick-round' component={QuickRoundContainer} />
            <Route path='/test-multi' component={Test} />
            <Route path='/user' render={props => <User {...props} data={this.state} update={this.getUserData} />} />
            <Route path='/login' render={props => <Login {...props} handleLogin={this.handleLogin} />} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
