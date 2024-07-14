import { CircleAlert } from "lucide-react";

export type ErrorMessageProps = {
  message: string | undefined;
};

export const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <div className="flex items-center gap-2">
      <CircleAlert color="#dc2626" size={16} />{" "}
      <p className="text-sm text-red-600">{props.message}</p>
    </div>
  );
};
