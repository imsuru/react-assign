import Header from "./components/Header";
import ImageTextSection from "./components/ImageTextSection";
import Carousel from "./components/Carousel";
import VideoCarousel from "./components/VideoCarousel";
import Form from "./components/Form";
import { Test } from "./components/test";


const App = () => {



  const imageCarouselItems = [
    "/images/southindian.jpg", // Replace with actual image paths
    "/images/northindian.jpg",
    "/images/chinese.jpg",
    "/images/italian.jpg",
    "/images/american.jpg",
  ];

  const videoCarouselItems = [
    "/videos/video1.mp4", // Replace with actual video paths
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
  ];

  return (
    <div>



      {/* Header */}
      <Header />

      <main className="bg-black text-white">
        {/* Image and Text Section */}
        <ImageTextSection />



        {/* Image Carousel Section */}
        <Test></Test>
        {/* <Carousel items={imageCarouselItems} gapBetweenItems={20} /> */}

        {/* Video Carousel Section */}
        <VideoCarousel videos={videoCarouselItems} />

        {/* Form Section */}
        <Form />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4 text-gray-400">
        &copy; 2024 Website Assignment
      </footer>
    </div>
  );
};

export default App;
