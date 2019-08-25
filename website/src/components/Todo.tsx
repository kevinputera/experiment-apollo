import React from "react";
import { Todo as TodoEntity } from "../entities";

export const Todo: React.FC<TodoEntity> = ({ id, text, completed }) => {
  return (
    <div>
      <span>{id}</span> <span>{text}</span>
    </div>
  );
};
