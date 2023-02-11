import React, { useEffect, useState } from "react";
import "./dashboard.scss";
// import { data } from "../../../../functionalities/bookingsData";
import { useSelector, useDispatch } from "react-redux";
import { bookingsAction } from "../../../../redux/actionCreators/bookings/bookingsAction";
import axios from "axios";

const Dashboard = () => {
  const { token } = useSelector((state) => state.login);
  const baseUrl = "https://ticketappbackend.vercel.app/api/useraction";
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [users, setUsers] = useState(null);
  const [admins, setAdmins] = useState(null);
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/getbookings`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        dispatch(bookingsAction(res?.data));
        setData(bookingData);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        `${baseUrl}/getusernumber`,
        { user_type: "user" },
        {
          headers: { "auth-token": token },
        }
      )
      .then((res) => {
        setUsers(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        `${baseUrl}/getusernumber`,
        { user_type: "admin" },
        {
          headers: { "auth-token": token },
        }
      )
      .then((res) => {
        setAdmins(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${baseUrl}/getuserrequest`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setRequests(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const bookingData = useSelector((state) => state.bookings);

  return (
    <div className="logs_wrapper overflow-x-hidden p-[2rem]">
      <div className="dashboard_HUD">
        <div className="dashboard_HUD_item1">
          <p className="dashboard_HUD_item1_text">Total Users</p>
          <h1 className="dashboard_HUD_item1_no">{users}</h1>
        </div>
        <div className="dashboard_HUD_item2">
          <p className="dashboard_HUD_item2_text">Total Admin</p>
          <h1 className="dashboard_HUD_item2_no">{admins}</h1>
        </div>
        <div className="dashboard_HUD_item3">
          <p className="dashboard_HUD_item3_text">Total Request</p>
          <h1 className="dashboard_HUD_item3_no">{requests}</h1>
        </div>
      </div>
      <div className="bg-white rounded-md logs_widget relative overflow-x-hidden">
        <p className="text-[#df6951] text-[20px] font-[inter] font-bold my-10 text-center">
          User Bookings Logs
        </p>
        <div className="logs_table mx-16 mb-20 overflow-x-scroll">
          <div className="grid gap-3 mb-6 pb-8 logs_title border-b-2 border-[#6c99c411]">
            <p className="text-[#df6951] text-[16px] font-[inter] font-bold justify-self-start col-span-3">
              Name
            </p>
            <p className="text-[#df6951] text-[16px] font-[inter] font-bold col-span-3">
              Time
            </p>

            <p className="text-[#df6951] text-[16px] font-[inter] font-bold col-span-2">
              Car Type
            </p>
            <p className="text-[#df6951] text-[16px] font-[inter] font-bold col-span-1">
              Passangers
            </p>
            <p className="text-[#df6951] text-[16px] font-[inter] font-bold col-span-2">
              Destination
            </p>
          </div>
          <div className="logs_content">
            {data?.map((value) => {
              return (
                <div
                  key={value.id}
                  className="cursor-pointer grid gap-3 mb-4 logs_item1 border-b-2 border-[#6c99c411] pb-4"
                >
                  <p className="justify-self-start text-[#7e7d7d] col-span-3">
                    {value.name}
                  </p>
                  <p className="col-span-3 text-[#7e7d7d]">{value.date}</p>
                  <p className="col-span-2 text-[#7e7d7d]">{value.car_type}</p>
                  <p className="col-span-1 text-[#7e7d7d]">
                    {value.passangers_number}
                  </p>
                  <p className="col-span-2 text-[#7e7d7d]">
                    {value.destination}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
