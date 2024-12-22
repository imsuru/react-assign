const ImageTextSection = () => {
    return (
      <section className="image-text-section flex items-center justify-between px-8 py-12 bg-red-800">
        {/* Image Container */}
        <div className="image-container flex-1 max-w-sm">
          <img
            src="/tomato.jpeg"
            alt="Sample"
            className="rounded-lg shadow-md"
          />
        </div>
  
        {/* Text Container */}
        <div className="text-container flex-1 ml-12 text-white">
          <h1 className="text-3xl font-bold mb-4">Tomato is here...</h1>
          <p className="text-lg leading-relaxed">
            No, you didn't read it wrong. Its Tomato! Enjoy the best and delicious cuisines just like this burger from variety
            of restaurants at your home!
          </p>
        </div>
      </section>
    );
  };
  
  export default ImageTextSection;
  