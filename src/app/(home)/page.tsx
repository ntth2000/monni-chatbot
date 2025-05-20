"use client";

import Answer from "../ui/chat/answer";
import ChatInput from "../ui/chat/chat-input";
import Question from "../ui/chat/question";
import { ChatSkeleton } from "../ui/skeletons";
import { useEffect, useRef, useState } from "react";
import NoChatHistory from "../ui/no-chat-history";
import {
  createNewQuestionAction,
  getAllConversationAction,
} from "../lib/api/conversation";
import { Conversation } from "../lib/definitions";
import LoadingAnswer from "../ui/chat/loading-answer";

export default function Page() {
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<Conversation[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchInitialHistory = async () => {
      try {
        setLoading(true);
        const data: Conversation[] = await getAllConversationAction();
        setChatHistory(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialHistory();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatInput(e.target.value);
  };

  const handleSubmitChat = async (): Promise<void> => {
    if (isLoadingAnswer) return;

    setIsLoadingAnswer(true);
    try {
      const question = chatInput;
      const currentHistory = JSON.parse(JSON.stringify(chatHistory));
      setChatInput("");
      const tempChat: Conversation = {
        id: crypto.randomUUID(),
        question,
        answer: "",
        createdAt: new Date().toISOString(),
      };
      setChatInput("");
      setChatHistory((prev) => [...prev, tempChat]);

      const newChat: Conversation = await createNewQuestionAction(question);
      setChatHistory([...currentHistory, newChat]);
    } catch (error: Error | any) {
      let message: string = error.message;

      if (error.status === 502) {
        message = "Đã có lỗi xảy ra, vui lòng thử lại.";
      }

      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].answer = message;
        return updatedHistory;
      });
    }
    setIsLoadingAnswer(false);
  };

  useEffect(() => {
    if (lastMessageRef) {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="overflow-y-auto flex-auto pb-6">
        {!isLoading && chatHistory && chatHistory.length > 0 && (
          <div className="w-chat mx-auto">
            {chatHistory.map((chat, index) => {
              return (
                <div
                  key={chat.id}
                  ref={index === chatHistory.length - 1 ? lastMessageRef : null}
                >
                  <Question innerHTML={chat?.question} />
                  {index === chatHistory.length - 1 && isLoadingAnswer ? (
                    <LoadingAnswer />
                  ) : (
                    <Answer innerHTML={chat?.answer} />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {!isLoading && chatHistory.length === 0 && (
          <div className="w-chat mx-auto my-auto h-full flex flex-row justify-center items-center">
            <NoChatHistory />
          </div>
        )}

        {isLoading && (
          <div className="w-chat mx-auto">
            <ChatSkeleton />
          </div>
        )}
      </div>

      <div className="w-chat mx-auto pb-6 md:pb-8 pt-2">
        <ChatInput
          chatInput={chatInput}
          onInputChange={handleInputChange}
          onSendMessage={handleSubmitChat}
          isDisabled={isLoadingAnswer || chatInput.trim() === ""}
        />
      </div>
    </div>
  );
}
