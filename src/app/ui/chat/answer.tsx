export default function Answer({ text }: { text: string }) {
  return (
    <div className="py-2 md:py-3">
      <div className="py-4">{text}</div>
    </div>
  );
}

export function LoadingAnswer(){
  return <>doing</>
}