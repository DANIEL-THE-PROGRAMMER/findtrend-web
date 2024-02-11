"use client";

import styled from "styled-components";
import { Wrapper } from "@/app/styles/globalcss";
import Image from "next/image";
import { Card } from "../card";

export const CardSection: React.FC = () => {
  return (
    <OuterDiv>
      <Wrapper>
        <TitleSection>
          <Title>Get your best deal</Title>
          <Subscription>
            <Month>Monthly</Month>

            <Tab>
              <Ball></Ball>
            </Tab>
            <Year>Yearly</Year>
            <Image
              src="/assets/images/pngs/card.png"
              alt=""
              width={88}
              height={66}
            />
          </Subscription>
        </TitleSection>
        <CardContainerOuter>
          <Card
            title="Personal"
            subtitle="Special first packet for all"
            amount={8}
            features={[
              "Up to 5 page each group",
              "Up to 10 group page",
              "5 Days group page saved",
            ]}
          />
          <Card
            title="Regular"
            subtitle="Recommended for personal pro"
            amount={20}
            features={[
              "Up to 15 page each group",
              "Download page up to 20 page",
              "Up to 10 group page",
              "15 Days group page saved",
            ]}
            color="#a8ff35"
          />
          <Card
            title="Premium"
            subtitle="Packet for Startup & Company"
            amount={48}
            features={[
              "Unlimited group page",
              "Unlimited Download page",
              "Unlimited Page each group",
              "Customize sorting group page",
              "Customize group page name",
              "Up to 10 group page",
              "30 Days group page saved",
            ]}
          />
        </CardContainerOuter>
      </Wrapper>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  background-color: black;
  padding: 150px 0;
`;
const CardContainerOuter = styled.div`
  display: flex;
  gap: 45px;
  @media screen and (max-width:666px){
    flex-direction:column;
    padding:0px 20px;
  }
`;
const TitleSection = styled.div``;
const Title = styled.h4`
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  @media only screen and (max-width: 666px) {
    font-family: Effra;
    font-size: 36px;
    font-weight: 900;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
const Subscription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
`;
const Month = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  margin: 0 20px;
`;
const Tab = styled.div`
  width: 104px;
  height: 52px;
  background: #ffffff;
  border-radius: 99px;
  display: flex;
  align-items: center;
`;
const Ball = styled.div`
  width: 36px;
  height: 36px;
  background: #a8ff35;
  border-radius: 99px;
  margin: 0 10px;
`;
const Year = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #f5f5f5;
  margin: 0 20px;
`;
