import React from "react";

class RegistrationPage extends React.Component {
  render() {
    return (
        <React.Fragment>
            <h1>Registraition Page</h1>
        </React.Fragment>
    )
  }
}

function mapDispathToProps(){
  return ({
    wooh: "wooh!"
  })
}

export default mapDispathToProps()(RegistrationPage)