"use client";

import Image from "next/image";
import styled from "styled-components";

export const PlatFormLogos = ({
  image,
  color,
}: {
  image: string;
  color?: string;
}) => {
  return (
    <OuterDiv color={color}>
      <ImageBox>
        <Image src={image} alt={image} fill={true} />
      </ImageBox>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  width: 124px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => (props.color ? "#a8ff35" : "white")};
  @media screen and (max-width: 666px) {
    width: 64px;
    height: 64px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 666px) {
    width: 30px;
    height: 30px;
  }
`;
