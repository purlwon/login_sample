import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
            <div>
                <h1>Home</h1>
                <div><Link to='/login'>로그인</Link></div>
            </div>
        );
    }
}

export default Home;