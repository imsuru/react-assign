import React, { useState, useRef, useEffect } from "react";
import "./test.css";

export const Test = () => {
  const images = [
    "/images/southindian.jpg",
    "/images/northindian.jpg",
    "/images/chinese.jpg",
    "/images/italian.jpg",
    "/images/american.jpg",
    "/images/indian.jpg",
    "/images/mexican.jpg",
    "/images/japanese.jpg",
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef(null);

  // Scroll the gallery by a given offset
  const scrollGallery = (offset) => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollLeft += offset;
    }
  };

  // Handle the scroll event to determine the active (center) image
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

  // Check if we're at the start or end of the gallery
  const updateButtonState = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd =
        container.scrollLeft + container.offsetWidth === container.scrollWidth;
      setIsAtStart(isAtStart);
      setIsAtEnd(isAtEnd);
    }
  };

  // Handle left button click
  const handleLeftClick = () => {
    if (!isAtStart) {
      scrollGallery(-containerRef.current.children[0].offsetWidth); // Scroll by one image width
    }
  };

  // Handle right button click
  const handleRightClick = () => {
    if (!isAtEnd) {
      scrollGallery(containerRef.current.children[0].offsetWidth); // Scroll by one image width
    }
  };

  useEffect(() => {
    // Update button states and active image when scrolling
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    updateButtonState();

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [centerIndex]);

  return (
    <div className="carousel-container">
      {/* Left scroll button */}
      <button
        className="carousel-button left"
        onClick={handleLeftClick}
        disabled={isAtStart}
      >
        &lt;
      </button>

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

      {/* Right scroll button */}
      <button
        className="carousel-button right"
        onClick={handleRightClick}
        disabled={isAtEnd}
      >
        &gt;
      </button>
    </div>
  );
};
