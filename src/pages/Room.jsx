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
      alert("Game will start in 3 seconds!");

      setTimeout(() => {
        navigate("/quiz");
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
    <div className="flex flex-col justify-center items-center gap-10 mt-24">
      <div className="overflow-x-auto bg-amber-50 rounded-md">
        <table className="table text-lg w-96">
          <thead>
            <tr className="bg-neutral-700 text-white text-xl rounded-lg hover:bg-neutral-600 transition-colors duration-300 ease-in-out">
              <th>No</th>
              <th>Player</th>
            </tr>
          </thead>
          <tbody>
            {data?.length === 0 ? (
              <th>Loading</th>
            ) : (
              data?.map((el, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{el.username}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link onClick={handleRoom}>
          <button className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md text-slate-300 text-lg font-semibold hover:bg-opacity-30 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
}
