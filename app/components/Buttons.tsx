import { Link } from "@remix-run/react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

type ButtonsProps = {
  nextId: string;
  previousId: string;
};

type ButtonProps = {
  exerciseId: string;
};

export const NextButton = ({ exerciseId }: ButtonProps) => {
  return (
    <div className="hover:bg-purple-400 p-2 rounded">
      <Link to={`/exercises/${exerciseId}`}>
        <RiArrowRightLine />
      </Link>
    </div>
  );
};

export const PreviousButton = ({ exerciseId }: ButtonProps) => {
  return (
    <div className="hover:bg-purple-400 p-2 rounded">
      <Link to={`/exercises/${exerciseId}`}>
        <RiArrowLeftLine />
      </Link>
    </div>
  );
};

export default function Buttons({ nextId, previousId }: ButtonsProps) {
  return (
    <div className="flex justify-between mt-5">
      {previousId ? <PreviousButton exerciseId={previousId} /> : <div></div>}
      {nextId && <NextButton exerciseId={nextId} />}
    </div>
  );
}
