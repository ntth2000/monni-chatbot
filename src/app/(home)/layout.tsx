import TopBar from "../ui/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div className="h-18 top-0 absolute w-full">
        <TopBar />
      </div>
      <div className="absolute top-18 bottom-0 w-full">{children}</div>
    </div>
  );
}
