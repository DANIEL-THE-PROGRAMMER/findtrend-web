"use client";

import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Wrapper } from "../styles/globalcss";

interface NavLinkWrapperProps {
  toggle: boolean;
}

interface HamProps {
  toggle: boolean;
}

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleHamburger = () => {
    setMenu(!menu);
  };

  return (
    <OuterDiv>
      <Wrapper>
        <NavWrapper>
          <LogoHolder>
            <Image
              src="/assets/images/svgs/logo.svg"
              height={150}
              width={150}
              alt="logo"
            />
          </LogoHolder>

          <MobileLogo>
            <Image
              src="/assets/images/pngs/Vector.png"
              height={40}
              width={40}
              alt="logo"
            />
          </MobileLogo>

          <NavLinkWrapper toggle={menu}>
            <LinkItems>About</LinkItems>
            <LinkItems>How it Work</LinkItems>
            <LinkItems>Pricing</LinkItems>
            <LinkItems>Solution</LinkItems>
            <LinkItems>Features</LinkItems>
            <LinkItems>Login</LinkItems>
            <Register>Register</Register>
          </NavLinkWrapper>

          <RegHolder>
            <Login>Login</Login>
            <Register>Register</Register>
          </RegHolder>

          <HamMenu onClick={toggleHamburger}>
            <Ham1 toggle={menu}></Ham1>
            <Ham2 toggle={menu}></Ham2>
          </HamMenu>
        </NavWrapper>
      </Wrapper>
    </OuterDiv>
  );
}

export default Navbar;
const OuterDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 99px;
  z-index: 20;
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
`;
const LogoHolder = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const MobileLogo = styled.div`
  z-index: 999;
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;
const NavLinkWrapper = styled.div<NavLinkWrapperProps>`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 765px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    background: black;
    width: 100%;
    height: 100vh;
    transform: ${(props) =>
      props.toggle ? "translateY(0px)" : "translateY(-1500px)"};
    display: ${(props) => (props.toggle ? "flex" : "none")};
  }
  @media only screen and (max-width: 666px) {
    padding-top:160px;
    justify-content: flex-start;
    gap:60px;
  }
`;
const LinkItems = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;
const RegHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 213px;
  height: 42px;
  justify-content: space-between;
  @media only screen and (max-width: 765px) {
    display: none;
  }
`;

const HamMenu = styled.div`
  display: none;
  z-index: 999;
  justify-content: space-between;
  @media only screen and (max-width: 765px) {
    display: block;
  }
`;
const Ham1 = styled.div<HamProps>`
  width: 25px;
  height: 2px;
  background: #fff;
  margin: 5px 0;
  z-index: 999;
  transform: ${(props) =>
    props.toggle ? "rotate(40deg) translate(6px,4px) " : "rotate(0)"};
`;
const Ham2 = styled.div<HamProps>`
  width: 25px;
  height: 2px;
  background: #fff;
  margin: 5px 0;
  z-index: 999;
  transform: ${(props) =>
    props.toggle ? "rotate(-40deg) translate(2px,2px) " : "rotate(0deg)"};
`;

const Login = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;
const Register = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  width: 129px;
  height: 42px;
  background: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  font-size: 18px;
  color: black;
`;
