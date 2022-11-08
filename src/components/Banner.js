import React from 'react'
import styled from "styled-components";
import bg from '/src/imgs/banner.jpg'

const StyledBanner = styled.div`
    display: flex;
    margin-top: 50px;
    width: 100vw;
    height: 200px;
    `;

const Banner = () => {
  return (
    <StyledBanner style={{
      backgroundImage: `url(${bg.src})`, backgroundSize: 'cover'      
    }}/>
  )
}

export default Banner