import Permission from '../components/Permission'
import PleaseSignIn from '../components/PleaseSignIn'

const permission = props => (
    <div>
        <PleaseSignIn>
           <Permission></Permission>
        </PleaseSignIn>
    </div>
);

export default permission;