import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div className="m-4">
      <button
        className="bg-blue-900 w-full h-11 text-white text-sm font-medium rounded-lg max-w-sm"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
