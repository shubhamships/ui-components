import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";


const Root = () => {
  return (
    <div className="flex min-h-screen bg-gray-800">
      <div className="w-20 hover:w-40">
        <Navbar />
      </div>

      <div className="flex-1 p-6">
        <Dashboard />
      </div>
    </div>
  );
};

export default Root;
