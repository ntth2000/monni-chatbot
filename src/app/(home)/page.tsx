import ChatInput from "../ui/chat/chat-input";
import TopBar from "../ui/topbar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="bg-white w-full max-w-2xl mx-auto h-80">
        hello
        <ChatInput />
      </div>
    </>
  );
}
