import { useEffect, useRef, useState } from "react";
import "../../../styles/BubbleComponent.css";

const BubbleComponent = () => {
  const bubbleRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 50, // Center horizontally (adjusted to bubble size)
    y: window.innerHeight / 2 - 100, // Adjusted initial vertical position
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!isActive) setIsActive(true); // Activate the bubble float on scroll
    };

    const updateBubblePosition = () => {
      if (!isActive) return;

      const xOffset = (Math.random() - 0.5) * 5; // Smaller random movement on x-axis
      const yOffset = (Math.random() - 0.5) * 5; // Smaller random movement on y-axis

      setPosition((prevPosition) => {
        const newX = prevPosition.x + xOffset;
        const newY = prevPosition.y + yOffset;

        // Ensure the bubble doesn't stick to the screen edges
        return {
          x: Math.max(50, Math.min(newX, window.innerWidth - 100)),
          y: Math.max(50, Math.min(newY, window.innerHeight - 100)),
        };
      });

      requestAnimationFrame(updateBubblePosition); // Continually update the bubble position
    };

    window.addEventListener("scroll", handleScroll);
    if (isActive) {
      updateBubblePosition();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <div
      ref={bubbleRef}
      className="bubble1"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default BubbleComponent;
