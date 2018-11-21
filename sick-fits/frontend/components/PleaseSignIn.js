import {Query} from 'react-apollo';
import { LOGGED_USER } from './User';
import SignIn from './SignIn';

const PleaseSignIn = (props) => (
    <Query query={LOGGED_USER}>
        {
            ({data,loading}) => {
          
                if(loading) return <p>Loading....</p>
                if(!data.me){
                    return(
                        <div>
                            <p>Please SignIn To Continue </p>
                            <SignIn></SignIn>
                        </div>
                    )
                }
                return props.children
            }
        }
    </Query>
    // <p>Please Sign In </p>
);

export default PleaseSignIn;