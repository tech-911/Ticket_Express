import React from "react";
import { Label } from "recharts";
import "./booking.scss";
const Booking = () => {
  return (
    <div className="booking_wrapper">
      <form className="booking_form">
        <div className="booking_name">
          <label htmlFor="name" className="booking_name_label">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="booking_name_input"
            placeholder="Enter Name"
          />
        </div>
        <div className="booking_email">
          <label htmlFor="email" className="booking_email_label">
            Email:
          </label>
          <input
            id="email"
            type="text"
            className="booking_email_input"
            placeholder="Enter Email"
          />
        </div>
        <div className="booking_destination">
          <label htmlFor="destination" className="booking_destination_label">
            Destination:
          </label>
          {/* <input
            id="destination"
            type="text"
            className="booking_destination_input"
            placeholder="Enter Destination"
          /> */}
          <select
            name="destination"
            id="destination"
            className="booking_destination_input"
          >
            <option className="placeholder" value="" selected="selected">
              Select Destination
            </option>
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="AkwaIbom">AkwaIbom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="FCT">FCT</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamafara</option>
          </select>
        </div>
        <div className="booking_no">
          <label htmlFor="no" className="booking_no_label">
            No of Passangers:
          </label>
          <input
            placeholder="Enter number of passangers"
            id="no"
            type="number"
            className="booking_no_input"
          />
        </div>
        <div className="booking_more_wrapper">
          <div className="booking_time">
            <label htmlFor="time" className="booking_time_label">
              Time:
            </label>
            <input id="time" type="time" className="booking_time_input" />
          </div>
          <div className="booking_date">
            <label htmlFor="date" className="booking_date_label">
              Date:
            </label>
            <input id="date" type="date" className="booking_date_input" />
          </div>
          <div className="booking_car">
            <label htmlFor="car" className="booking_car_label">
              Car Type:
            </label>
            <select name="car" id="car" className="booking_car_input">
              <option className="placeholder" value="" selected="selected">
                Select Cartype
              </option>
              <option value="Bus">Bus</option>
              <option value="Sedan">Sedan</option>
              <option value="Mini van">Mini van</option>
              <option value="Seanna">Seanna</option>
            </select>
          </div>
        </div>
        <button className="booking_submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
