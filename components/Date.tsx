import { format, parseISO } from "date-fns";

type DateProps = {
  dateString: string;
};

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return (
    <div className="mb-5 italic text-gray-500">
      {format(date, "LLLL d, yyyy")}
    </div>
  );
}
