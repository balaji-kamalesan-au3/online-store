import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../Redux/actions/authActions";



class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }
  onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
    const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
      this.props.registerUser(newUser, this.props.history); 
    };

    
render() {
    const { errors } = this.state;
return (
      <div className="container-fluid" style={{height: window.innerHeight-100}}>
          <div className="row jumbotron">
              <div className="col-lg-4">
                  <h1 className="display-4">Please Register with us !</h1>
              </div>
                <form>
                <div className="form-group">
                    <label for="InputEmail1">Email address</label><br/>
                    <input type="email" className="form-control-lg" id="InputEmail1" name="email" value={this.state.email} onChange={this.onChange}  />
                    
                </div>
                <div className="form-group">
                    <label for="name">Name</label><br/>
                    <input type="input" className="form-control-lg" id="name" name="name" value={this.state.name} onChange={this.onChange}  />
                    
                </div>
                <div className="form-group">
                    <label for="InputPassword">Password</label><br/>
                    <input type="password" className="form-control-lg" id="InputPassword" name="password" value={this.state.password} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label for="InputPassword1">Confirm Password</label><br/>
                    <input type="password" className="form-control-lg" id="InputPassword1" name="password2" value={this.state.password2} onChange={this.onChange} />
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Register</button>
                </form>

          </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));