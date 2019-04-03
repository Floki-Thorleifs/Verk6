/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  /* todo */
}

export async function addTodo(title, due) {
  /* todo */
}

export async function updateTodo(id, { title, completed, due } = {}) {
  /* todo */
}

export async function getTodos(hideCompleted = undefined) {
  /* todo */
  const response = await fetch(apiUrl);

  return await response.json();
}

export async function getTodo(id) {
  /* todo */
}
