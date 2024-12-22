const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-4 flex justify-between items-center px-8">
        <div className="text-lg font-bold">Logo</div>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  