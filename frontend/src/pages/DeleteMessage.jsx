import { useContext, useEffect, useState } from "react";
import { statusContext } from "../Home";
import axios from "axios";
export default function DeleteMessage() {
  const setStatusText = useContext(statusContext);
  const [id, setId] = useState("");
  useEffect(() => {
    setStatusText("");
    return () => {
      setStatusText(
        "This is a messager app where you can store your favorite quotes, messages, or tasks. Each message should have a title, body, and user. Please use the buttons above to navigate and view all messages."
      );
    };
  }, []);

  const deleteMessageByID = async () => {
    setStatusText(`${id}`);
    try {
      const response = await axios.delete(`http://localhost:5001/delete/${id}`);
      if (response.data) {
        setStatusText(`Message with id ${id} deleted successfully`);
      }
    } catch (error) {
      setStatusText("Error deleting message");
      setStatusText(`${id}`);
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-1/2">
      <div className="flex m-2">
        <label htmlFor="deleteMessageId">Message ID: </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="deleteMessageId"
          value={id}
          placeholder="Message Id to delete.."
          onChange={(e) => setId(e.target.value)}></input>
      </div>
      <button
        className="border-2 border-black rounded-md p-1 !no-underline focus:outline-none focus:shadow-outline"
        onClick={deleteMessageByID}>
        Delete Message
      </button>
    </div>
  );
}
