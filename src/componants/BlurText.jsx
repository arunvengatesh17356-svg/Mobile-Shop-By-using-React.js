import HeroCarousel from "./HeroCarousel";
import BlurText from "../components/BlurText";

const HomePage = () => {

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <BlurText
  text="Mobiles & Accessories"
  delay={200}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-4xl font-bold text-center text-[#4294f7] mb-6"
/>
    </>
  );
};

export default HomePage;