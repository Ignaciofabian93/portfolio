"use client";
import { useState } from "react";
import Home from "@/app/sections/home";
import Skills from "@/app/sections/skills";
import Education from "@/app/sections/education";
import Experience from "@/app/sections/experience";
import Projects from "@/app/sections/projects";
import Contact from "@/app/sections/contact";
import Container from "@/app/ui/Container";

type DotProps = {
  selected: boolean;
  onClick: () => void;
};

const Dot = ({ selected, onClick }: DotProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`w-[10px] h-[10px] ${
          selected ? "bg-secondary-500" : "bg-white-500"
        } rounded-full mx-[1rem] border-[1px] border-secondary-500 cursor-pointer`}
      />
    </>
  );
};

export default function Carousel() {
  const [selected, setSelected] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [direction, setDirection] = useState<"Right" | "Left">("Right");

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goRight();
    if (isRightSwipe) goLeft();

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleRedirect = (page: number) => setSelected(page);

  const pages = [
    <Home redirect={handleRedirect} />,
    <Skills />,
    <Education />,
    <Experience />,
    <Projects />,
    <Contact />,
  ];

  const goLeft = () => {
    setDirection("Left");
    setSelected((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const goRight = () => {
    setDirection("Right");
    setSelected((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > selected ? "Right" : "Left");
    setSelected(index);
  };

  return (
    <>
      <Container>
        <div className="w-full h-[92%] flex items-center justify-center">
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className={`w-full h-full`}
          >
            {pages[selected]}
          </div>
        </div>
        <div className="w-full h-[8%] flex items-center justify-center transition-all duration-300 ease-in-out">
          {pages.map((_, i) => (
            <Dot
              key={i}
              selected={selected === i}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
