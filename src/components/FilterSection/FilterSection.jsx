import "./FilterSection.css";

function FilterSection() {
  return (
    <div className="container">
        <div className="filter_section d-jus">
      <div className="filter_box d-col">
        <div className="chooseFilter ">
          <label htmlFor="chooseFilterPick" className="chooseFilterPick">
            <input
              type="radio"
              name="chooseFilterPick"
              id="chooseFilterPick"
              checked
            />
            <h4>Pick-Up</h4>
          </label>
        </div>
        <div className="filterOptions d-jus">
          <div className="filterOption d-col">
            <h1>Locations</h1>
            <select name="locations" id="locations">
              <option value="city">Select your city</option>
              <option value="district">Select your district</option>
              <option value="town">Select your town</option>
              <option value="region">Select your region</option>
              <option value="country">Select your country</option>
            </select>
          </div>
          <div className="gorizontal_line"></div>
          <div className="filterOption d-col">
            <h1>Locations</h1>
            <select name="locations" id="locations">
              <option value="city">Select your city</option>
              <option value="district">Select your district</option>
              <option value="town">Select your town</option>
              <option value="region">Select your region</option>
              <option value="country">Select your country</option>
            </select>
          </div>
          <div className="gorizontal_line"></div>
          <div className="filterOption d-col">
            <h1>Locations</h1>
            <select name="locations" id="locations">
              <option value="city">Select your city</option>
              <option value="district">Select your district</option>
              <option value="town">Select your town</option>
              <option value="region">Select your region</option>
              <option value="country">Select your country</option>
            </select>
          </div>
        </div>
      </div>
      <div className="filter_change">
        <button className="btn-blue d-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              d="M5.16124 0.836324L5.16124 14.4541"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.0837 4.93262L5.16148 0.83595L9.23926 4.93262"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.089 17.167L15.089 3.54921"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.167 13.0713L15.0892 17.168L11.0114 13.0713"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="filter_box d-col">
        <div className="chooseFilter d-col">
          <label htmlFor="chooseFilterDrop" className="chooseFilterPick">
            <input type="radio" name="chooseFilter" id="chooseFilter" checked />
            <h4>Drop-off</h4>
          </label>
        </div>
        <div className="filterOptions d-jus">
          <div className="filterOption d-col">
            <h1>Locations</h1>
            <select name="locations" id="locations">
              <option value="city">Select your city</option>
              <option value="district">Select your district</option>
              <option value="town">Select your town</option>
              <option value="region">Select your region</option>
              <option value="country">Select your country</option>
            </select>
          </div>
          <div className="gorizontal_line"></div>
          <div className="filterOption d-col">
            <h1>Locations</h1>
            <select name="locations" id="locations">
              <option value="city">Select your city</option>
              <option value="district">Select your district</option>
              <option value="town">Select your town</option>
              <option value="region">Select your region</option>
              <option value="country">Select your country</option>
            </select>
          </div>
          <div className="gorizontal_line"></div>
          <div className="filterOption d-col">
            <h1>Locations</h1>
            <select name="locations" id="locations">
              <option value="city">Select your city</option>
              <option value="district">Select your district</option>
              <option value="town">Select your town</option>
              <option value="region">Select your region</option>
              <option value="country">Select your country</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FilterSection;
