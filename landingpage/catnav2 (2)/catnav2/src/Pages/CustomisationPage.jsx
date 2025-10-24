
import React, { useState } from "react";
import SectionTabs from "../components/Navbar/SectionTabs";
import PersonalisationSection from "../components/Sections/PersonalisationSection";
import MadeToOrderSection from "../components/Sections/MadeToOrderSection";
import GiftingSection from "../components/Sections/GiftingSection";
import FeaturedInSection from "../components/Sections/FeaturedInSection"; 

const CustomisationPage = () => {
  const [activeTab, setActiveTab] = useState("PERSONALISATION");

  return (
    <div>
      <SectionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "PERSONALISATION" && <PersonalisationSection />}
      {activeTab === "MADE TO ORDER" && <MadeToOrderSection />}
      {activeTab === "GIFTING & BULK ORDERS" && <GiftingSection />}
      <FeaturedInSection />
    </div>
  );
};

export default CustomisationPage;
