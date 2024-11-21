import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Blank = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/back-to-login");
    }, 2000);
  }, [navigate]);

  return <div>{loading && <div>Loading...</div>}</div>;
};