import { mount } from "enzyme";
import toJSON from 'enzyme-to-json';
import wait from "waait";
import Nav from "../components/Nav";
import { LOGGED_USER } from "../components/User";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeUser, fakeCartItem } from "../lib/testUtils";

const notSignIn = [
  {
    request: {
      query: LOGGED_USER
    },
    result: {
      data: { me: null }
    }
  }
];

const signIn = [
  {
    request: {
      query: LOGGED_USER
    },
    result: {
      data: { me: fakeUser() }
    }
  }
];

const signedInMocksWithCartItems = [
    {
      request: { query: LOGGED_USER },
      result: {
        data: {
          me: {
            ...fakeUser(),
            cart: [fakeCartItem(), fakeCartItem(), fakeCartItem()],
          },
        },
      },
    },
  ];

describe("<Nav/>", () => {
  it("render signed out nav ", async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignIn}>
        <Nav />
      </MockedProvider>
    );

    await wait();
    wrapper.update();
   // console.log(wrapper.debug());
    expect(toJSON(wrapper.find('[data-test="nav"]'))).toMatchSnapshot();
  });

  it("render signed in nav",async () =>{
    const wrapper = mount(
        <MockedProvider mocks={signIn}>
          <Nav />
        </MockedProvider>
      );

      await wait();
    wrapper.update();
    //console.log(wrapper.debug());
    const nav = wrapper.find('ul[data-test="nav"]');
    expect(nav.children().length).toBe(6);
    expect(nav.text()).toContain('Sign Out');
  });

  it('renders the amount of items in the cart', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocksWithCartItems}>
        <Nav />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
   
    const nav = wrapper.find('[data-test="nav"]');
    //console.log(nav.debug());
    const count = nav.find('div.count');
    expect(toJSON(count)).toMatchSnapshot();
  });
});
