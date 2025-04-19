"use client";

import Button from "../button";

export default function ChatInput() {
  return (
    <form className="flex items-center pl-2 pr-3 py-2 rounded-3xl bg-white shadow-xl flex-end border-gray-100 border">
      <div className="min-h-18 block mx-2 md:mx-4 w-full text-gray-900 bg-white focus:ring-none focus:outline-none flex-auto relative">
        <textarea
          id="chat"
          className="resize-none absolute left-0 right-0 bottom-0 top-0 my-1"
          placeholder="Ask me anything"
        ></textarea>
      </div>
      <div className="">
        <Button type="rounded" onClick={() => {}}>
          <svg
            className="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
