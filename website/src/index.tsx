import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./client";

import { TodosContainer } from "./components/TodosContainer";

ReactDOM.render(
  <ApolloProvider client={client}>
    <TodosContainer />
  </ApolloProvider>,
  document.getElementById("root")
);
