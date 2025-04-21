function QuestionSkeleton() {
  return (
    <div className="py-2 md:py-3 w-full">
      <div className="ml-auto py-2.5 md:py-4 px-4 md:px-5 rounded-3xl max-w-7/10 bg-gray-200 relative shimmer overflow-hidden h-6 w-1/2" />
    </div>
  );
}

function AnswerSkeleton() {
  return (
    <div className="py-2 md:py-3">
      <div className="py-4 bg-gray-200 rounded-2xl relative shimmer overflow-hidden h-24 w-4/5" />
    </div>
  );
}

export function ChatSkeleton() {
  return (
    <>
      <QuestionSkeleton />
      <AnswerSkeleton />
      <QuestionSkeleton />
      <AnswerSkeleton />
      <QuestionSkeleton />
      <AnswerSkeleton />
      <QuestionSkeleton />
      <AnswerSkeleton />
    </>
  );
}
