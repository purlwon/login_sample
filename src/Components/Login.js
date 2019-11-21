import React from 'react';
//import { GoogleLogin } from 'react-google-login';

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
                
            </div>
        );
    }
}

export default Login;