import React, { useState } from "react";
import { Label } from "recharts";
import "./booking.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const Booking = () => {
  //---------------Hooks------------------------
  const [disable, setDisable] = useState(0);
  let [data, setData] = useState({
    name: "",
    email: "",
    destination: "",
    passangers_number: 0,
    time: "",
    date: "",
    car_type: "",
  });
  const { token } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.login);
  const { _id } = user;

  //---------------Variables------------------------
  const baseUrl = "https://ticketappbackend.vercel.app/api/useraction";

  //---------------methods------------------------
  const handleSubmit = async (e) => {
    setDisable(1);
    e.preventDefault();

    try {
      const res = await axios.post(
        `${baseUrl}/bookings`,
        {
          name: data.name,
          email: data.email,
          destination: data.destination,
          passangers_number: Number(data.passangers_number),
          time: data.time,
          date: `${data.date}T${data.time}`,
          car_type: data.car_type,
          user_id: _id,
        },
        { headers: { "auth-token": token } }
      );
      toast.success("Trip Created", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(`Error: ${error.response.data}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setDisable(0);
    }
    setData({
      name: "",
      email: "",
      destination: "",
      passangers_number: 0,
      time: "",
      date: "",
      car_type: "",
    });

    setDisable(0);
  };

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData)
  };

  let { name, email, destination, passangers_number, time, date, car_type } =
    data;

  //---------------Main Retrun------------------------

  return (
    <div className="booking_wrapper">
      <ToastContainer />
      <h1 className="booking_head_title">Create Booking</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="booking_form"
      >
        <div className="booking_name">
          <label htmlFor="name" className="booking_name_label">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="booking_name_input"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </div>
        <div className="booking_email">
          <label htmlFor="email" className="booking_email_label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="booking_email_input"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => {
              handleInput(e);
            }}
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
            required
            value={destination}
            onChange={(e) => {
              handleInput(e);
            }}
          >
            <option className="placeholder" value="" defaultValue={true}>
              Select Destination
            </option>
            <option value="GK - Bosso - ₦200">GK - Bosso - ₦200</option>
            <option value="GK - Kpankungu - ₦150">GK - Kpankungu - ₦150</option>
            <option value="Gk - Gurara - ₦150">Gk - Gurara - ₦150</option>
            <option value="Gk - NECO Hq - ₦100">Gk - NECO Hq - ₦100</option>
            <option value="Gk - Gidan Mangoro - ₦100">
              Gk - Gidan Mangoro - ₦100
            </option>
            <option value="Gk - Dama - ₦100">Gk - Dama - ₦100</option>
            <option value="Bosso - GK - ₦200">Bosso - GK - ₦200</option>
            <option value="Bosso - Gurara - ₦100">Bosso - Gurara - ₦100</option>
            <option value="Bosso - NECO Hq - ₦200">
              Bosso - NECO Hq - ₦200
            </option>
            <option value="Bosso - Gidan Mangoro - ₦200">
              Bosso - Gidan Mangoro - ₦200
            </option>
            <option value="Bosso - Dama ₦200">Bosso - Dama ₦200</option>
            <option value="Bosso - GK - ₦200">Bosso - GK - ₦200</option>
            <option value="Bosso - Kpakungu - ₦100">
              Bosso - Kpakungu - ₦100
            </option>
            <option value="Gurara - GK - ₦150">Gurara - GK - ₦150</option>
            <option value="Kpakungu - GK - ₦150">Kpakungu - GK - ₦150</option>
            <option value="NECO Hq - GK - ₦100">NECO Hq - GK - ₦100</option>
            <option value="Gidan Mangoro - ₦100">Gidan Mangoro - ₦100</option>
            <option value="Dama - GK - ₦100">Dama - GK - ₦100</option>
            <option value="Gurara - Bosso - ₦100">Gurara - Bosso - ₦100</option>
            <option value="Kpakungu - Bosso - ₦100">
              Kpakungu - Bosso - ₦100
            </option>
            <option value=" NECO Hq - Bosso - ₦200">
              NECO Hq - Bosso - ₦200
            </option>
            <option value="Gidan Mangoro - Bosso - ₦200">
              Gidan Mangoro - Bosso - ₦200
            </option>
            <option value=" Dama - Bosso - ₦200">Dama - Bosso - ₦200</option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
            <option disabled value=" "></option>
          </select>
        </div>
        <div className="booking_no">
          <label htmlFor="passangers_number" className="booking_no_label">
            No of Passangers:
          </label>
          <input
            placeholder="Enter number of passangers"
            id="passangers_number"
            type="number"
            min="1"
            className="booking_no_input"
            required
            value={passangers_number}
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </div>
        <div className="booking_more_wrapper">
          <div className="booking_time">
            <label htmlFor="time" className="booking_time_label">
              Time:
            </label>
            <select
              id="time"
              className="booking_time_input"
              required
              value={time}
              onChange={(e) => {
                handleInput(e);
              }}
            >
              <option className="placeholder" value="" defaultValue={true}>
                Select Time
              </option>
              <option value="07:00">7:00am</option>
              <option value="10:00">10:00am</option>
              <option value="12:00">12:00pm</option>
              <option value="14:00">2:00pm</option>
              <option value="16:00">4:00pm</option>
              <option value="18:00">6:00pm</option>
            </select>
          </div>

          <div className="booking_date">
            <label htmlFor="date" className="booking_date_label">
              Date:
            </label>
            <input
              id="date"
              type="date"
              className="booking_date_input"
              required
              value={date}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>
          <div className="booking_car">
            <label htmlFor="car_type" className="booking_car_label">
              Car Type:
            </label>
            <select
              name="car_type"
              id="car_type"
              className="booking_car_input"
              required
              value={car_type}
              onChange={(e) => {
                handleInput(e);
              }}
            >
              <option className="placeholder" value="" defaultValue={true}>
                Select Cartype
              </option>
              <option value="Macapolo">Macapolo</option>
              <option value="Sharon">Sharon</option>
              <option value="32 - Seater">32 - Seater</option>
              <option value="18-seater">18-seater</option>
            </select>
          </div>
        </div>
        <button disabled={disable} className="booking_submit">
          {disable ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Booking;
