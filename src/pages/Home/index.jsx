import HeroFullWidthCard from "../../components/HeroFullWidthCard";
import HalfImageHalfCopy from "../../components/HalfImageHalfCopy";
import ListingHeader from "../../components/ListingHeader";
import PromoRow from "../../components/PromoRow";
import PersonalizationSignup from "../../components/PersonalizationSignup";
import FullWidthTestimonial from "../../components/FullWidthTestimonial";

function Home() {
  return (
    <div className="home">
      <HeroFullWidthCard
        title="The Future of Personalized Health Learning Begins Here"
        subheading="Launching summer 2026. Be the first to explore the American Heart Association's groundbreaking Patient Education Hub."
        buttonText="Reserve Your Spot Today"
        buttonUrl="#signup"
        imgSrc="https://placehold.co/700x400/EEE/DDD?text=FPO"
        imgAlt="placeholder image"
      />
      <HalfImageHalfCopy
        imgPosition="left"
        heading="A New Approach to Health Education"
        subheading="Comprehensive educational tools designed to empower individuals in understanding and managing their health journey."
        imgSrc="https://placehold.co/700x400/EEE/DDD?text=FPO"
        imgAlt="placeholder image"
      />
      <HalfImageHalfCopy
        imgPosition="right"
        heading="Designed for Patients, Caregivers, and Professionals"
        subheading="Who want intelligent, personalized health insights."
        imgSrc="https://placehold.co/700x400/EEE/DDD?text=FPO"
        imgAlt="placeholder image"
      />
      <HalfImageHalfCopy
        imgPosition="left"
        heading="Adaptive Learning"
        subheading="Navigate your medical journey with confidence and clear, accessible information tailored to your needs."
        imgSrc="https://placehold.co/700x400/EEE/DDD?text=FPO"
        imgAlt="placeholder image"
      />
      <ListingHeader
        heading="Built For You, by the AHA"
        subheading="Our platform serves diverse health education needs."
      />
      <PromoRow />
      <PersonalizationSignup />
      <FullWidthTestimonial />
    </div>
  );
}

export default Home;
