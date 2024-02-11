"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Wrapper } from "@/app/styles/globalcss";
import { PlatFormLogos } from "../platformlogos";
import { useWindow } from "@/app/lib/windowontext";

export const PlatForm = () => {
  const context = useWindow();

  const { width } = context;
  const isMobile = width < 666;

  return (
    <OuterDiv>
      <Wrapper>
        <HeroWrapper>
          <TopHeader>
            <Title>All platform connect to Findtrend</Title>
          </TopHeader>
          <Logos>
            <LogoInnerDiv>
              <PlatFormLogos image="/assets/images/pngs/image 105.png" />
              <PlatFormLogos
                image="/assets/images/pngs/image 96.png"
                color="#a8ff35"
              />
              <PlatFormLogos image="/assets/images/pngs/Rectangle 6.png" />
              <PlatFormLogos image="/assets/images/pngs/image 111.png" />
              <PlatFormLogos image="/assets/images/pngs/image 113.png" />
              <PlatFormLogos image="/assets/images/pngs/image 114.png" />
              <PlatFormLogos image="/assets/images/pngs/image 115.png" />
              <PlatFormLogos image="/assets/images/pngs/image 112.png" />
            </LogoInnerDiv>
            <LogoInnerDiv2>
              <PlatFormLogos image="/assets/images/pngs/image 105.png" />
              <PlatFormLogos
                image="/assets/images/pngs/image 96.png"
                color="#a8ff35"
              />
              <PlatFormLogos image="/assets/images/pngs/Rectangle 6.png" />
              <PlatFormLogos image="/assets/images/pngs/image 111.png" />
              <PlatFormLogos image="/assets/images/pngs/image 113.png" />
              <PlatFormLogos image="/assets/images/pngs/image 114.png" />
              <PlatFormLogos image="/assets/images/pngs/image 115.png" />
              <PlatFormLogos image="/assets/images/pngs/image 112.png" />
            </LogoInnerDiv2>
            <LogoInnerDiv3>
              <PlatFormLogos image="/assets/images/pngs/image 105.png" />
              <PlatFormLogos
                image="/assets/images/pngs/image 96.png"
                color="#a8ff35"
              />
              <PlatFormLogos image="/assets/images/pngs/Rectangle 6.png" />
              <PlatFormLogos image="/assets/images/pngs/image 111.png" />
              <PlatFormLogos image="/assets/images/pngs/image 113.png" />
              <PlatFormLogos image="/assets/images/pngs/image 114.png" />
              <PlatFormLogos image="/assets/images/pngs/image 115.png" />
              <PlatFormLogos image="/assets/images/pngs/image 112.png" />
            </LogoInnerDiv3>
          </Logos>
          <Tweets>
            <TweetImage>
              <Image
                fill={true}
                src="/assets/images/pngs/tweet_1.png"
                alt="tweet"
              />
            </TweetImage>

            <TweetImageTwo>
              <Image
                fill={true}
                src="/assets/images/pngs/tweet_2.png"
                alt="tweet"
              />
            </TweetImageTwo>
            <TweetImage>
              <Image
                fill={true}
                src="/assets/images/pngs/tweet_3.png"
                alt="tweet"
              />
            </TweetImage>
          </Tweets>

          <TrendBtn>View More Trend</TrendBtn>
        </HeroWrapper>
      </Wrapper>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  background: #fafafa;
`;

const LogonInner = styled.div``;

const LogoInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  display: flex;
  @media screen and (max-width: 666px) {
    animation: slide 5s linear infinite;
    @keyframes slide {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`;

const LogoInnerDiv2 = styled.div`
  justify-content: center;
  gap: 20px;
  display: none;
  @media screen and (max-width: 666px) {
    display: flex;
    animation: slide 5s linear infinite;
    @keyframes slide {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`;

const LogoInnerDiv3 = styled.div`
  justify-content: center;
  gap: 20px;
  display: none;
  @media screen and (max-width: 666px) {
    display: flex;
    animation: slide 5s linear infinite;
    @keyframes slide {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`;

const TweetImage = styled.div`
  width: 800px;
  height: 274px;
  position: relative;
  @media screen and (max-width: 666px) {
    width: 100%;
    height: 136px;
  }
`;

const TweetImageTwo = styled.div`
  width: 800px;
  height: 804px;
  position: relative;
  @media screen and (max-width: 666px) {
    width: 100%;
    height: 364px;
  }
`;

const HeroWrapper = styled.div`
  margin: 0 auto;
  padding: 100px 20px;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 666px) {
    padding: 80px 20px;
  }
`;
const TopHeader = styled.h4`
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 666px) {
    font-size: 30px;
    line-height: 41px;
  }
`;
const Title = styled.div`
  color: black;
  @media screen and (max-width: 666px) {
    font-size: 36px;
  }
`;
const Logos = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 30px;
  gap: 20px;
  @media screen and (max-width: 666px) {
    margin-bottom: 0px;
    margin-top: 40px;
  }
`;
const TrendBtn = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  width: 180px;
  height: 57px;
  background: #000;
  border-radius: 40px;
  text-align: center;
  margin: 40px 0;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;
const Tweets = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    margin: 40px 0;
  }
  @media screen and (max-width: 666px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 50px;
  }
`;
