import Logo from "./icons/logo";

export default function NoChatHistory() {
  return (
    <div className="text-center mb-10 flex flex-col items-center">
      <div className="w-fit mb-4 md:mb-6">
        <Logo width="48px" height="48px" />
      </div>

      <p className="font-medium text-base md:text-lg mb-2">
        Chào bạn 👋 <span className="font-bold">Tớ là Monni - trợ lý tài chính cá nhân của bạn</span>
      </p>
      <p>
        Bạn có thể bắt đầu bằng cách nhắn gì đó như:{" "}
        <span className="italic">"Hôm nay tớ tiêu 50k ăn sáng"</span> nha.
      </p>
    </div>
  );
}
