import { mount } from 'enzyme';
import wait from 'waait';
import PleaseSignIn from '../components/PleaseSignIn';
import { LOGGED_USER } from '../components/User'
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser } from '../lib/testUtils';

const notSignIn =  [{
    request:{
        query: LOGGED_USER,
    },
    result:{
       data: { me : null, }, 
    },
}]

const signIn =  [{
    request:{
        query: LOGGED_USER,
    },
    result:{
       data: { me : fakeUser(), }, 
    },
}]

describe('<PleaseSignIn/>',() => {
    
    it('renders sign in',async () =>{
        const wrapper = mount(
            <MockedProvider mocks={notSignIn}>
                <PleaseSignIn></PleaseSignIn>
            </MockedProvider>
        );
        
        await wait();
        wrapper.update();
        expect(wrapper.text()).toContain('Please SignIn To Continue');
        expect(wrapper.find('SignIn').exists()).toBe(true)
        //console.log(wrapper.debug());
    })

    it('signed in test',async () =>{

        const hey = () => <p>Hey..!!!</p>
        const wrapper = mount(
            <MockedProvider mocks={signIn}>
                <PleaseSignIn><hey></hey></PleaseSignIn>
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.contains(<hey/>)).toBe(true)
        //console.log(wrapper.debug())
    })

});