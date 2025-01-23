"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const SPEED = 0.03;
  const ROTATION_SPEED = 0.1;
  const FOLLOW_DISTANCE = 10;
  const STOP_DISTANCE = 50;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const mouse = mouseRef.current;
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRotation((prevRotation) => {
          let diff = targetAngle - prevRotation;
          if (diff > 180) diff -= 360;
          if (diff < -180) diff += 360;
          return prevRotation + diff * ROTATION_SPEED;
        });

        if (distance < STOP_DISTANCE) {
          return prev;
        }

        let newX = prev.x;
        let newY = prev.y;
        
        if (distance > 0) {
          const targetX = mouse.x - (dx / distance * FOLLOW_DISTANCE);
          const targetY = mouse.y - (dy / distance * FOLLOW_DISTANCE);
          newX = prev.x + (targetX - prev.x) * SPEED;
          newY = prev.y + (targetY - prev.y) * SPEED;
        }

        return { x: newX, y: newY };
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="fixed w-12 h-12 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation + 90}deg)`,
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Image 
          src="/rocket.png"
          alt="Rocket"
          width={24}
          height={24}
          className="pointer-events-none origin-center"
        />
      </div>
    </div>
  );
};

export default MouseFollower;
