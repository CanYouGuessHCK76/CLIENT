import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { SocketContext } from "../contexts/appSocket";

export default function Room() {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  let [data, setData] = useState([]);

  const handleRoom = () => {
    socket.emit("GameStart");
  };

  useEffect(() => {
    if (!socket) return navigate("/");

    socket?.on("StartTheGame", () => {
      setTimeout(() => {
        navigate("/game/quiz");
      }, 3000);
    });

    socket?.emit("username", localStorage.getItem("username"));

    socket?.on("Greetings with username", (data) => {
      setData(data.users);
    });

    socket?.on("UsersRemaining", (users) => {
      setData(users);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://i.pinimg.com/736x/f0/2d/df/f02ddf14a1bf91b28057a3e0162e2cd0.jpg')] bg-no-repeat bg-cover  text-black">
        <div className="overflow-x-auto bg-amber-50/60 backdrop-blur-md rounded-lg p-4 shadow-lg w-full max-w-lg">
          <table className="table text-lg w-full text-left">
            <thead>
              <tr className="bg-gradient-to-r from-neutral-700 to-neutral-600 text-white text-xl rounded-lg hover:bg-neutral-600 transition-all duration-300 ease-in-out">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Player</th>
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : (
                data?.map((el, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white transition-colors duration-200"
                  >
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{el.username}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-6">
          <Link onClick={handleRoom}>
            <button className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg text-black text-lg font-semibold hover:bg-opacity-30 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
              Play
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
