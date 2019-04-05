import React, { useState, useEffect } from 'react';
import TodoItem from './../todo-item/TodoItem';
import Button from './../button/Button';

import css from './Todos.css';
// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const [showComp, setComp] = useState(true);
  const { data, loading, onFetchNewData } = props;

  let stuff = data.map((i, index) => {
    return <TodoItem key={index} data={i} />;
  });

  function hideComp() {
    setComp(!showComp);
    onFetchNewData(showComp);
  }

  return (
    <React.Fragment>
      <Button onClick={hideComp}>{showComp ? 'Fela búið' : 'Sýna allt'}</Button>
      {!loading && <ul className={css.todos}>{stuff}</ul>}
      {loading && <p>Loading...</p>}
    </React.Fragment>
  );
}
