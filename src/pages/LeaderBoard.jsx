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
      // console.log(leaderBoard, "==================");
    });

    return () => socket?.off("showLeaderBoard:broadcast");
  }, [socket]);

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-3d-rendering-conceptualizing-business-leadership-as-team-direction-image_3869973.jpg')",
        }}
      >
        <div
          className="font-[sans-serif] overflow-x-auto bg-white bg-opacity-40 backdrop-blur-md shadow-lg rounded-lg p-10 mx-8 w-4/5 max-w-5xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <table className="w-full text-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-8 text-left text-lg font-bold text-white">
                  Username
                </th>
                <th className="p-8 text-left text-lg font-bold text-white">
                  Point
                </th>
                <th className="p-8 text-left text-lg font-bold text-white">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {leaderboard.map((leader, index) => (
                <tr key={index} className="even:bg-blue-50">
                  <td className="p-8 text-xl font-serif font-bold text-black">{leader.username}</td>
                  <td className="p-8 text-xl font-serif font-bold text-black">{leader.score}</td>
                  <td className="p-8 text-xl font-serif font-bold text-black">{leader.time ?? "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
