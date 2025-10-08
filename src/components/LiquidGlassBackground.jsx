import React, { useRef, useEffect } from "react";

const LiquidGlassBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const blobs = [];
    const blobCount = 8;

    class Blob {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = 50 + Math.random() * 50;
        this.dx = (Math.random() - 0.5) * 1.2;
        this.dy = (Math.random() - 0.5) * 1.2;
        this.color = `hsla(${Math.random() * 360}, 70%, 60%, 0.3)`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < -this.r || this.x > width + this.r) this.dx *= -1;
        if (this.y < -this.r || this.y > height + this.r) this.dy *= -1;

        this.draw();
      }
    }

    for (let i = 0; i < blobCount; i++) {
      blobs.push(new Blob());
    }

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      blobs.forEach(blob => blob.update());

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        filter: "blur(60px) brightness(1.2)"
      }}
    />
  );
};

export default LiquidGlassBackground;
