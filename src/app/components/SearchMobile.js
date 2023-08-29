// comps
import DateSelection from './DateSelection';
import HourSelection from './HourSelection';
import LocationSelection from './LocationSelection';

export default function SearchMobile() {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          {/* location selection */}
          <LocationSelection />
          {/* date selection */}
          <DateSelection />
          {/* hours selection */}
          <HourSelection />
          {/* btn */}
          <div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
