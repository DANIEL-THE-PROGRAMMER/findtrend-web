"use client";

import styled from "styled-components";
import Image from "next/image";
import { Wrapper } from "@/app/styles/globalcss";
import { Brand } from "../brand";
import { useWindow } from "@/app/lib/windowontext";
import { useContext } from "react";

export const BrandSection: React.FC = () => {
  const context = useWindow();
  const { width } = context;

  const isWindow = width > 660;

  const BrandsImage: {
    image: string;
    width: number;
    height: number;
  }[] = [
    {
      image: "/assets/images/pngs/image 116.png",
      width: isWindow ? 190 : 156,
      height: isWindow ? 40 : 24,
    },
    {
      image: "/assets/images/pngs/image 117.png",
      width: isWindow ? 156 : 156,
      height: isWindow ? 40 : 24,
    },
    {
      image: "/assets/images/pngs/image 118.png",
      width: isWindow ? 146 : 156,
      height: isWindow ? 40 : 26,
    },
    {
      image: "/assets/images/pngs/image 119.png",
      width: isWindow ? 174 : 156,
      height: isWindow ? 40 : 15,
    },
    {
      image: "/assets/images/pngs/image 120.png",
      width: isWindow ? 112 : 156,
      height: isWindow ? 40 : 26,
    },
    {
      image: "/assets/images/pngs/image 121.png",
      width: isWindow ? 162 : 156,
      height: isWindow ? 40 : 21,
    },
    {
      image: "/assets/images/pngs/image 122.png",
      width: isWindow ? 148 : 156,
      height: isWindow ? 40 : 19,
    },
    {
      image: "/assets/images/pngs/image 124.png",
      width: isWindow ? 151 : 156,
      height: isWindow ? 40 : 26,
    },
    {
      image: "/assets/images/pngs/image 125.png",
      width: isWindow ? 182 : 156,
      height: isWindow ? 40 : 24,
    },
    {
      image: "/assets/images/pngs/image 126.png",
      width: isWindow ? 164 : 156,
      height: isWindow ? 40 : 29,
    },
    {
      image: "/assets/images/pngs/image 127.png",
      width: isWindow ? 174 : 156,
      height: isWindow ? 40 : 25,
    },
    {
      image: "/assets/images/pngs/image 128.png",
      width: isWindow ? 160 : 97,
      height: isWindow ? 40 : 17,
    },
    {
      image: "/assets/images/pngs/image 129.png",
      width: isWindow ? 176 : 108,
      height: isWindow ? 40 : 23,
    },
    {
      image: "/assets/images/pngs/image 130.png",
      width: isWindow ? 178 : 108,
      height: isWindow ? 40 : 20,
    },
    {
      image: "/assets/images/pngs/image 132.png",
      width: isWindow ? 162 : 98,
      height: isWindow ? 40 : 24,
    },
    {
      image: "/assets/images/pngs/image 133.png",
      width: isWindow ? 190 : 156,
      height: isWindow ? 40 : 21,
    },
  ];

  return (
    <OuterDiv>
      <Wrapper>
        <HeroWrapper>
          <TitleWrapper>
            <Dark>
              Findtrend helps you to increase your productivity and reduce your
              computer memory load,
            </Dark>
            <Light>
              an application that can fulfill your daily browsing needs.
            </Light>
          </TitleWrapper>

          <DarkTitle>Findtrend make +1000 Startup grow</DarkTitle>
          <BrandsContainer>
            {BrandsImage.map((brand, index) => {
              return (
                <Brand
                  width={brand.width}
                  height={brand.height}
                  image={brand.image}
                  key={index + 1}
                />
              );
            })}
          </BrandsContainer>
        </HeroWrapper>
      </Wrapper>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  background-color: white;
`;

const BrandsContainer = styled.div`
  position: relative;
  min-height: 576px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width: 666px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroWrapper = styled.div`
  padding: 100px 20px;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 666px) {
    padding: 100px 20px;
  }
`;
const TitleWrapper = styled.div``;
const Dark = styled.span`
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 666px) {
    font-size: 36px;
    line-height: 41px;
  }
  color: black;
`;
const DarkTitle = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: center;
  margin: 200px 0 100px;
  @media only screen and (max-width: 666px) {
    font-size: 30px;
    line-height: 41px;
    margin: 70px 0 50px;
  }
  color: black;
`;
const Light = styled.span`
  color: #adadad;
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 666px) {
    font-size: 36px;
    line-height: 41px;
  }
`;
