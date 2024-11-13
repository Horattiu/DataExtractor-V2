import Lottie from "lottie-react"; // Folosește importul implicit, dacă acesta este cazul
import animationData from "./animation.json"; // Fișierul JSON corect

const Animation = () => {
  return (
    <div className="animation-container w-1/4 mx-auto ">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Animation;
