import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../contexts/appSocket";
import data from "../data.json";

export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [dataPerItem, setDataPerItem] = useState([]);
  const [change, setChange] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (!socket) return navigate("/");
    let dataMap = data.map((item) => {
      return item;
    });

    let dataRandom = dataMap[Math.floor(Math.random() * dataMap.length)];
    setDataPerItem(dataRandom);
    localStorage.setItem("score", score);

    if (change === 10) {
      socket?.emit("leaderBoard:broadcast", {
        username: localStorage.getItem("username"),
        score,
      });
      navigate("/game/leaderboard");
    }
  }, [change]);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (
      answer.toUpperCase() === dataPerItem.name ||
      answer.toUpperCase() === dataPerItem.commonName
    ) {
      setScore(score + 10);
    }

    setChange(change + 1);

    setAnswer("");
  };

  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/quizBg.jpg')] bg-cover flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl rounded-xl">
          <figure className="px-10 pt-10">
            <img
              src={dataPerItem.imageUrl}
              alt="brand"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">
              {dataPerItem.hint}
            </h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <form className="mt-5" onSubmit={handleAnswer}>
              <input
                type="text"
                placeholder="Enter your answer"
                className="input input-bordered w-full max-w-xs rounded-md"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold focus:ring-2 focus:ring-green-400 px-8 py-3 rounded-md mt-5 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
