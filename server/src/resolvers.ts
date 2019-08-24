import { IResolverObject } from "apollo-server";

import { Todo, Store } from "./store";

export const queryResolver: IResolverObject = {
  todos: () => Store.findAll()
};

export const mutationResolver: IResolverObject = {
  create: (_, { text }) => {
    const newTodo: Partial<Todo> = { text };
    return Store.save(newTodo);
  }
};
