import React, { useState } from 'react';

import css from './TodoItem.css';
// Verkefni í lista á forsíðu
export default function todoItem(props) {
  const { data } = props;
  console.log(data);
  return (
    <li className={css.item}>
      <input
        type="radio"
        className={css.item__input}
        checked={data.completed}
      />
      <h3 className={css.item__link}>{data.title}</h3>
      <p className={css.item__due}>{data.due}</p>
    </li>
  );
}
