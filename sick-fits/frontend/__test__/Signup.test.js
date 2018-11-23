import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloConsumer } from 'react-apollo';
import Signup, { SIGNUP } from '../components/Signup';
import { LOGGED_USER } from '../components/User';
import { fakeUser } from '../lib/testUtils';

function type(wrapper, name, value) {
    wrapper.find(`input[name="${name}"]`).simulate('change', {
      target: { name, value },
    });
  }

const me = fakeUser();
const mocks = [
  // signup mock mutation
  {
    request: {
      query: SIGNUP,
      variables: {
        name: me.name,
        email: me.email,
        password: 'demo',
      },
    },
    result: {
      data: {
        signup: {
          __typename: 'User',
          id: '1234',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  // current user query mock
  {
    request: { query: LOGGED_USER },
    result: { data: { me } },
  },
];


describe('<Signup/>', () => {
    it('renders and matches', async () => {
      const wrapper = mount(
        <MockedProvider>
          <Signup />
        </MockedProvider>
      );
      expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
    });

    it('sign up', async () => {
        let apolloClient;
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <ApolloConsumer>
              {client => {
                apolloClient = client;
                return <Signup  />;
              }}
            </ApolloConsumer>
          </MockedProvider>
        );
        await wait();
        wrapper.update();
        type(wrapper, 'name', me.name);
        type(wrapper, 'email', me.email);
        type(wrapper, 'password', 'demo');
        wrapper.update();
        wrapper.find('form').simulate('submit');
        await wait();
        const user = await apolloClient.query({ query: LOGGED_USER });
        expect(user.data.me).toMatchObject(me);
      });
  });
  
