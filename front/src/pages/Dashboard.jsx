import React from "react";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import SlideShow from "../components/Other/SlideShow.jsx";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/Session/useAuth";
import { useState,useEffect } from "react";
function Dashboard() {
  const avatar =
    "https://api.vector.ma/vectors/download/8fffcf26-f563-4539-a7e0-20d0e56295a5?type=png&size=1024";
  const [sidebarToggle] = useOutletContext();
  const { user} = useAuth();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {

      
      if (user && user.name) {
          setUserName(user.name);

      }
  }, [user]);
  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: userName  }}
        />
        <SlideShow />
      </main>
    </>
  );
}

export default Dashboard;
