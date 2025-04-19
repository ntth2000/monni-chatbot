"use client";

import { useState } from "react";
import Answer from "../ui/chat/answer";
import ChatInput from "../ui/chat/chat-input";
import Question from "../ui/chat/question";
import { chatData } from "../lib/placeholder-data";
import NoChatHistory from "../ui/no-chat-history";

export default function Page() {
  const [chatHistory, setChatHistory] = useState(chatData);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="overflow-y-scroll flex-auto">
        {chatHistory.length ? (
          <div className="w-chat mx-auto">
            {chatHistory.map((chat) => {
              return (
                <>
                  <Question text={chat?.question} />
                  <Answer text={chat?.answer} />
                </>
              );
            })}
          </div>
        ) : (
          <div className="w-chat mx-auto my-auto h-full flex flex-row justify-center items-center">
            <NoChatHistory />
          </div>
        )}
      </div>

      <div className="w-chat mx-auto pb-6 md:pb-8 pt-2">
        <ChatInput />
      </div>
    </div>
  );
}
