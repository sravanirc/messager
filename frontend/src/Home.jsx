import MessagerHeader from "./components/MessagerHeader"
import MessagerFooter from "./components/MessagerFooter"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom"


export default function home(){
  return (
    <div className="bg-violet-200 h-screen min-w-screen flex flex-col justify-between items-center">
    <MessagerHeader/>
    <Outlet />
    <MessagerFooter/>
    </div>
 )
}
