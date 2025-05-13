"use client";

type ChatInputProps = {
  isDisabled: boolean;
  chatInput: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSendMessage: () => void;
};

export default function ChatInput({
  isDisabled,
  chatInput,
  onInputChange,
  onSendMessage,
}: ChatInputProps) {
  return (
    <div className="flex items-end pl-2 pr-3 py-3 rounded-3xl bg-white shadow-xl flex-end border-gray-100 border">
      <div className="block mx-2 md:mx-4 w-full text-gray-900 focus:ring-none focus:outline-none flex-auto relative">
        <textarea
          id="chat"
          className="absolute py-2 left-0 bottom-0 top-0 h-auto resize-none w-full"
          placeholder="Ask me anything"
          value={chatInput}
          onChange={onInputChange}
        ></textarea>
        <div className={`py-2 min-h-18 max-h-60 h-auto w-full invisible`}>
          {chatInput || "Ask me anything"}
        </div>
      </div>
      <div className="">
        <button
          disabled={isDisabled}
          type="button"
          onClick={onSendMessage}
          className={`w-full text-white bg-primary hover:bg-secondary hover:cursor-pointer font-medium rounded-full px-2.5 py-2.5 text-center`}
        >
          <svg
            className="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
