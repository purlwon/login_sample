import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
    //백엔드 정보 저장 state = 로그인사용자id, name, providers(google, facebook, naver)
    constructor(props) {
        super(props);
        this.state = {
            id: '', 
            name: '', 
            providers: '',
        }
    }
    //Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.goodleId, 
            name: res.profileObj.name, 
            provider: 'google'
        })
    }
    //Facebook Login
    responseFacebook = (res) => {
        console.log(res);
    }
    //Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <FacebookLogin 
                    appId="535326200382462"
                    fields="name,email"
                    callback={this.responseFacebook}    
                />
                <br />
                <GoogleLogin 
                    clientId="992297699065-e1ge0d7k265rp8hoidikr7hucdh5mtnl.apps.googleusercontent.com"
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        );
    }
}

export default Login;