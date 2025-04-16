import MessagerHeader from "./components/MessagerHeader";
import MessagerFooter from "./components/MessagerFooter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

export const statusContext = createContext("");

export default function Home() {
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    setStatusText(
      "This is a messager app where you can store your favorite quotes, messages, or tasks. Each message should have a title, body, and user. Please use the buttons above to navigate and view all messages."
    );
  }, []);

  return (
    <statusContext.Provider value={setStatusText}>
      <div className="bg-violet-200 min-h-screen w-full flex flex-col justify-between items-center">
        <MessagerHeader />
        <p className="text-center text-lg text-gray-700 p-4">{statusText}</p>
        <Outlet />

        <MessagerFooter />
      </div>
    </statusContext.Provider>
  );
}
