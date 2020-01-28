import React from 'react'

class Login extends React.Component{
    constructor(props) {
        super(props);
        let loggedIn = false;
        const token = localStorage.getItem('token');
        if (token) loggedIn =true;

        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    render() {
        return(
            <form>
                <input type='text' placeholder='username' value={this.state.username} onChange={this.onChange} name='username' />
                <input type='password' placeholder='password' value={this.state.password} onChange={this.onChange} name='password' />
                <input type='submit' />
            </form>
        )
    }
}
export default Login