"use client";

import styled from "styled-components";

export const Card = ({
  title,
  subtitle,
  amount,
  features,
  color,
}: {
  title: string;
  subtitle: string;
  amount: number;
  features: string[];
  color?: string;
}) => {
  return (
    <CardContainer color={color}>
      <TitleWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Divider />
        <CostWrapper>
          <Price>
            <Value>${amount}</Value>
            <Duration>/Month</Duration>
          </Price>
        </CostWrapper>
        <Features>
          {features.map((feature, index) => {
            return (
              <Items key={index}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.6946 7.93136C19.1467 8.45305 19.0904 9.2425 18.5687 9.69463L11.0687 16.1946C10.5731 16.6241 9.82984 16.5976 9.36612 16.1339L5.36612 12.1339C4.87796 11.6457 4.87796 10.8543 5.36612 10.3661C5.85427 9.87798 6.64573 9.87798 7.13388 10.3661L10.3109 13.5431L16.9313 7.80541C17.453 7.35327 18.2425 7.40966 18.6946 7.93136Z"
                    fill="black"
                  />
                </svg>
                {feature}
              </Items>
            );
          })}
        </Features>
      </TitleWrapper>
      <TrialBtn color={color}>Start Free Trial</TrialBtn>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 45px;
  border-radius: 10px;
  background-color: ${(props) => (props.color ? "#a8ff35" : "#fafafa")};
  color: black;
  flex-grow: 1;
  min-height: 740px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 666px) {
    min-height: 640px;
  }
`;

const TrialBtn = styled.button`
  width: 100%;
  min-height: 58px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  border: none;
  outline: none;
  margin-top: 60px;
  color: ${(props) => (props.color === "#a8ff35" ? "white" : "black")};
  background-color: ${(props) =>
    props.color === "#a8ff35" ? "#000" : "#a8ff35"};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
const SubTitle = styled.div`
  font-size: 18px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: black;
  margin: 25px 0;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CostWrapper = styled.div`
  margin-bottom: 35px;
`;
const Price = styled.div``;
const Value = styled.span`
  font-weight: 400;
  font-size: 64px;
  font-weight: 700;
  margin-right: 9px;
`;
const Duration = styled.span`
  font-weight: 400;
  font-size: 18px;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  color: black;
`;
