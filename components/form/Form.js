import React, { useState } from 'react';

import { addTodo } from '../../api';

import Button from '../button/Button';
import Field from '../field/Field';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const { onCreated } = props;

  const [data, setData] = useState({ title: '', date: undefined });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {}

  function onChange(e) {}

  return (
    <React.Fragment>
      <form className={css.form} onSubmit={onSubmit}>
        <h1 className={css.form__header}>Nýtt verkefni</h1>
        <Field type="text" elem="input" text="Titill:" />
        <Field type="dateTime-local" elem="input" text="Klárast fyrir:" />
        <Button>Búa til</Button>
      </form>
    </React.Fragment>
  );
}
