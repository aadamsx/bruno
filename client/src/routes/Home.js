import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// const Home = ({ data: { loading, allUsers } }) => (loading ? null : allUsers.map(u => <h1 key={u.id}>{u.email}</h1>));

const allUsersQuery = gql`
  {
    allUsers {
      id,
      email
    }
  }
`;

const render = ({ loading, error, data }) => {
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);
  console.log(data);
  return (
    <Fragment>
      {
        data.allUsers.map(u => (
          <h1 key={u.id}>{u.email}</h1>
        ))
      }
    </Fragment>
  );
};

// export default graphql(allUsersQuery)(Home);
export default () => (
  <Query query={allUsersQuery}>{render}</Query>
);
