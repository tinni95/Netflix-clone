import React from "react";
import { Header } from "../components";

import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
