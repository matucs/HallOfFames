import React, { PureComponent } from 'react'
import { withRouter, NavLink } from 'react-router-dom';
import { tryLogin } from './logic'

class LoginUi extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            formClassName: 'needs-validation',
            username: '',
            password: ''
        }
        this.formRef = React.createRef();
        this.usernameRef = React.createRef();
    }
    submit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            formClassName: "needs-validation was-validated",
        })
        tryLogin(this.state.email, this.state.password).then((res) => {
            if(res) {
               this.props.history.push('/fames')
            }
            
        }).catch((e) => {
            console.log(e)
        })
    }
    usernameChanged(e) {
        this.setState({
            username: e.target.value
        })
    }
    passwordChange(e) {
        this.setState({
            password: e.target.value
        })
    }
    checkRememberMe() {

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card  mx-auto mt-5 p-5 rounded">
                        <div className="row">
                            <h3 className="mr-5">Sign In</h3>
                            <NavLink className="btn btn-outline-primary ml-5" to="/register">Sign Up</NavLink>
                        </div>
                        <hr></hr>
                        <form ref={this.formRef} onSubmit={this.submit.bind(this)} className={this.state.formClassName} noValidate>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input ref={el => this.usernameRef = el} onChange={this.usernameChanged.bind(this)} type="text" className="form-control" id="username" placeholder="Enter username" required />
                                <div className="valid-feedback">good!</div>
                                <div className="invalid-feedback">invalid-username</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input ref={el => this.passRef = el} onChange={this.passwordChange.bind(this)} type="password" className="form-control" id="password" placeholder="Password" required />
                            </div>
                            <div className="form-check">
                                <input onChange={this.checkRememberMe.bind(this)} className="form-check-input" id="rememberMe" type="checkbox" />
                                <label className="form-check-label" htmlFor="rememberMe" >Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginUi);