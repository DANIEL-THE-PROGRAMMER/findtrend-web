'use client'

import Image from "next/image"
import styled from "styled-components"


export const PlatFormLogos = ({ image, color }: { image: string, color?: string }) => {
    return (
        <OuterDiv color={color}>
            <Image src={image} alt={image} width={60} height={60} />
        </OuterDiv>
    )
}


const OuterDiv = styled.div`
    width:124px;
    height:124px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:8px;
    background-color:${(props) => (
        props.color ? "#a8ff35" : "white"
    )};
`