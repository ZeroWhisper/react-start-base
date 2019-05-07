import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// https://github.com/ZeroWhisper/doc-development-preset/blob/master/react-native/yarn-install.md

import { Creators as LoginActions } from "../../store/ducks/login";

import {
  Box,
  BoxLogin,
  BoxLoginCenter,
  BoxLoginInput,
  BoxLoginSubmit,
  TitleLogin
} from "./style";

class Login extends Component {
  state = {
    _login: "",
    _password: ""
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    console.log("Clique no submit", this.state);
    console.tron.log("TESTE");
  };

  render() {
    console.log("Login", this.state);
    console.log("Login", this.props);
    return (
      <>
        <Box>
          <BoxLoginCenter>
            <TitleLogin>CAMPANHA DA VACINAÇÃO</TitleLogin>
            <BoxLogin onSubmit={this.handleLoginSubmit}>
              <BoxLoginInput>
                <input
                  type="text"
                  autoComplete="new-password"
                  placeholder="Login"
                />
                <p>W</p>
              </BoxLoginInput>
              <BoxLoginInput>
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Senha"
                />
                <p>W</p>
              </BoxLoginInput>
              <BoxLoginSubmit type="submit">Entrar</BoxLoginSubmit>
            </BoxLogin>
          </BoxLoginCenter>
        </Box>
      </>
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
