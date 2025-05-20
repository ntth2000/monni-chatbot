export default function Answer({ innerHTML }: { innerHTML: string }) {
  return (
    <div className="py-2 md:py-4">
      <div className="py-2.5 md:py-4 px-4 md:px-5 rounded-2xl answer bg-white w-fit" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
    </div>
  );
}

export function LoadingAnswer(){
  return <>doing</>
}