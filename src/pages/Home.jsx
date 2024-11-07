import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../contexts/appSocket";

export default function HomePage() {
  const { connectSocket } = useContext(SocketContext);
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    connectSocket();
    navigate("/game/room");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('https://i.pinimg.com/originals/3a/82/56/3a8256b391b0de71639848f2815c2b14.gif')] bg-no-repeat bg-cover text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-16 text-slate-300">BrandBrain</h1>
        <p className="text-lg mb-10 text-center max-w-md text-slate-300">
          Welcome to the BrandBrain! Test your skills and see if you can guess
          the correct answer. Are you ready to play?
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleJoinRoom}
            className="btn glas btn-lg text-slate-300"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}
