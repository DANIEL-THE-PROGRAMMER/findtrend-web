"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Wrapper } from "../styles/globalcss";

export default function Footer() {
  return (
    <Wrapper>
      <FooterContent>
        <Logo>
          <Image
            width={150}
            height={150}
            src="/assets/images/svgs/blacklogo.svg"
            alt="logo"
          />
        </Logo>
        <Links>
          <ListItems>Privacy Policy</ListItems>
          <ListItems>Terms and Conditions</ListItems>
          <ListItems>Contact Us</ListItems>
          <ListItems>Careers</ListItems>
        </Links>
      </FooterContent>
    </Wrapper>
  );
}


const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px;
  margin: 30px auto;
  border-radius: 0px;
  padding: 0 20px;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
const Logo = styled.div``;
const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: unset;
  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
const ListItems = styled.li`
  list-style: none;
  margin: 0 20px;
  @media only screen and (max-width: 765px) {
    margin: 20px;
  }
`;