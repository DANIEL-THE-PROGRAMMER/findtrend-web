'use client'

import React from "react";
import styled from "styled-components";
import { Wrapper } from "@/app/styles/globalcss";

export const MailSection: React.FC = () => {
  return (
    <OuterDiv>
      <Wrapper>
        <HeroHolder>
          <Join>Join us on email for</Join>
          <Trending>more trending topics</Trending>
          <JoinBtn>Join Now</JoinBtn>
        </HeroHolder>
      </Wrapper>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  background: #a8ff35;
`;

const HeroHolder = styled.div`
  padding: 140px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 666px) {
    padding: 70px 0;
  }
`;

const Join = styled.h4`
  font-size: 72px;
  line-height: 112%;
  text-align: center;
  color:black;
  @media only screen and (max-width: 666px) {
    font-family: Effra;
    font-size: 36px;
    font-weight: 900;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const Trending = styled.h4`
  font-weight: 900;
  font-size: 72px;
  line-height: 112%;
  text-align: center;
  color: #87d322;
  @media only screen and (max-width: 666px) {
    font-family: Effra;
    font-size: 36px;
    font-weight: 900;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const JoinBtn = styled.button`
  outline: none;
  border: none;
  box-shadow: none;
  width: 180px;
  height: 57px;
  background: #000000;
  border-radius: 40px;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  margin: 40px 0;
  cursor: pointer;
`;
