export default function Question({ text }: { text: string }) {
  return (
    <div className="py-2 md:py-3 w-full">
      <div className="ml-auto py-2.5 md:py-4 px-4 md:px-5 rounded-3xl max-w-7/10 bg-msg-surface">
        {text}
      </div>
    </div>
  );
}
