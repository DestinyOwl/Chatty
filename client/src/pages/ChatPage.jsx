import React, { useContext, useEffect, useState } from "react";
import { logged } from "../context/LogContext";
import axios from "axios";
import UsersList from "../components/UsersList";
import logo from "./assets/Logo.png";
import display from "./assets/Display.png";
import ChatRoom from "../components/ChatRoom";
import { request } from "../context/RequestContext";
function ChatPage() {
  const requests = useContext(request);
  const data = useContext(logged);
  const [user, setUser] = useState();

  const listItems = requests.map((item) => (
    <div key={item._id}>
      <span className="text-base-200 font-rubik-medium">
        {item.sender.username}
      </span>
      <div className="card-actions">
        <button className="btn btn-primary btn-block">View cart</button>
      </div>
    </div>
  ));

  const logout = async () => {
    const response = await axios({
      method: "get",
      url: "/api/user/checkout",
    });
    alert(response.data.message);
    window.location.reload(false);
  };

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  useEffect(() => {
    if (data.decoded) setUser(data.decoded);
  }, [data]);
  return (
    <div className="h-screen w-full bg-white">
      <div className="navbar bg-info shadow-2xl">
        <div className="flex-1">
          <span className="flex mx-3 font-rubik-medium font-bold text-white">
            <div className="bg-white rounded-xl w-8 h-8 p-1 mr-3 shadow-xl">
              <img src={logo} />
            </div>
            <div className="grid content-center">
              <div>
                Welcome,{" "}
                <span className="hover:text-primary">
                  {user ? user.firstname : null}
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                {requests ? (
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                ) : null}
              </div>
            </button>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-xl"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-base-200 font-rubik-regular">
                  Requests
                </span>
                {listItems}
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={display} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-base-200 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-5/6 flex ">
        <UsersList />
        <div className="w-full h-full">
          <ChatRoom />
          <div className="w-full h-1/6 flex items-end bg-white">
            <input className="input input-primary w-full bg-white mx-3" />
            <button className="btn btn-primary mr-2 rounded-xl px-4">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
