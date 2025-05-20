export default function Question({ innerHTML }: { innerHTML: string }) {
  return (
    <div className="py-2 md:py-4 w-full">
      <div className="ml-auto py-2.5 md:py-3 px-4 md:px-5 rounded-2xl w-fit max-w-7/10 bg-msg-surface question text-white" dangerouslySetInnerHTML={{__html: innerHTML}}>
      </div>
    </div>
  );
}
