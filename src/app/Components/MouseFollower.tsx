"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isMoving, setIsMoving] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  const SPEED = 0.03;
  const ROTATION_SPEED = 0.1;
  const FOLLOW_DISTANCE = 10;
  const STOP_DISTANCE = 50;
  const TRAIL_LENGTH = 10;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { 
        x: e.pageX,
        y: e.pageY
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Initialize both position and mouseRef to center of page (not just viewport)
    const centerX = window.innerWidth / 2 + window.scrollX;
    const centerY = window.innerHeight / 2 + window.scrollY;

    setPosition({ x: 0, y: 0 });
    mouseRef.current = { x: centerX, y: centerY };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const mouse = mouseRef.current;
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update isMoving state based on movement
        setIsMoving(distance > STOP_DISTANCE);

        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRotation((prevRotation) => {
          // Normalize angles to 0-360 range
          const normalizedTarget = ((targetAngle % 360) + 360) % 360;
          const normalizedPrev = ((prevRotation % 360) + 360) % 360;

          // Calculate the two possible rotation differences
          const diff1 = normalizedTarget - normalizedPrev;
          const diff2 = diff1 > 0 ? diff1 - 360 : diff1 + 360;

          // Choose the smaller rotation
          const diff = Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;

          return prevRotation + diff * ROTATION_SPEED;
        });

        if (distance < STOP_DISTANCE) {
          setTrail([]); // Clear trail when stopped
          return prev;
        }

        let newX = prev.x;
        let newY = prev.y;

        if (distance > 0) {
          const targetX = mouse.x - (dx / distance) * FOLLOW_DISTANCE;
          const targetY = mouse.y - (dy / distance) * FOLLOW_DISTANCE;
          newX = prev.x + (targetX - prev.x) * SPEED;
          newY = prev.y + (targetY - prev.y) * SPEED;
        }

        // Only update trail if moving
        if (distance > STOP_DISTANCE) {
          setTrail((oldTrail) => {
            const newTrail = [...oldTrail, { x: newX, y: newY }];
            if (newTrail.length > TRAIL_LENGTH) {
              newTrail.shift();
            }
            return newTrail;
          });
        }

        return { x: newX, y: newY };
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      {isMoving &&
        trail.map((pos, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-red-500 pointer-events-none"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: "translate(-50%, -50%)",
              opacity: (index + 1) / trail.length,
              zIndex: 9998,
            }}
          />
        ))}
      <div
        className="absolute w-12 h-12 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${rotation + 90}deg)`,
          zIndex: 9999,
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
    </>
  );
};

export default MouseFollower;
