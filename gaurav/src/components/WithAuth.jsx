import axios from "axios";
// import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    // const [auth, setAuth] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    {
      /*
            useEffect(() => {
        checkAuth();
        }, []);

        const checkAuth = () => {
        const token = localStorage.getItem("token");
        if (!token && requireAuth) {
            navigate("/login");
            setIsLoading(false);
            return;
        }
        if (token) {
            try {
            // Setting Default auth Header
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setAuth(true);

            if (!requireAuth && window.location.pathname === "/login") {
                navigate("/");
            }
            } catch (error) {
            console.log("Auth Failed", error);
            localStorage.removeItem("token");
            delete axios.defaults.headers.common["Authorization"];
            if (requireAuth) {
                navigate("/login");
            }
            }
        }
        setIsLoading(false);
        };
    */
    }
    const login = async (data) => {
      try {
        const res = await axios.post(
          "https://api.fr.stg.shipglobal.in/public/api/v1/auth/login",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        const token = res.data.token;
        // Storing the token
        localStorage.setItem("token", token);
        // Set token in axios headers
        setAuthToken(token);
        console.log("Successful");
        return { success: true };
      } catch (error) {
        console.log("Error occured", error);
        return {
          success: false,
          error: error.response.data.message || "Login Failed",
        };
      }
    };
    const setAuthToken = (token) => {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    };
    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
    return <WrappedComponent {...props} login = {login} />;
  };

  WithAuthComponent.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return WithAuthComponent;
};

export default withAuth;
