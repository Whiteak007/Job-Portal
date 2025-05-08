import React from "react";
import HeroSection from '../components/HeroSection'
import JobList from '../components/JobList'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingPage = () => {
    return (
        <Container>
            <HeroSection />
            <JobList />
            <Companies />
            <Testimonials />
            <CTA />
        </Container>
    );
};

export default LandingPage; // ✅ Ensure this is properly placed!
