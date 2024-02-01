import React, { useContext, useEffect, useState } from "react";
import adminContext from "../../../context/adminContext";
import { useParams } from "react-router-dom";
import Put from "../../../HOC/API/Put";

export const Messages = () => {
  const [messageState, setMessageState] = useState();
  const [NewMessage, setNewMessage] = useState();

  const Userid = useParams();

  const usetInfo = useContext(adminContext);

  useEffect(() => {
    setMessageState(usetInfo && usetInfo.messagesData[Userid.id - 1].messages);
  }, [Userid]);

  return (
    <div className=" h-full relative shadow-inner overflow-scroll pt-32 text-2xl">
      <nav className=" opacity-60  h-20 shadow bg-admin-text fixed top-0 w-full  backdrop-blur-md  "></nav>

      {messageState &&
        messageState.map((item) => {
          if (item.id) {
            return (
              <div key={item} className="  flex px-5  justify-end w-full">
                <p className="bg-white  rounded-t-3xl p-4 ms-16 rounded-br-3xl w-auto lg:w-1/3 ">
                  {item.content}
                </p>
              </div>
            );
          } else {
            return (
              <div key={item} className="  flex px-5 my-5   w-full">
                <p className="  rounded-t-3xl p-4 bg-admin-text me-16 text-white rounded-bl-3xl w-auto lg:w-1/3">
                  {item.content}
                </p>
              </div>
            );
          }
        })}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          let newMessage = { id: 0, content: NewMessage };
          if (NewMessage) {
            setMessageState([...messageState, newMessage]);

            usetInfo.messagesData[Userid.id - 1].messages = [
              ...messageState,
              newMessage,
            ];

            Put(`registered/${Userid.id}`, usetInfo);
            setNewMessage("");
          }
        }}
        className="h-24  fixed bottom-0 w-full flex"
      >
        <button
          href="#"
          role="button"
          type="submit"
          className="m-3  bg-admin-hover shadow-lg text-admin-text  hover:bg-admin-active hover:text-admin-hover rounded-full flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8  m-3"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
        <input
          type="text"
          className=" w-full m-3 shadow-lg rounded-full p-3 me-0 "
          onChange={(input) => {
            setNewMessage(() => input.target.value);
          }}
          value={NewMessage}
        />
      </form>
    </div>
  );
};
