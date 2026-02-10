import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - About Constructor");
  }

  componentDidMount() {
    console.log("Parent - About ComponentDidMount");
    // API calls can be made here
  }

  render() {
    console.log("Parent - About Render");
    return (
      <div>
        <h1>About Us</h1>
        <p>We are a team of passionate food lovers!</p>
        <h2>Our Mission</h2>
        <p>To provide the best food experiences to our customers.</p>
        {/* <User name="John Doe (Function)" location="New York" /> */}
        {/* <UserClass name="First Class" location="Los Angeles" /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
