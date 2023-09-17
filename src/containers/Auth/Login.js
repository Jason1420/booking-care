import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Login.scss'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowPassword: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    handleLogin = () => {
        alert("login")
    }
    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type='text' className='form-control' placeholder='Enter your username' value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)} />
                        </div>
                        <div className='col-12 form-group login-input'>

                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? "text" : 'password'} className='form-control' placeholder='Enter your password' value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)} />
                                <span onClick={() => this.handleShowPassword()}><i class={!this.state.isShowPassword ? 'far fa-eye-slash' : 'far fa-eye'}></i></span>
                            </div>

                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Log in</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password '>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span  >Or Login with</span>
                        </div>
                        <div className='col-12 text-center social-login'>
                            <i class="fab fa-google-plus google"></i>
                            <i class="fab fa-facebook facebook" ></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);