import React, { useState, useRef } from "react";
import "./test.css";


export const Test = () => {
  const images = [
    "/images/southindian.jpg",
    "/images/northindian.jpg",
    "/images/chinese.jpg",
    "/images/italian.jpg",
    "/images/american.jpg",
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const middle = container.scrollLeft + container.offsetWidth / 2;

      // Find the image closest to the center
      const closestIndex = Array.from(container.children).reduce(
        (closest, child, index) => {
          const childCenter =
            child.offsetLeft + child.offsetWidth / 2 - middle;
          const currentDistance = Math.abs(childCenter);

          return currentDistance < Math.abs(closest.distance)
            ? { distance: currentDistance, index }
            : closest;
        },
        { distance: Infinity, index: 0 }
      );

      setCenterIndex(closestIndex.index);
    }
  };

  return (
    <div
      className="scrollable-gallery"
      ref={containerRef}
      onScroll={handleScroll}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`image-container ${
            index === centerIndex ? "active" : ""
          }`}
        >
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

//export default test;