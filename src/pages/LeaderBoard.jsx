export default function LeaderBoard() {
  return (
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
            <tr className="even:bg-blue-50">
              <td className="p-8 text-lg text-black">Username</td>
              <td className="p-8 text-lg text-black">Point</td>
              <td className="p-8 text-lg text-black">Time</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
