import { useState } from "react";
import Answer from "./Answer";

type MultipleChoiceProps = {
  title: string;
  description: string;
  answers: { id: string; answer: string }[];
};

export default function MultipleChoice({
  title,
  description,
  answers,
}: MultipleChoiceProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // We only allow one answer to be selected

  const onSelectAnswer = (id: string) => {
    setSelectedAnswer(id);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <div
        className="text-md"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <h2 className="mt-5 text-sm font-medium mb-4 text-purple-200">
        Pick one option
      </h2>
      <ul className="space-y-4 mb-4">
        {answers.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer.answer}
            id={answer.id}
            onChange={onSelectAnswer}
            checked={selectedAnswer === answer.id}
          />
        ))}
      </ul>
    </div>
  );
}
