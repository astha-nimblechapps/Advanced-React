import ResetPassword from '../components/ResetPassword';

const resetPassword = props => (
    
    <ResetPassword resetToken={props.query.resetToken}/>
)

export default resetPassword;