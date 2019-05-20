import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Redirect } from "react-router-dom";

// https://github.com/ZeroWhisper/doc-development-preset/blob/master/react-native/yarn-install.md

import { Creators as LoginActions } from "../../store/ducks/login";

import {
  Center,
  BoxLogin,
  BoxLoginCenter,
  BoxLoginInput,
  BoxLoginSubmit,
  TitleLogin
} from "./style";

class Login extends Component {
  state = {
    _username: "",
    _password: ""
  };

  handleSet = e => {
    const { dataset, value } = e.target;
    const { name } = dataset;
    this.setState({ ...this.state, [name]: value });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const { loginRequest } = this.props;
    loginRequest(this.state);
  };

  render() {
    // console.log(this.state);

    if (this.props.login.token) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Center>
        <div />
        <BoxLoginCenter>
          <TitleLogin>CAMPANHA DA VACINAÇÃO</TitleLogin>
          <BoxLogin onSubmit={this.handleLoginSubmit}>
            <BoxLoginInput>
              <input
                type="text"
                data-name="_username"
                autoComplete="new-password"
                placeholder="Login"
                value={this.state._username}
                onChange={this.handleSet}
              />
              <p>W</p>
            </BoxLoginInput>
            <BoxLoginInput>
              <input
                type="password"
                data-name="_password"
                autoComplete="new-password"
                placeholder="Senha"
                onChange={this.handleSet}
              />
              <p>W</p>
            </BoxLoginInput>
            <BoxLoginSubmit type="submit">Entrar</BoxLoginSubmit>
          </BoxLogin>
        </BoxLoginCenter>
        <div />
      </Center>
    );
  }
}

// Usar mais esse método para normalizar dados antes de exibi-los
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...LoginActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
