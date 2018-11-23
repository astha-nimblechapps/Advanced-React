import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import NProgress from 'nprogress';
import Router from 'next/router';
import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloConsumer } from 'react-apollo';
import Payment, { CREATE_ORDER } from '../components/Payment';
import { LOGGED_USER } from '../components/User';
import { fakeUser, fakeCartItem } from '../lib/testUtils';

Router.router = { push() {} };

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
];

describe('<Payment/>',() =>{

    it('renders and matches', async () => {
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <Payment />
          </MockedProvider>
        );
        await wait();
        wrapper.update();
        const checkoutButton = wrapper.find('ReactStripeCheckout');
        expect(toJSON(checkoutButton)).toMatchSnapshot();
      });

      it('create order', async () => {
        const createOrderMock = jest.fn().mockResolvedValue({
          data: { createOrder: { id: 'xyz789' } },
        });
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <Payment />
          </MockedProvider>
        );
        const component = wrapper.find('Payment').instance();
        
        component.onToken({ id: 'abc123' }, createOrderMock);
        expect(createOrderMock).toHaveBeenCalled();
        expect(createOrderMock).toHaveBeenCalledWith({ variables: { token: 'abc123' } });
      }); 
      it('turns on progress', async () => {
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <Payment />
          </MockedProvider>
        );
        await wait();
        wrapper.update();
        NProgress.start = jest.fn();
        const createOrderMock = jest.fn().mockResolvedValue({
          data: { createOrder: { id: 'xyz789' } },
        });
        const component = wrapper.find('Payment').instance();
        
        component.onToken({ id: 'abc123' }, createOrderMock);
        expect(NProgress.start).toHaveBeenCalled();
      });
    
      it('order page complete', async () => {
        const wrapper = mount(
          <MockedProvider mocks={mocks}>
            <Payment />
          </MockedProvider>
        );
        await wait();
        wrapper.update();
        const createOrderMock = jest.fn().mockResolvedValue({
          data: { createOrder: { id: 'xyz789' } },
        });
        const component = wrapper.find('Payment').instance();
        Router.router.push = jest.fn();
        
        component.onToken({ id: 'abc123' }, createOrderMock);
        await wait();
        expect(Router.router.push).toHaveBeenCalled();
        expect(Router.router.push).toHaveBeenCalledWith({
          pathname: '/order',
          query: {
            id: 'xyz789',
          },
        });
      });

});