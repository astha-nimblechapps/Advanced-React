import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import Cart, { LOCAL_STATE } from '../components/Cart';
import { LOGGED_USER } from '../components/User';
import { fakeUser, fakeCartItem } from '../lib/testUtils';

const mocks = [
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
      request: { query: LOCAL_STATE },
      result: { data: { cartOpen: true } },
    },
  ];

  describe('<Cart/>', () => {
    it('renders and matches', async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Cart />
        </MockedProvider>
      );
      await wait();
      wrapper.update();
      expect(toJSON(wrapper.find('header'))).toMatchSnapshot();
      expect(wrapper.find('CartItem')).toHaveLength(1);
    });
  });