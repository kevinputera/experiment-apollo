import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { Todo } from "../entities";
import { GET_TODOS, TodosData } from "./TodosContainer";

const CREATE_TODO = gql`
  mutation AddTodo($text: String!) {
    create(text: $text) {
      id
      text
      completed
    }
  }
`;

interface TodoCreateData {
  create: Todo;
}

interface TodoCreateVariables {
  text: string;
}

export const TodoCreateBar: React.FC = () => {
  const [input, setInput] = useState("");
  const [createTodo, { loading, error }] = useMutation<
    TodoCreateData,
    TodoCreateVariables
  >(CREATE_TODO, {
    variables: { text: input },
    refetchQueries: result => ["GetTodos"]
    // update: (cache, result) => {
    //   const createResult = result.data;
    //   if (createResult) {
    //     const todosData = cache.readQuery<TodosData, void>({
    //       query: GET_TODOS
    //     });
    //     cache.writeQuery({
    //       query: GET_TODOS,
    //       data: { todos: todosData!.todos.concat(createResult.create) }
    //     });
    //   }
    // }
  });
  if (error) {
    console.log("Failed to create");
  }
  if (loading) {
    return <div>Creating</div>;
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createTodo();
      }}
    >
      <input onChange={e => setInput(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
