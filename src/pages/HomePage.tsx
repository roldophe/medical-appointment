import React from "react";
import MainHero from "../components/hero/MainHero";
import HealthcareSection from "../components/section/HealthcareSection";
import DoctorsSection from "../components/section/DoctorsSection";
import SectionMuted from "../components/section/SectionMuted";
import Container from "../components/section/Container";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainHero />
      <SectionMuted>
        <Container>
          <HealthcareSection />
        </Container>
      </SectionMuted>
      
      <SectionMuted className="border-b border-muted-200 dark:border-muted-800">
        <Container>
          <DoctorsSection/>
        </Container>
      </SectionMuted>
    </div>
  );
};

export default HomePage;
