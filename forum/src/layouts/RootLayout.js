import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
// import Breadcrumbs from "../components/Breadcrumbs"

export default function RootLayout() {
    const isAuth = useLoaderData()
    
    return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>REDESIGN</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="createpost">Create Post</NavLink>
          <NavLink to="signin">Sign In</NavLink>
          <NavLink to="signup">Sign Up</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export const careerDetailsLoader = async () => {
     const checkAuthentication = await fetch(`http://localhost:8080/api/checkUser`, {
        headers: {
          'Accept': 'application/json',
          'Credentials': 'include'
        },
        method: "GET",
        credentials: 'include',
      }).then((r) => {
          if(r.ok){
            console.log("Token");
            return r.json();
          } else if (r.status === 401){
            console.log("NoToken");
            return new Error("Server error");
          } else {
            setFetchCalled(true)
            return new Error("Server error")
          }
        })
}