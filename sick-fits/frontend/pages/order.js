import Order from '../components/Order'
import PleaseSignIn from '../components/PleaseSignIn'

const order = props => (
    <div>
        <PleaseSignIn>
            <Order id={props.query.id}></Order>
        </PleaseSignIn>
    </div>
);

export default order;