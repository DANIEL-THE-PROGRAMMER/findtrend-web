'use client'

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Wrapper } from "@/app/styles/globalcss";

export const OpenTab: React.FC = () => {
  return (
    <OuterDiv>
      <Wrapper>
        <ContentWrapper>
          <Title>Open new tabs is sh*t</Title>
          <CardWrapper>
            <Image
              width={200}
              height={100}
              src="/assets/images/svgs/solution.svg"
              alt="solution"
            />

            <CardWrap>
              <Image
                width={400}
                height={100}
                src="/assets/images/svgs/tab5.svg"
                alt="solution"
              />
            </CardWrap>

            <Image
              width={200}
              height={100}
              src="/assets/images/svgs/tab.svg"
              alt="solution"
            />
          </CardWrapper>

          <Desc>
            A solution for your browser tabs and don’t make your device get
            slower over time. Get ease and faster to discover a trend with just
            one tab.
          </Desc>
        </ContentWrapper>
      </Wrapper>
    </OuterDiv>
  );
};


const OuterDiv = styled.div`
  background: #a8ff35;
`;
const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 140px 20px;
  @media only screen and (max-width: 666px) {
    padding: 50px 20px;
  }
`;

const Title = styled.h4`
  color: #fff;
  font-size: 72px;
  font-weight: 900;
  line-height: 81px;
  letter-spacing: 0em;
  text-align: center;
  color: #000;
  margin: 60px 0;
  @media only screen and (max-width: 666px) {
    font-size: 36px;
    line-height: 41px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #000;
  margin-top: 50px;
  max-width: 600px;
`;
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
  }
  @media only screen and (max-width: 666px) {
    align-items: center;
    flex-direction: column;
  }
`;
const CardWrap = styled.div`
  border: 50px solid #fff;
  border-radius: 15px;
  @media only screen and (max-width: 666px) {
    border: 15px solid #fff;
    border-radius: 9px;
  }
`;