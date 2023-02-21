import { useEffect, useState } from "react"
import { Outlet, NavLink } from "react-router-dom"
import Header from '../../components/Header/Header'
import { useRouteLoaderData } from "react-router-dom";

// import Breadcrumbs from "../components/Breadcrumbs"
import './MainLayout.css'
export default function MainLayout() {
    const user= useRouteLoaderData("root");
    const [isAuth, setIsAuth] = useState(false)
    console.log("MAINLAYOUT:"+user);
    useEffect(()=>{
        console.log("re-rendering headers through main layout");

        if (!(user instanceof Error)){
            setIsAuth(true);
        }
    }, [user]);
    
    return (
    <div className="main-layout">
        <nav>
            <Header isAuth={isAuth}/>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export const checkMain = () => {
    console.log("MainLAYOUT");  
    return null
}