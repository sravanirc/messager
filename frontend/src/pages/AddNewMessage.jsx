import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { statusContext } from "../Home";

export default function AddNewMessage() {
  const [mBody, setMBody] = useState("");
  const [mTitle, setMTitle] = useState("");
  const [mUser, setMUser] = useState("");
  const setStatusText = useContext(statusContext);

  useEffect(() => {
    setStatusText("");
    return () => {
      setStatusText(
        "This is a messager app where you can store your favorite quotes, messages, or tasks. Each message should have a title, body, and user. Please use the buttons above to navigate and view all messages."
      );
    };
  }, []);

  const createMessage = async () => {
    const requestBody = {
      messageTitle: mTitle,
      messageBody: mBody,
      user: mUser,
    };
    try {
      setStatusText("Please wait while creating new message");
      const response = await axios.post(
        "http://localhost:5001/newmessage",
        requestBody
      );
      if (response.data) {
        setStatusText(
          `Message Created successfully with id: ${response.data._id}`
        );
        console.log(response.data);
      }
    } catch (error) {
      setStatusText("Error creating new message");
    }
  };
  return (
    <div className="w-full max-w-1/2">
      <form className="  shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h1>Add new Message </h1>
        <div className="mb-4 flex gap-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="messageTitle">
            Message Title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="messageTitle"
            type="text"
            placeholder="Title"
            onChange={(event) => {
              setMTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-6 flex gap-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="messageBody">
            Message Body:
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="messageBody"
            type="text"
            placeholder="Message Body"
            onChange={(event) => {
              setMBody(event.target.value);
            }}
          />
        </div>
        <div className="mb-6 flex gap-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="user">
            User / Author:
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="user"
            type="text"
            placeholder="User"
            onChange={(event) => {
              setMUser(event.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="border-2 border-black rounded-md p-1 !no-underline focus:outline-none focus:shadow-outline"
            type="button"
            onClick={createMessage}>
            Create Message
          </button>
        </div>
      </form>
    </div>
  );
}
