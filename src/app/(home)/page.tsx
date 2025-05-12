"use client";

import Answer from "../ui/chat/answer";
import ChatInput from "../ui/chat/chat-input";
import Question from "../ui/chat/question";
import { ChatSkeleton } from "../ui/skeletons";
import { useEffect, useState } from "react";
import NoChatHistory from "../ui/no-chat-history";
// import { fetchHistory } from "../lib/fetch-data";

export default function Page() {
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialHistory = async () => {
      try {
        setLoading(true)
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchInitialHistory();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatInput(e.target.value);
  };
  return (
    <div className="h-full w-full flex flex-col">
      <div className="overflow-y-auto flex-auto pb-6">
        {!isLoading && chatHistory && chatHistory.length > 0 && (
          <div className="w-chat mx-auto">
            {chatHistory.map((chat) => {
              return (
                <div key={chat.id}>
                  <Question text={chat?.question} />
                  <Answer text={chat?.answer} />
                </div>
              );
            })}
          </div>
        )}

        {!isLoading && chatHistory.length === 0 && <div className="w-chat mx-auto my-auto h-full flex flex-row justify-center items-center">
          <NoChatHistory />
        </div>}

        {isLoading && <div className="w-chat mx-auto">
          <ChatSkeleton />
        </div>}
      </div>

      <div className="w-chat mx-auto pb-6 md:pb-8 pt-2">
        <ChatInput onChange={handleInputChange} chatInput={chatInput} />
      </div>
    </div>
  );
}