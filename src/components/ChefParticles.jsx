import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ChefParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false }, // div ke andar
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 200,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" }, // white dots
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.5, // slow movement
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
