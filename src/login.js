import './login.scss';

import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';
import React, { Component } from 'react';

import { md5 } from 'md5';

const clientId = encodeURIComponent('5685eb2ff3ac46f5b29c1e17df0b9eab');
const home = encodeURIComponent('http://localhost:3000/home/');
const scope = encodeURIComponent('user-read-private user-read-email playlist-modify');
// const scope = encodeURIComponent(`${Object.values()}`);

const valuesScope = {
    USER_READ_PRIVATE: 'user-read_private',
    USER_READ_PRIVATE: 'user-read_private',
}
class Login extends Component {

    state = {
        hash: encodeURIComponent('123456789')
    }

    handleClickLogin = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${home}&state=${this.state.hash}&scope=${scope}`;
    }

    render() {
        return (
                <Container className="login-container">
                    <div className="authentication">
                        <p>Login</p>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="exemplo@gmail.com" aria-label="exemplo@gmail.com" aria-describedby="basic-addon1"/>
                        </InputGroup>

                        <p>Senha</p>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="******"/>
                        </InputGroup>

                        <Button variant="primary" onClick={this.handleClickLogin}>Fazer Login</Button>
                    </div>
                </Container>
        )
    }
}


export default Login;
