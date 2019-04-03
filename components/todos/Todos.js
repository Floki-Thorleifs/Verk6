import React from 'react';
import TodoItem from './../todo-item/TodoItem';
import Button from './../button/Button';

import css from './Todos.css';
// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const { data } = props;
  const stuff = data.map((i, index) => {
    return <TodoItem key={index} data={i} />;
  });
  return (
    <React.Fragment>
      <Button>Sýna allt!</Button>
      <ul className={css.todos}>{stuff}</ul>
    </React.Fragment>
  );
}
