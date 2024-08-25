import {
  redirect,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
import lessonsData from "~/data/lessons.json";

export const meta: MetaFunction = () => {
  return [
    { title: "DataBooster App" },
    { name: "description", content: "Welcome to DataBooster's Assignment!" },
  ];
};

export const loader: LoaderFunction = () => {
  const videoExercise = lessonsData.lessons[0].exercises.find(
    (exercise) => exercise.order === 0
  );

  if (!videoExercise) {
    throw new Response("Oops! Page not Found.", { status: 404 });
  }

  return redirect(`/exercises/${videoExercise.id}`);
};

export default function Index() {
  return null; // We redirect to the video exercise immediately
}
