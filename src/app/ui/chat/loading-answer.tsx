import Logo from "../icons/logo";

export default function LoadingAnswer() {
  return (
    <div className="py-2 md:py-4 w-full flex flex-row">
      <div className="mr-2 animate-bounce">
        <Logo width="24px" height="24px" />
      </div>
      <p> Bạn chờ Monni xíu nha...</p>
    </div>
  );
}
