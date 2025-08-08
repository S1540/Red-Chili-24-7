import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ChefParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: {
              value: 200,
              density: { enable: true, area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
