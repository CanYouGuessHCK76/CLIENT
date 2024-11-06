export default function Quiz() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/quizBg.jpg')] bg-cover flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl rounded-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">Shoes!</h2>
            <p className="text-gray-600">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <form className="mt-5">
              <input
                type="text"
                placeholder="Enter your answer"
                className="input input-bordered w-full max-w-xs rounded-md"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold focus:ring-2 focus:ring-blue-400 px-8 py-3 rounded-md mt-5 w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
