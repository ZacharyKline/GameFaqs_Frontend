import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';


class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='loginTitle'>
          <h1>LOG IN TO GAMEFAQS</h1>
        </div>
        <div>
          <Form>
            <Form.Control type='text' placeholder='>>>>>>>>>>>' />
            <Form.Control type="password" placeholder="Password" />
            <Form.Check type="checkbox" label="Stay loggin in on this device?" />
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
        <div>
          <h1>Forgot your username or password?</h1>
          <h1>Don't have an account? Sign up for free!</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginPage