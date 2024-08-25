type AnswerProps = {
  id: string;
  answer: string;
  checked: boolean;
  onChange: (id: string) => void;
};

export default function Answer({ id, answer, onChange, checked }: AnswerProps) {
  return (
    <li
      onClick={() => onChange(id)}
      className="p-4 bg-purple-light flex items-center rounded cursor-pointer hover:bg-purple-400 transition"
    >
      <input
        onChange={() => onChange(id)}
        value=""
        id={id}
        type="radio"
        checked={checked}
        name="answer-radio"
        className="w-4 mr-2 h-4"
      />
      <label htmlFor={id}>{answer}</label>
    </li>
  );
}
