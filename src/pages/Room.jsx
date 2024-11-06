export default function Room() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/58/ed/7f/58ed7f5e8418eba129d13ed6b745bc47.gif')",
      }}
    >
      <div
        className="font-[sans-serif] overflow-x-auto bg-white bg-opacity-40 backdrop-blur-md shadow-lg rounded-lg p-6 w-full max-w-2xl mx-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <table className="w-full text-lg">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-4 text-left text-base font-semibold text-white">
                No
              </th>
              <th className="p-4 text-left text-base font-semibold text-white">
                Username
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            <tr className="even:bg-blue-50">
              <td className="p-4 text-base text-black">No</td>
              <td className="p-4 text-base text-black">Username</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
