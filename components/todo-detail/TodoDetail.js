import React, { useState } from 'react';
import Field from './../field/Field';
import Button from './../button/Button';
import Link from 'next/link';

import css from './TodoDetail.css';
// Stakt verkefni á /:id
export default function todoDetail(props) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { data, id, deleteTodo, updateTodo } = props;
  console.log('hallo', id);

  function onDelete(e) {
    e.preventDefault();
    setLoading(true);
    const deleted = deleteTodo(id);

    if (!deleted) {
      setErrors(deleted.response);
    }

    setLoading(false);
  }

  return (
    <React.Fragment>
      <div className={css.todoDetail__defenition}>
        <Field type="text" text="Title:" elem="input" />
        <Field type="checkbox" text="Lokið:" elem="input" />
        <Field
          type="dateTime-local"
          text="Klárast fyrir:"
          elem="input"
          value={data.due}
        />
        <Field type="label" text="Uppfært:" value={data.updated} />
        <Field elem="label" text="Búið til:" value={data.created} />
      </div>
      <div className={css.todoDetail__buttons}>
        <Button onClick={updateTodo}>Uppfæra</Button>
        <Button onClick={onDelete}>Eyða</Button>
      </div>
      <Link as="/" href="/">
        <a className={css.todoDetail__back}>Til baka</a>
      </Link>
    </React.Fragment>
  );
}
