import React, { Component } from "react";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function GuestGreeting() {
  return (
    <div>
      <h2>Please sign up.</h2>
      <h3>Flight Details</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹5000</td>
          </tr>
          <tr>
            <td>6E-404</td>
            <td>Bangalore</td>
            <td>Hyderabad</td>
            <td>₹3500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome back</h2>
      <h3>You can now book your tickets.</h3>
      <button>Book Ticket</button>
    </div>
  );
}

function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    const button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    );

    return (
      <div style={{ margin: "40px" }}>
        <Greeting isLoggedIn={isLoggedIn} />
        <br />
        {button}
      </div>
    );
  }
}

export default LoginControl;