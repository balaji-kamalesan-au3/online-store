import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../Redux/actions/authActions";



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/product"); // push user to dashboard when they login
    }
  if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password
        };
        this.props.loginUser(userData);
    console.log(userData);
  };
render() {
    const { errors } = this.state;
    console.log(this.props)
return (
    <div className="container-fluid" style={{height: window.innerHeight-100}}>
    <div className="row">
        <div className="col-lg jumbotron" style = {{textAlign: "center"}}>
                <h1 className="display-4">Login Here!</h1>
        </div>
    </div>
    
    <div className="row ">
        
          <form>
          <div className="form-group">
              <label for="InputEmail1">Email address</label><br/>
              <input type="email" className="form-control-lg" id="InputEmail1" name="email" value={this.state.email} onChange={this.onChange}  />
              
          </div>
          
          <div className="form-group">
              <label for="InputPassword">Password</label><br/>
              <input type="password" className="form-control-lg" id="InputPassword" name="password" value={this.state.password} onChange={this.onChange} />
          </div>
        
         
          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Login</button>
          </form>

    </div>
</div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);