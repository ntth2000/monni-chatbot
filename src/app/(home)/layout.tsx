export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gray-50">
      {children}
    </div>
  );
}
