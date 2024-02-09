import styled from "styled-components";
import Image from "next/image";

export const Brand = ({
  image,
  width,
  height,
  key
}: {
  image: string;
  width: number;
  height: number;
  key:number
}) => {
  return (
    <>
      <BrandDiv>
        <Image
          src={image}
          alt={image}
          width={width}
          height={height}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </BrandDiv>
    </>
  );
};

const BrandDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  flex-grow: 1;
  border-radius: 8px;
  background: #f5f5f5;
  @media only screen and (max-width: 666px) {
  }
`;
