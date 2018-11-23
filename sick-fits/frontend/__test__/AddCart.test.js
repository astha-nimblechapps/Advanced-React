import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloConsumer } from 'react-apollo';
import AddCart, { ADD_TO_CART } from '../components/AddCart';
import { LOGGED_USER } from '../components/User';
import { fakeUser, fakeCartItem } from '../lib/testUtils';


const mocks = [
    {
      request: { query: LOGGED_USER },
      result: {
        data: {
          me: {
            ...fakeUser(),
            cart: [],
          },
        },
      },
    },
    {
      request: { query: LOGGED_USER },
      result: {
        data: {
          me: {
            ...fakeUser(),
            cart: [fakeCartItem()],
          },
        },
      },
    },
    {
      request: { query: ADD_TO_CART, variables: { id: 'abc' } },
      result: {
        data: {
          addToCart: {
            ...fakeCartItem(),
            quantity: 1,
          },
        },
      },
    },
  ];


  describe('<AddToCart/>', () => {
    it('renders and matches', async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <AddCart id="abc" />
        </MockedProvider>
      );
      await wait();
      wrapper.update();
      expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
    });
  
    it('adds item in cart', async () => {
        let apolloClient;
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <ApolloConsumer>
              {client => {
                apolloClient = client;
                return <AddCart  id="abc" />;
              }}
            </ApolloConsumer>
          </MockedProvider>
        );
        await wait();
        wrapper.update();
        const { data: { me } } = await apolloClient.query({ query: LOGGED_USER });
        // console.log(me);
        expect(me.cart).toHaveLength(0);
  
        wrapper.find('button').simulate('click');
        await wait();
    
        const { data: { me: obj } } = await apolloClient.query({ query: LOGGED_USER });
        //console.log(obj);
        expect(obj.cart).toHaveLength(1);
        expect(obj.cart[0].id).toBe('omg123');
        expect(obj.cart[0].quantity).toBe(3);
      });

      it('change add to adding', async () => {
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <AddCart id="abc" />
          </MockedProvider>
        );
        await wait();
        wrapper.update();
        //console.log(wrapper.debug())
        expect(wrapper.text()).toContain('AddTo Cart');
        wrapper.find('button').simulate('click');
        expect(wrapper.text()).toContain('AddingTo Cart');
      });
    
  });
  