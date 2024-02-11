"use client";

import React from "react";
import styled from "styled-components";
import { Wrapper } from "@/app/styles/globalcss";
import Image from "next/image";

export default function HeroSectionHeader() {
  return (
    <OuterDiv>
      <Image
        src="/assets/images/pngs/BG.png"
        alt="background"
        fill={true}
        sizes="100%"
        style={{
          zIndex: -10,
        }}
      />
      <Wrapper>
        <ContentWrapper>
          <HeroContainer>
            <Title>Minimize your tabs.</Title>
            <Title>Find the trends!</Title>
            <Desc>
              Don’t let your computer memories consume all of those browser
              tabs. Findtrend lets you gather all of your favorite websites into
              one place.
            </Desc>

            <ContactWrapper>
              <StartBtn>Get Started 🔥</StartBtn>
              <Image
                width={100}
                height={100}
                src="/assets/images/svgs/img_hero.svg"
                alt="research"
              />
            </ContactWrapper>
          </HeroContainer>

          <ImagesWrapper>
            <ImageOne>
              <Image
                width={400}
                height={100}
                src="/assets/images/svgs/tab4.svg"
                alt="tab"
              />
            </ImageOne>
            <ImageTwo>
              <Image
                width={400}
                height={100}
                src="/assets/images/svgs/tab3.svg"
                alt="tab"
              />
            </ImageTwo>
            <ImageThree>
              <Image
                width={400}
                height={100}
                src="/assets/images/svgs/tab2.svg"
                alt="tab"
              />
            </ImageThree>
            <ImageFour>
              <Image
                width={400}
                height={100}
                src="/assets/images/svgs/tab1.svg"
                alt="tab"
              />
            </ImageFour>
          </ImagesWrapper>
        </ContentWrapper>
      </Wrapper>
    </OuterDiv>
  );
}

const OuterDiv = styled.div`
  position: relative;
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 30px 20px 140px;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 198px;
`;
const Title = styled.div`
  color: #fff;
  font-size: 72px;
  font-weight: 900;
  line-height: 81px;
  letter-spacing: 0em;
  text-align: center;

  @media only screen and (max-width: 666px) {
    font-size: 36px;
    line-height: 41px;
  }
`;
const Desc = styled.p`
  font-family: Effra;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #8b8b8b;
  max-width: 600px;
  padding: 25px 0;
`;
const StartBtn = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  font-family: Effra;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  width: 180px;
  height: 57px;
  background: #a8ff35;
  border-radius: 40px;
  text-align: center;
  margin: 40px 0;
  color: #000;
  @media only screen and (max-width: 780px) {
    margin: unset;
  }
  @media only screen and (max-width: 660px) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 765px) {
    span {
      display: none !important;
    }
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  margin: 125px auto 0;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 660px) {
    flex-direction: column;
    max-height: 350px;
  }
`;
const ImageOne = styled.div`
  position: relative;
  left: 20px;
  bottom: 35px;
  z-index:2;
  img {
    transform: rotate(-6deg);
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    left: unset;
    bottom: unset;
    span span img {
      transform: rotate(-10deg);
      width: 250px !important;
    }
  }
`;
const ImageTwo = styled.div`
  position: relative;
  right: 25px;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    top: unset;
    right: unset;
    span span img {
      width: 250px !important;
    }
  }
`;
const ImageThree = styled.div`
  position: relative;
  top: -50px;
  right: 50px;
  z-index: 2;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    top: unset;
    right: unset;
    span span img {
      width: 250px !important;
    }
  }
`;
const ImageFour = styled.div`
  position: relative;
  right: 120px;
  img {
    transform: rotate(4deg);
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    right: unset;
    bottom: unset;
    span span img {
      width: 250px !important;
    }
  }
`;
