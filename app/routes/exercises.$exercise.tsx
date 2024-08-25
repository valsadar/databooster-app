import { LoaderFunction } from "@remix-run/node";
import Exercise from "~/components/Exercise";
import lessonsData from "~/data/lessons.json";

export const loader: LoaderFunction = ({ params }) => {
  const { exercise } = params;
  const foundExercise = lessonsData.lessons[0].exercises.find(
    (e) => e.id === exercise
  );

  if (!foundExercise) {
    throw new Response("Not Found", { status: 404 });
  }

  return foundExercise;
};

export default function ExercisePage() {
  return <Exercise />;
}
