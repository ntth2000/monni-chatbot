import Logo from "./icons/logo";

export default function NoChatHistory() {
  return (
    <div className="text-center mb-10 flex flex-col items-center">
      <div className="w-fit mb-4 md:mb-6">
        <Logo width="48px" height="48px" />
      </div>

      <p className="font-medium text-base md:text-lg mb-2">
        I'm Monni – your personal finance assistant
      </p>
      <p>
        Start by typing something like:{" "}
        <span className="italic"> I spent 50k on breakfast today.</span>
      </p>
    </div>
  );
}
