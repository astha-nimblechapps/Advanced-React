import {Query} from 'react-apollo';
import { LOGGED_USER } from './User';
import SignIn from './SignIn';
import { Typography } from '../lib/exim-component';

const PleaseSignIn = (props) => (
    <Query query={LOGGED_USER}>
        {
            ({data,loading}) => {
          
                if(loading) return <p>Loading....</p>
                if(!data.me){
                    return(
                        <div>
                            <Typography>Please SignIn To Continue </Typography>
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