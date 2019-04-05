import React, { useState, useEffect } from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import TodoDetail from '../components/todo-detail/TodoDetail';

import { getTodo, deleteTodo, updateTodo } from '../api';

export default function Home(props) {
  const { id, data } = props;

  if (!data) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title={data.title}>
      <TodoDetail
        data={data}
        id={id}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </Layout>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { id } = query;

  const data = await getTodo(id);

  return {
    id,
    data
  };
};
