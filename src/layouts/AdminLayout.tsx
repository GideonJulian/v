import { Outlet } from "react-router-dom";
import { DesktopNav } from "./_components/DashboardNav";

function AdminLayout() {
  return (
    <div className="w-full ">
      <DesktopNav />
      <div
        className="pt-[90px] w-full"
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
