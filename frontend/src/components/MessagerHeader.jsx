import {Link} from "react-router-dom"
export default function MessagerHeader() {
return (
<div  className="bg-gray-400 min-w-screen flex justify-between items-center p-2 m-1">   
<h1> Messager</h1>
<div className="flex gap-2 ">
    <Link to="/" className="border-2 border-black rounded-md p-1 text-white !no-underline">Home</Link>
    <Link to="/addNewMessage" className="border-2 border-black rounded-md p-1  text-white !no-underline">Add New Message</Link>
    <Link to="/deleteMessage" className="border-2 border-black rounded-md p-1 text-white !no-underline">Delete Message</Link>
    <Link to="/editMessage" className="border-2 border-black rounded-md p-1 text-white !no-underline">Edit Message</Link>
    <Link to="/allMessages" className="border-2 border-black rounded-md p-1 text-white !no-underline">View all Messages</Link>
    
</div>
</div>  
)
}


