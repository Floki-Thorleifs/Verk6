import React, { useState } from 'react';
import { updateTodo } from './../../api';
import Link from 'next/link';

import css from './TodoItem.css';
// Verkefni í lista á forsíðu
export default function todoItem(props) {
  const { data } = props;
  const [nData, setData] = useState(data);
  const [loading, setLoading] = useState(false);

  const linkAs = `/todo/${nData.id}`;
  const linkTo = `/todo?id=${nData.id}`;

  async function check() {
    setLoading(true);
    const newData = await updateTodo(nData.id, { completed: !nData.completed });

    setData(newData);
    setLoading(false);
  }

  return (
    <li>
      {!loading && (
        <div className={css.item}>
          <input
            type="checkbox"
            id={nData.id}
            className={css.item__input}
            onChange={check}
            checked={nData.completed}
          />
          <Link as={linkAs} href={linkTo}>
            <a className={css.item__link}>{nData.title}</a>
          </Link>

          <p className={css.item__due}>
            {nData.due ? 'Klárast fyrir:' : ''}
            {nData.due}
          </p>
        </div>
      )}
      {loading && <p className={css.item}>Loading...</p>}
    </li>
  );
}
