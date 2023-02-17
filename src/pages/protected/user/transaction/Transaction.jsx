import React, { useEffect, useState } from "react";
import Table from "../../../../components/table/Table";
import "./transaction.scss";
import axios from "axios";
import { useSelector } from "react-redux";
const Transaction = () => {
  const { token } = useSelector((state) => state.login);
  const [pending, setPending] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const baseUrl = "https://ticketappbackend.vercel.app/api/useraction";

  useEffect(() => {
    // ================request for pending bookings=======================
    axios
      .get(`${baseUrl}/getpendingbookings`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setPending(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // ================request for accepted bookings=======================
    axios
      .get(`${baseUrl}/acceptedrequest`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setAccepted(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // ================request for declined bookings=======================
    axios
      .get(`${baseUrl}/rejectedrequest`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setRejected(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="px-[2rem] mb-4">
        <Table data={pending} status="Pending" detailUrl="/user/details" />
      </div>
      <div className="px-[2rem] mb-4">
        <Table data={accepted} status="Accepted" detailUrl="/user/details" />
      </div>
      <div className="px-[2rem] mb-[10rem]">
        <Table data={rejected} status="Rejected" detailUrl="/user/details" />
      </div>
    </div>
  );
};

export default Transaction;
