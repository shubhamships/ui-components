import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Welcome from "./Welcome";

export const Blank = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/back-to-login");
    }, 7000);
  }, [navigate]);

  return <div>{loading && <div><Welcome/></div>}</div>;
};