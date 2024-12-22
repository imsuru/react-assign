import React, { useRef, useState, useEffect } from "react";

const VideoCarousel = ({ videos }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(videos.length);
  const itemWidth = 300 + 10; // Width + gap
  const totalVideos = videos.length;

  // Clone items for seamless looping
  useEffect(() => {
    const carousel = carouselRef.current;
    const firstClones = videos.map((video, idx) => {
      const clone = document.createElement("div");
      clone.classList.add("carousel-item");
      clone.innerHTML = `<video src="${video}" controls class="w-full h-auto"></video>`;
      return clone;
    });
    const lastClones = videos.map((video, idx) => {
      const clone = document.createElement("div");
      clone.classList.add("carousel-item");
      clone.innerHTML = `<video src="${video}" controls class="w-full h-auto"></video>`;
      return clone;
    });

    firstClones.forEach((clone) => carousel.appendChild(clone)); // Append clones
    lastClones.forEach((clone) => carousel.insertBefore(clone, carousel.firstChild)); // Prepend clones
  }, [videos]);

  const updateCarousel = () => {
    const carousel = carouselRef.current;
    const position = currentIndex * itemWidth;

    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${position}px)`;

    // Handle seamless looping
    setTimeout(() => {
      if (currentIndex === 0) {
        setCurrentIndex(totalVideos);
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-${totalVideos * itemWidth}px)`;
      } else if (currentIndex === videos.length * 2 - 1) {
        setCurrentIndex(totalVideos - 1);
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-${
          (totalVideos - 1) * itemWidth
        }px)`;
      }
    }, 500);
  };

  const scrollLeft = () => setCurrentIndex((prev) => prev - 1);
  const scrollRight = () => setCurrentIndex((prev) => prev + 1);

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  return (
    <div className="carousel-section">
      <h2 className="text-xl font-bold text-center text-white mb-4">
        Video Carousel
      </h2>
      <div className="relative w-full overflow-hidden">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#9664;
        </button>
        <div
          ref={carouselRef}
          className="carousel flex transition-transform"
          style={{ gap: "10px" }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="carousel-item w-[300px] h-auto flex justify-center items-center"
            >
              <video
                src={video}
                controls
                className="w-full h-auto rounded shadow-md"
              ></video>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
