import React from "react";

import styled from "styled-components";

const Content = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const CenteredContent = styled.div`
  // border: 1px solid blue;
  width: 100%;
  max-width: 450px;
`;

const Screen = props => {
  return (
    <Content>
      <CenteredContent>{props.children}</CenteredContent>
    </Content>
  );
};

export default Screen;
