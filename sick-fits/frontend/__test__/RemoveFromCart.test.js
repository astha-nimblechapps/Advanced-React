import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloConsumer } from 'react-apollo';
import RemoveFromCart, { REMOVE_ITEM } from '../components/RemoveFromCart';
import { LOGGED_USER } from '../components/User';
import { fakeUser, fakeCartItem } from '../lib/testUtils';


global.alert = console.log;

const mocks = [
  {
    request: { query: LOGGED_USER },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItem({ id: 'abc' })],
        },
      },
    },
  },
  {
    request: { query: REMOVE_ITEM, variables: { id: 'abc' } },
    result: {
      data: {
        removeFromCart: {
          __typename: 'CartItem',
          id: 'abc',
        },
      },
    },
  },
];

describe('<RemoveFromCart/>', () => {
    it('renders and matches', async () => {
      const wrapper = mount(
        <MockedProvider>
          <RemoveFromCart id="abc123" />
        </MockedProvider>
      );
      expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
    });

    it('removes item', async () => {
        let apolloClient;
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <ApolloConsumer>
              {client => {
                apolloClient = client;
                return <RemoveFromCart id="abc" />;
              }}
            </ApolloConsumer>
          </MockedProvider>
        );
        const res = await apolloClient.query({ query: LOGGED_USER });
        //console.log(res)
        expect(res.data.me.cart).toHaveLength(1);
        expect(res.data.me.cart[0].item.price).toBe(5000);
        wrapper.find('button').simulate('click');
        await wait();
        const res2 = await apolloClient.query({ query: LOGGED_USER });
        expect(res2.data.me.cart).toHaveLength(0);
      });
  });
  
