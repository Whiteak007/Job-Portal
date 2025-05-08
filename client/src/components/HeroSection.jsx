import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundImg from "../../public/innovations.jpeg";

const HeroSection = () => {
  return (
    <HeroContainer style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <GlassBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <h1>Find Your Dream Job Here</h1>
        <SearchBox>
          <input type="text" placeholder="Search jobs..." />
          <button>Search</button>
        </SearchBox>
      </GlassBox>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const GlassBox = styled(motion.div)`
  padding: 30px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
