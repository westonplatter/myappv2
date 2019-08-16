import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <span style={{color: "red"}}>Greeting</span>: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
