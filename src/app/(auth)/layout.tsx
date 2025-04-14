export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
        <div className="w-60">{children}</div>
      </div>
    );
  }
  