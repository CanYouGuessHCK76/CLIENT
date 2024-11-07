import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { SocketContext } from "../contexts/appSocket";
import Swal from "sweetalert2";

export default function Room() {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  let [data, setData] = useState([]);

  const handleRoom = () => {
    socket.emit("GameStart");
  };

  useEffect(() => {
    if (!socket) return navigate("/");

    socket.on("StartTheGame", () => {
      let countdown = 3;

      const countdownInterval = setInterval(() => {
        if (countdown === 0) {
          clearInterval(countdownInterval);
          Swal.close();
          navigate("/game/quiz");
        } else {
          Swal.fire({
            title: `Game starting in ${countdown}`,
            text: "Get ready!",
            timer: 1000,
            showConfirmButton: false,
            allowOutsideClick: false,
            willClose: () => clearInterval(countdownInterval),
          });
          countdown--;
        }
      }, 1000);
    });

    socket.emit("username", localStorage.getItem("username"));

    socket.on("Greetings with username", (data) => {
      setData(data.users);
    });

    socket.on("UsersRemaining", (users) => {
      setData(users);
    });

    return () => {
      socket.off("StartTheGame");
      socket.off("Greetings with username");
      socket.off("UsersRemaining");
    };
  }, [socket, navigate]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="overflow-x-auto bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg w-full max-w-lg">
          <table className="table-auto w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg rounded-lg">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Player</th>
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center py-4 text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : (
                data?.map((el, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 border-b border-gray-600">
                      {i + 1}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-600">
                      {el.username}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-6">
          <Link onClick={handleRoom}>
            <button className="flex items-center justify-center px-8 py-4 bg-indigo-500 rounded-lg shadow-lg text-white text-lg font-semibold hover:bg-indigo-600 transition-all duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              Play
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
