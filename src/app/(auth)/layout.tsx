export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full px-4 md:w-1/2 md:max-w-lg mx-auto">{children}</div>
    </div>
  );
}