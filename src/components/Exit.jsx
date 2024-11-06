import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Replace with your server URL

export default function Exit() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    socket.emit("logout", socket.id);
    
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <button
        className="btn btn-accent text-lg bg-red-500 hover:bg-red-500 text-white absolute"
        name="Logout"
        onClick={handleLogout}
        style={{
          top: "20px",
          right: "20px",
        }}
        onMouseEnter={(e) => (e.target.style.color = "white")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Exit
      </button>
    </>
  );
}
