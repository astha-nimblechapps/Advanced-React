import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { LOGGED_USER } from './User';

const SIGNOUT = gql`
    mutation SIGNOUT{
        signout{
            message
        }
    }
`;

const SignOut = props => (
    <Mutation mutation={SIGNOUT} refetchQueries={[
        {
            query: LOGGED_USER
        }
    ]}>
        {
            (signout,{error,loading}) => <button onClick={signout}>Sign Out</button>
        }
    </Mutation>
    
)

export default SignOut;