import Header from "./Dashbaord/header/page";
import Sidebar from "./Sitebar/page";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex ">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>

    </div>
  );
};

export default Layout;