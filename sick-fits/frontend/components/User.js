import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const LOGGED_USER = gql`
  query {
    me {
      id
      email
      name
      permissions
      cart{
        id
        quantity
        item{
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

const User = props => (
  <Query {...props} query={LOGGED_USER}>
    {payload => props.children(payload)}
  </Query>
);

User.PropTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { LOGGED_USER };
