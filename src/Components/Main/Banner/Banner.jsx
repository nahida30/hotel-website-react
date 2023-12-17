
import bg from '/public/images/bg.jpg';

const Banner = () => {
  return (
    <div className="hero h-[60vh] lg:h-[50vh]  relative" style={{backgroundImage: `url(${bg})`}}>
      {/* Red Overlay */}
      <div className="hero-overlay bg-red-500 bg-opacity-60 absolute inset-0"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
