import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Search = (props) => {
  const { query } = useRouter();

  return (
    <Layout>
      <p>Your search keyword is: {query.keyword}</p>
    </Layout>
  );
};

export default Search;


/*
Cesar's hack
http://localhost:3000/search?keyword=cesar


export default function Items(props) {
  const { query } = useRouter();

  return (
    <div>
      <h1>Items page</h1>
      <p>{query.name}</p>
    </div>
  );
}
*/