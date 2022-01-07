import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return <MyChat />;
}

function MyChat() {
  const [chat1, setChat1] = useState("");
  const [list, setList] = useState([]);
  const myinfo = " by Dhanashri Patil 022";

  const handleChat = (e) => {
    setChat1(e.target.value);
  };

  const handleSend = async () => {
    const url = "http://localhost:4002/add";

    if (chat1 === "") {
      alert("please enter a message");
      return;
    }
    const data = { chat1: chat1 };
    await axios.post(url, data);
    const newList = [...list, data];
    setList(newList);
    setChat1("");
  };

  const viewChat = async () => {
    const url = "http://localhost:4002/select";
    const result = await axios.get(url);
    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  useEffect(() => viewChat(), []);
  return (
    <div className="text-center">
      <div className="bg-secondary p-3 text-light mb-2">
        <h1>MyChatApp</h1>
        {myinfo}
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control m-3 p-2 w-100 "
          name=""
          id=""
          value={chat1}
          placeholder="Lets Chat here..."
          onChange={handleChat}
        />

        <input
          type="button"
          name=""
          className="bg-primary text-light  fs-4 m-3 w-50 btn-outline-primary"
          id=""
          value="Send"
          onClick={handleSend}
        />
      </div>
      {list.map((item, index) => (
        <div key={index}>
          <h3>{item.chat1}</h3>
        </div>
      ))}
    </div>
  );
}
