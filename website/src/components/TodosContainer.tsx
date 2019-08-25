import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { Todo as TodoEntity } from "../entities";

import { TodoAddBar } from "./TodoAddBar";
import { Todo } from "./Todo";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      completed
    }
  }
`;

interface TodosData {
  todos: TodoEntity[];
}

export const TodosContainer: React.FC = () => {
  const { data, loading, error } = useQuery<TodosData, void>(GET_TODOS);
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <TodoAddBar />
      {data!.todos.map((todo: TodoEntity) => (
        <Todo {...todo} />
      ))}
    </div>
  );
};
