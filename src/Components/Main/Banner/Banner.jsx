
import  { useState } from 'react';
import { DateRange } from 'react-date-range';
import bg from '/public/images/bg.jpg';
import 'react-date-range/dist/styles.css'; // Import default styles
import 'react-date-range/dist/theme/default.css'; // Import default theme


const Banner = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [showCalendars, setShowCalendars] = useState(false);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setShowCalendars(false);
  };

  return (
    <div className="hero h-[60vh] lg:h-[50vh] relative" style={{ backgroundImage: `url(${bg})` }}>
      {/* Red Overlay */}
      <div className="hero-overlay bg-red-500 bg-opacity-60 absolute inset-0"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="w-auto">
          <h1 className="mb-5 text-5xl font-bold text-white">Over 157,000 hotels and homes across 35 countries</h1>

          <div className="date-range-picker flex items-center">
            <div className="relative">
             
              <input
                name="date"
                type="text"
                className="date-input h-10 w-auto p-5"
                onClick={() => setShowCalendars(!showCalendars)}
                placeholder={` ${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
              />
            </div>
          </div>

          {/* {showCalendars && (
            <div className="calendars-container">
              <DateRange
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
              />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
