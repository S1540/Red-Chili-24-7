import React, { useEffect, useRef, useState } from "react";
import chiliImg from "../assets/Red-chili.png"; // Apna chili image yaha import karo

const Particles = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [showChili, setShowChili] = useState(true);
  const chiliSize = 900; // Chili ka size

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chili = new Image();
    chili.src = chiliImg;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (showChili) {
        const x = canvas.width / 2 - chiliSize / 2;
        const y = canvas.height / 2 - chiliSize / 2;
        ctx.drawImage(chili, x, y, chiliSize, chiliSize);
      } else {
        // Draw particles
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });

        // Update particles
        setParticles((prev) =>
          prev
            .map((p) => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              size: Math.max(0, p.size - 0.05),
              alpha: p.alpha - 0.01,
            }))
            .filter((p) => p.alpha > 0)
        );
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [showChili, particles]);

  const handleMouseMove = (e) => {
    if (!showChili) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const chiliX = canvas.width / 2 - chiliSize / 2;
    const chiliY = canvas.height / 2 - chiliSize / 2;

    if (
      mouseX >= chiliX &&
      mouseX <= chiliX + chiliSize &&
      mouseY >= chiliY &&
      mouseY <= chiliY + chiliSize
    ) {
      explodeChili();
    }
  };

  const explodeChili = () => {
    const canvas = canvasRef.current;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const newParticles = [];
    for (let i = 0; i < 300; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      newParticles.push({
        x: centerX,
        y: centerY,
        size: Math.random() * 6 + 2,
        color: "red",
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
      });
    }
    setParticles(newParticles);
    setShowChili(false);

    // Reset after 2 sec
    setTimeout(() => {
      setShowChili(true);
      setParticles([]);
    }, 2000);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );
};

export default Particles;
