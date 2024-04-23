import React from 'react'
//import styled from 'styled-components';
import HeroSection from './component/HeroSection';
import Service from './component/Service';
import Trusted from './component/Trusted';
import FeatureProduct from './component/FeatureProduct';


function Home() {
  const data = {
    name : "Ravi Store",
  }
  
  return (
    <>
    <HeroSection myData = {data} />
    <FeatureProduct/>
    <Service/>
    <Trusted/>
    
    </>
    );
}
/*
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  height : 100vh;
  
`;
*/

export default Home;


