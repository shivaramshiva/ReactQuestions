import React from 'react';
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: "Default User",
            count: 0
        };
        // console.log(`${props.name} Child Constructor`);
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shivaramshiva");
        const json = await data.json();
        this.setState({ userInfo: json });
        // console.log(`${this.state.userInfo.name} Child ComponentDidMount`);
    }

    componentDidUpdate() {
        console.log(`${this.state.userInfo.name} Child ComponentDidUpdate`);
    }

    componentWillUnmount() {
        console.log(`${this.state.userInfo.name} Child ComponentWillUnmount`);
    }

    render() {
        console.log(`${this.props.name} Child Render`);
        return (
            <div>
      <h1 style={{ color: 'red', textTransform: 'uppercase' }}>Class User Component</h1>
      <h2>This is User Profile Page</h2>
      <p>Welcome to the user profile page. Here you can view and edit your profile information.</p>
      <h2>Name: {this.state.userInfo.name}</h2>
      <h2>Location: {this.state.userInfo.location}</h2>
      <img src={this.state.userInfo.avatar_url} alt="User Avatar" width="100" />
      <button onClick={() => this.setState({ 
        count: this.state.count + 1 
        })}>Increment Count</button>
        <button onClick={() => this.setState({ 
        count: this.state.count - 1 
        })}>Decrement Count</button>
        <button onClick={() => this.setState({ 
        count: 0 
        })}>Reset Count</button>
      <h2>Count: {this.state.count}</h2>
    </div>
        );
    }
}

export default UserClass;