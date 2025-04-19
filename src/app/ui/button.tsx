"use client";

export default function Button({
  onClick,
  type,
  children,
}: {
  onClick: () => void;
  type?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-white bg-primary hover:bg-secondary hover:cursor-pointer font-medium rounded-full ${
        type === "rounded" ? "px-2.5" : "px-3 md:px-5"
      } py-2.5 text-center`}
    >
      {children}
    </button>
  );
}
