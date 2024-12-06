import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Link to="/carousel">
        <img src="src/assets/user1.png" alt="User 1" className="mx-28"/>
      </Link>
    </div>
  );
};

export default Root;
