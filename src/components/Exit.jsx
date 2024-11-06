import { useNavigate } from "react-router-dom";

export default function Exit() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <button
        className="btn btn-accent text-lg bg-red-500 hover:bg-red-500 text-white absolute"
        name="Logout"
        onClick={handleLogout}
        style={{
          top: "20px",
          right: "20px",
        }}
        onMouseEnter={(e) => (e.target.style.color = "white")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Exit
      </button>
    </>
  );
}
