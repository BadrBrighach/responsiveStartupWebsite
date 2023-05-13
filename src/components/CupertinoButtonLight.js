import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonLight(props) {
  return (
    <Container {...props}>
      <LearnMore>Learn More</LearnMore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(33,37,41,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const LearnMore = styled.span`
  font-family: Work Sans;
  color: rgba(255,255,255,1);
  font-size: 20px;
  font-weight: 400;
`;

export default CupertinoButtonLight;
