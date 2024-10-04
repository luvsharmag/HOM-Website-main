// HeroSection.jsx
import BubbleComponent from "./BubbleComponent";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="relative pt-hero-padding z-hero">
        <BubbleComponent />
      </div>
      <h1 className="text-6xl font-bold text-center z-hero mt-8">
        Not sorry to <br /> burst your bubble
      </h1>
    </section>
  );
};

export default HeroSection;
