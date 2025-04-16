import { Link } from "react-router-dom";

export default function MessagerFooter() {
    return (
        <div  className="bg-gray-400 min-w-screen flex justify-center items-center p-2 m-1">   
         <Link to="/contactUs" className="p-3 text-white">Contact Us</Link>
         <Link to="/aboutUs" className="p-3 text-white">About Us</Link>
        </div>
    )
}