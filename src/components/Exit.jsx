import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../contexts/appSocket";

export default function Exit() {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  const handleLogout = () => {
    if (socket) {
      socket.emit("logout", socket.id);
      socket.disconnect();
    }
    localStorage.clear();
    navigate("/");
  };

  return (
    <button
      className="btn btn-accent text-lg bg-red-500 hover:bg-red-700 text-white absolute"
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
  );
}
