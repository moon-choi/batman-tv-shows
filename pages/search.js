import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Search = (props) => {
  const { query } = useRouter();

  return (

    <p>{query.keyword}</p>

  );
};

export default Search;


/*
Cesar's hack

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