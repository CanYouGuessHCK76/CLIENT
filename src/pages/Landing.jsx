import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SocketContext } from "../contexts/appSocket";

export default function Landing() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please put your name before play!",
      });
    }

    localStorage.setItem("username", username);
    navigate("/game/homepage");
  };

  const socket = useContext(SocketContext);

  const greet = () => {
    socket.emit("Greet");

    socket.on("Hi", (data) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: `Connect success in socket ${data.socketId}`,
      });
    });
  };

  return (
    <div className="bg-neutral-800 min-h-screen flex justify-center items-center">
      <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white max-w-md">
        <div className="bg-neutral-800 text-white text-center py-2 rounded-t-lg">
          <h2 className="text-lg font-semibold">Welcome to BrandBrain</h2>
        </div>

        <img
          src="https://i.pinimg.com/originals/bd/78/b5/bd78b57fa09b08793f3e018bb549b49b.gif"
          alt="Landing Image"
          className="w-full mb-4 rounded"
        />

        <form className="space-y-4 font-[sans-serif]">
          <input
            type="username"
            placeholder="Your username"
            className="px-4 py-3 bg-neutral-700 w-full text-sm outline-none border-b-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="btn glass block mx-auto mt-4 px-4 py-2.5 bg-neutral-800 text-white rounded hover:bg-emerald-600"
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
}
