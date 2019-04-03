import React, { useState, useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Form from '../components/form/Form';

import { getTodos, updateTodo } from '../api';

export default function Home(props) {
  const { initialData } = props;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  async function onFetchNewData(other) {
    setLoading(true);
    const newData = await getTodos(other);
    setData(newData);
    setLoading(false);
  }

  return (
    <Layout title="Gögn">
      <Data loading={loading} data={data} onFetchNewData={onFetchNewData} />
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  const data = await getData();

  return { initialData: data };
};
