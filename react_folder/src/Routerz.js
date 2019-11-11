import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/">Home</Link>
          <Switch>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  )
}

class Register extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = { user: "", password: "" }
    this.logIn = this.logIn.bind(this)
  }

  logIn = () =>
  {
    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => { console.log(xhr.responseText) })
    xhr.open('GET', 'https://localhost:3000/users')
    xhr.send()
  }

  render()
  {
    return (<div>
      <User />
      <Password />
      <Submit />
    </div>)
  }
}

function User()
{
  return (
    <div>
      <label>Username</label>
      <input type="text"></input>
    </div>
  )
}

function Password()
{
  return (
    <div>
      <label>Password</label>
      <input type="texts"></input>
    </div>
  )
}

function Submit()
{
  return (
    <button type="submit">Submit</button>
  )
}

export default App