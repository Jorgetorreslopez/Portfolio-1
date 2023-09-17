import { gsap } from 'gsap';
import { useRef } from 'react';

export default function WalkingS() {
  const silhouetteRef = useRef(null);

  const walkingTimeline = gsap.timeline();

  walkingTimeline.to(silhouetteRef.current, {
    x: '+=100', // Adjust the distance and direction as needed
    duration: 1, // Duration of the step
    ease: 'linear',
  });

  function handleWelcomeButtonClick() {
    walkingTimeline.play(); // Start the walking animation
  }

  return (
    <div>
      {/* Other content */}
      <button onClick={handleWelcomeButtonClick}>Welcome</button>
      <div ref={silhouetteRef}> {/* Attach the ref to your silhouette element */}</div>
    </div>
  );
}
