import faunadb from 'faunadb';

const client = new faunadb.Client({
  secret: process.env.REACT_APP_DB_KEY,
  domain: 'db.fauna.com',
  scheme: 'https',
});

const q = faunadb.query;

export { client, q };