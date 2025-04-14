import TopBar from "../ui/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <TopBar />
      <div className="w-full p-4 lg:w-4/7 mx-auto flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
