import React from "react";

import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  max-width: 400px;
  align-self: center;
  border-width: 1,
  border-style: 'solid',
  border-color: 'black'
`;

const MainContent = props => {
  console.log(props);
  return <Main>{props.children}</Main>;
};

export default MainContent;
