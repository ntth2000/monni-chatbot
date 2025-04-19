export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full rounded-lg">
      <div className="space-y-4 md:space-y-6 sm:p-8">
        <h1 className="w-full text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl lg:text-3xl mb-6 md:mb-10">{title}</h1>
        {children}
      </div>
    </div>
  );
}
