import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../contexts/appSocket";

export default function LeaderBoard() {
  const { socket } = useContext(SocketContext);
  const [leaderboard, setLeaderboard] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket?.on("showLeaderBoard:broadcast", (leaderBoard) => {
      setLeaderboard(leaderBoard);
    });

    return () => socket?.off("showLeaderBoard:broadcast");
  }, [socket]);

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/modern-futuristic-sci-fi-background_35913-2150.jpg?t=st=1730954859~exp=1730958459~hmac=033c84b2d35cda39771b7b1814b2f5dd63ec3011a3e741188088dd46670bc4ab&w=1800')",
        }}
      >
        <div
          className="font-[sans-serif] overflow-x-auto bg-white bg-opacity-40 backdrop-blur-md shadow-lg rounded-lg p-10 mx-8 w-4/5 max-w-5xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <h2 className="text-4xl font-extrabold text-center text-white mb-8 bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text text-transparent">
            Leaderboard
          </h2>

          <table className="w-full text-lg">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="p-6 text-left font-semibold">Username</th>
                <th className="p-6 text-left font-semibold">Points</th>
                <th className="p-6 text-left font-semibold">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {leaderboard.map((leader, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800 transition-colors duration-200"
                >
                  <td className="p-6 font-medium text-white">
                    {leader.username}
                  </td>
                  <td className="p-6 font-medium text-white">{leader.score}</td>
                  <td className="p-6 font-medium text-white">
                    {leader.time ?? "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
