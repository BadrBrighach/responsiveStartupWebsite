import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonLight1(props) {
  return (
    <Container {...props}>
      <Explore>test</Explore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #EFEFF4;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Explore = styled.span`
  font-family: Roboto;
  color: #000;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonLight1;
