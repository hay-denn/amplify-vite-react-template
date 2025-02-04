const About = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        This is the about page, which displays 
      </p>
      <ul>
      <li>Team #</li>
      <li>Version # (aka Sprint #)</li>
      <li>Release Date</li>
      <li>Product Name</li>
      <li>Product Description</li>
      </ul>
    </div>
  );
};

export default About;
