import { useLoaderData } from "@remix-run/react";
import Buttons from "./Buttons";
import MultipleChoice from "./MultipleChoice";

enum ExerciseEnumType {
  Video = "VideoExercise",
  MultipleChoice = "MultipleChoiceExercise",
}

type AnswerType = {
  id: string;
  answer: string;
  exercise: string;
};
export type ExerciseType = {
  id: string;
  resourcetype: string;
  title: string;
  url?: string;
  description?: string;
  answers?: Array<AnswerType>;
  next_exercise_id: string;
  previous_exercise_id: string;
};

export default function Exercise() {
  const exercise: ExerciseType = useLoaderData();

  return (
    <div className="bg-purple-main flex flex-col p-10 h-full text-white">
      {exercise.resourcetype === ExerciseEnumType.Video ? (
        <div className="flex h-full flex-col items-center">
          <h1 className="text-4xl font-bold mb-10 capitalize">
            {exercise.title}
          </h1>

          <iframe
            src={exercise.url}
            className="w-full h-full"
            title={exercise.title}
          ></iframe>
        </div>
      ) : exercise.resourcetype === ExerciseEnumType.MultipleChoice ? (
        <MultipleChoice
          title={exercise.title}
          description={exercise.description!}
          answers={exercise.answers!}
        />
      ) : (
        <></>
      )}

      <Buttons
        nextId={exercise.next_exercise_id}
        previousId={exercise.previous_exercise_id}
      />
    </div>
  );
}
