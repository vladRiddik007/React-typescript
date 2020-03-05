import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>("");

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  //generick type
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";

      // console.log(title);
      // setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        // onChange={changeHandler}
        // value={title}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
