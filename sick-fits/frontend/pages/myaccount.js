import MyAccount from '../components/MyAccount'
import PleaseSignIn from "../components/PleaseSignIn";
const myAccount = props =>(
    <div>
         <PleaseSignIn>
        <MyAccount/>
        </PleaseSignIn>
    </div>
)

export default myAccount;