import image from '/public/images/image1.jpg'
import image2 from '/public/images/imag2.jpg'
import image3 from '/public/images/image3.jpg'
import image4 from '/public/images/imag4.jpg'
import image5 from '/public/images/image5.jpg'

const TrandingDestination = () => {
    return (
      <div className="md:px-5 lg:px-32 lg:mt-10">
        <div>
          <h1 className="text-3xl font-bold">Tranding Destinations</h1>
          <p>Most popular choices for travellers from Italy</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            <div className="relative overflow-hidden group">
              <img src={image} alt="" className='md:h-72 lg:h-72 lg:w-[700px]' />
              <div className="overlay bg-black bg-opacity-0 group-hover:bg-opacity-40 absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              </div>
              <div className="text-overlay absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold mb-2">Destination 1</h2>
                <p>Some description about the destination</p>
              </div>
            </div>
  
            <div className="relative overflow-hidden group">
              <img src={image2} alt="" className='md:h-72 lg:h-72 lg:w-[700px]' />
              <div className="overlay bg-black bg-opacity-0 group-hover:bg-opacity-40 absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              </div>
              <div className="text-overlay absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold mb-2">Destination 2</h2>
                <p>Some description about the destination</p>
              </div>
            </div>
          </div>
  
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5'>
            <div className="relative overflow-hidden group">
              <img src={image3} alt="" className='md:h-72 lg:h-72' />
              <div className="overlay bg-black bg-opacity-0 group-hover:bg-opacity-40 absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              </div>
              <div className="text-overlay absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold mb-2">Destination 3</h2>
                <p>Some description about the destination</p>
              </div>
            </div>
  
            <div className="relative overflow-hidden group">
              <img src={image4} alt="" className='md:h-72 lg:h-72' />
              <div className="overlay bg-black bg-opacity-0 group-hover:bg-opacity-40 absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              </div>
              <div className="text-overlay absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold mb-2">Destination 4</h2>
                <p>Some description about the destination</p>
              </div>
            </div>
  
            <div className="relative overflow-hidden group">
              <img src={image5} alt="" className='md:h-72 lg:h-72' />
              <div className="overlay bg-black bg-opacity-0 group-hover:bg-opacity-40 absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              </div>
              <div className="text-overlay absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold mb-2">Destination 5</h2>
                <p>Some description about the destination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrandingDestination;