import Answer from "../ui/chat/answer";
import ChatInput from "../ui/chat/chat-input";
import Question from "../ui/chat/question";

export default function Home() {
  return (
    <div className="w-full h-82 mx-auto flex flex-col">
      <div className="scroll-auto flex-1">
        <Answer />
        <Question />
        <Answer />
        <Question />
        <Answer />
        <Question />
        <Answer />
        <Question />
        <Answer />
        <Question />
        <Answer />
        <Question />
      </div>
      <ChatInput />
    </div>
  );
}
