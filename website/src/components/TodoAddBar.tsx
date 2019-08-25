import React, { useCallback } from "react";

export const TodoAddBar: React.FC = () => {
  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    []
  );
  return (
    <form onSubmit={handleFormSubmit}>
      <input />
      <button type="submit">Add Todo</button>
    </form>
  );
};
