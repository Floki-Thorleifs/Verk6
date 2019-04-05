/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  const newUrl = new URL(id, apiUrl);
  const response = await fetch(newUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  });

  return await response.json();
}

export async function addTodo(title, due) {
  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ title, due })
  });

  return await response.json();
}

export async function updateTodo(id, { title, completed, due } = {}) {
  console.log(id, completed);
  const newUrl = new URL(id, apiUrl);
  const response = await fetch(newUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({ completed })
  });

  return await response.json();
}

export async function getTodos(hideCompleted = undefined) {
  if (hideCompleted) {
    const newUrl = new URL(`${apiUrl}?completed=false`);
    const response = await fetch(newUrl);
    return await response.json();
  }
  const response = await fetch(apiUrl);
  return await response.json();
}

export async function getTodo(id) {
  const newUrl = new URL(id, apiUrl);
  const response = await fetch(newUrl.href);
  return response.json();
}
