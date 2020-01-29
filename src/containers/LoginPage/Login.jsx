import React from 'react'
import {userActions} from "../../actions";
import {connect} from 'react-redux'
class Login extends React.Component {
    constructor(props) {
        super(props);
//        let loggedIn = false;
 //       const token = localStorage.getItem('token');
 //       if (token) loggedIn = true;

        this.props.dispatch(userActions.logout());
        this.state = {
            username: '',
            password: '',
            submitted:false
          //  loggedIn
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange  (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit (event)  {
        event.preventDefault()

        this.setState({submitted:true});
        const {username, password} =this.state;
        const {dispatch}=this.props;

        if(username && password){
            dispatch(userActions.login(username, password));
        }

    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <h2>Sign up For u account</h2>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.onChange}
                />
                <br/>
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.onChange}
                />
                <br/>
                <input type='submit'/>
            </form>
        )
    }
}

function mapStateToProps(state) {
    const {loggingIn} =state.auth;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export {connectedLogin as Login};