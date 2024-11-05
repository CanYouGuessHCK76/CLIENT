export default function Landing() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white max-w-md">
        <img
          src="https://i.pinimg.com/originals/bd/78/b5/bd78b57fa09b08793f3e018bb549b49b.gif" 
          alt="Landing Image"
          className="w-full mb-4 rounded"
        />
        <form className="space-y-4 font-[sans-serif]">
          <input
            type="username"
            placeholder="Your username"
            className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
          />
          <button
            type="button"
            className="!mt-8 w-full px-4 py-2.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
