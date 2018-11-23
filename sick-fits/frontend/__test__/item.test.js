import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "ABC",
  title: "Demo",
  description: "This item is fake",
  image: "dog.jpg",
  largeImage: "dogL.jpg",
  price: 5000
};

describe("<IIem/>", () => {
  it("renders and match snapshot ", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

// describe("<Item/>", () => {
//   it("render and diaply", () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const priceTag = wrapper.find("PriceTag");
//     //priceTag.dive().text() && priceTag.children().text() return same value $50
//     //console.log(priceTag.children().text());
//     expect(priceTag.children().text()).toBe("$50");
//     expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
//   });

//   it("render image", () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const img = wrapper.find("img");
//     expect(img.props().src).toBe(fakeItem.image);
//     expect(img.props().alt).toBe(fakeItem.title);
//   });

//   it('button render',() => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const buttonList = wrapper.find('.buttonList')
//     //console.log(buttonList.children())
//     expect(buttonList.children()).toHaveLength(3);
//     expect(buttonList.find('Link')).toHaveLength(1);
//     expect(buttonList.find('Link').exists()).toBe(true);
//     expect(buttonList.find('Link')).toBeTruthy();

//     expect(buttonList.find('AddCart')).toHaveLength(1);
//     expect(buttonList.find('AddCart').exists()).toBe(true);
//     expect(buttonList.find('AddCart')).toBeTruthy();

//     expect(buttonList.find('DeleteItem')).toHaveLength(1);
//     expect(buttonList.find('DeleteItem').exists()).toBe(true);
//     expect(buttonList.find('DeleteItem')).toBeTruthy();
//   })
// });
