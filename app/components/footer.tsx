"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Wrapper } from "../styles/globalcss";

export default function Footer() {
  return (
    <OuterDiv>
      <Wrapper>
        <FooterDiv>
          <Image
            width={150}
            height={41}
            src="/assets/images/svgs/blacklogo.svg"
            alt="logo"
          />
          <FooterLinkContainer>
            <ListItems>Privacy Policy</ListItems>
            <ListItems>Terms and Conditions</ListItems>
            <ListItems>Contact Us</ListItems>
            <ListItems>Careers</ListItems>
          </FooterLinkContainer>
        </FooterDiv>
      </Wrapper>
    </OuterDiv>
  );
}

const OuterDiv = styled.div`
  background-color: white;
  min-height: 100px;
  display:flex;
  align-items:center;
  padding:50px 0 80px 0;
`;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width:666px){
    flex-direction:column;
  }
`;

const FooterLinkContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  color: black;
  font-size: 18px;
  @media only screen and (max-width: 765px) {
    flex-direction: column;
    margin-top:50px;
  }
`;

const ListItems = styled.li`
  list-style: none;
  margin: 0 20px;
  @media only screen and (max-width: 765px) {
    margin: 20px;
  }
`;
