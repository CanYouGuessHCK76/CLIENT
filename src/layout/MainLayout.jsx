import { Outlet } from "react-router-dom";
import Exit from "../components/exit";

export default function MainLayout() {
  return (
    <div>
      <Exit />
      <Outlet />
    </div>
  );
}
