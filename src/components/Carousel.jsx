import React, { useRef, useState, useEffect } from "react";

const Carousel = ({ items, gapBetweenItems = 20 }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(items.length); // Start at the first original set
  const [isReady, setIsReady] = useState(false); // State to track if carousel is ready
  const itemWidth = 300 + gapBetweenItems; // Width of each item + gap
  const totalItems = items.length;

  // Clone items for seamless looping
  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel && items.length > 0) {
      console.log("Cloning items...");

      // Clear any existing clones
      while (carousel.firstChild) {
        carousel.removeChild(carousel.firstChild);
      }

      // Add original items
      items.forEach((item, index) => {
        const originalItem = document.createElement("div");
        originalItem.className =
          "carousel-item w-[300px] h-[200px] flex justify-center items-center bg-gray-600 rounded-lg shadow-lg transform transition-all duration-500";
        originalItem.innerHTML = `<img src="${item}" alt="Image ${index + 1}" class="w-full h-full object-cover rounded-lg" />`;
        carousel.appendChild(originalItem);
      });

      // Clone first and last sets of items
      items.forEach((item, index) => {
        const firstClone = carousel.children[index].cloneNode(true);
        const lastClone = carousel.children[totalItems - 1 - index].cloneNode(
          true
        );

        carousel.appendChild(firstClone);
        carousel.insertBefore(lastClone, carousel.firstChild);
      });

      console.log("Items cloned successfully.");
      setIsReady(true); // Mark carousel as ready
    } else {
      console.log("No items found or carousel is undefined.");
    }
  }, [items, totalItems]);

  const updateCarousel = () => {
    const carousel = carouselRef.current;
    const scrollPosition = currentIndex * itemWidth;

    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${scrollPosition}px)`;

    setTimeout(() => {
      if (currentIndex === 0) {
        setCurrentIndex(totalItems);
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-${totalItems * itemWidth}px)`;
      } else if (currentIndex === totalItems * 2 - 1) {
        setCurrentIndex(totalItems - 1);
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-${
          (totalItems - 1) * itemWidth
        }px)`;
      }
    }, 500);
  };

  const scrollLeft = () => setCurrentIndex((prev) => prev - 1);
  const scrollRight = () => setCurrentIndex((prev) => prev + 1);

  useEffect(() => {
    if (isReady) {
      console.log("Carousel is ready. Updating...");
      updateCarousel();
    }
  }, [currentIndex, isReady]);

  if (!isReady) {
    return (
      <section className="carousel-section">
        <h2 className="text-xl font-bold text-center text-white mb-4">
          Image Carousel
        </h2>
        <div className="relative w-full overflow-hidden">
          <p className="text-center text-gray-400">Loading carousel...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="carousel-section">
      <h2 className="text-xl font-bold text-center text-white mb-4">
        Image Carousel
      </h2>
      <div className="relative w-full overflow-hidden">
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          &#9664;
        </button>
        <div
          ref={carouselRef}
          className="carousel flex transition-transform"
          style={{ gap: `${gapBetweenItems}px` }}
        ></div>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          &#9654;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
