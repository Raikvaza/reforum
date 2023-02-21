import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth";

// import Breadcrumbs from "../components/Breadcrumbs"

export default function RootLayout() {
    
  const userData = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();
  useEffect(() => {
    
    const checkAuth =( async () => {
      
      try{
        const response = await fetch(`http://localhost:8080/api/checkUser`, {
          headers: {
            'Accept': 'application/json',
            'Credentials': 'include'
          },
          method: "GET",
          credentials: 'include',
        })
        if (!response.ok) {
          throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(loginSuccess({ username: data.Username }));
      } catch(error){
        console.log(error);
      }
    })()

  }, [])
    

    return (
    <div className="root-layout">
        <Outlet />
    </div>
  )
}

