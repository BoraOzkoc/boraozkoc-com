"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(true);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) {
      return;
    }
    
    const scrollerContent = Array.from(scrollerRef.current.children);
    
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    
    requestAnimationFrame(() => {
      setStart(true);
    });
  }, [direction, speed]);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-3xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="rounded-3xl p-px hover:p-1 hover:pb-6 transition-all duration-300 bg-gradient-to-b from-sky-300 via-purple-300 to-red-300 w-[70px] h-[70px] hover:w-[100px] max-w-full relative group"
            key={idx}
          >
            <div className="rounded-3xl w-full h-full bg-gray-800 flex flex-col items-center justify-center">
              <div className="flex flex-row items-center justify-center w-full h-full">
                {item.icon}
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none text-black rounded-lg w-full text-center bottom-1 text-xs">
                {item.quote}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
