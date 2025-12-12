import { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  id: string;
  textArea?: boolean;
  type?: string;
  required?: boolean;
};

const inputStyle: string = "bg-yellow-400 text-black mb-[2vh]";

export const FormInput: FC<FormInputProps> = ({
  id,
  textArea,
  type,
  required,
}: FormInputProps) => {
  return (
    <>
      <label htmlFor={id} className="pr-[2vw] mb-[1vh]">
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      {textArea ? (
        <textarea
          className={inputStyle}
          name={id}
          id={id}
          required={required}
        ></textarea>
      ) : (
        <input
          name={id}
          id={id}
          className={inputStyle}
          type={type}
          required={required}
        />
      )}
    </>
  );
};
