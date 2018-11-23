import CartCountComponent from "../components/CartCount";
import { shallow, mount } from "enzyme";
import toJSON from 'enzyme-to-json';

describe('<CartCount/>',() => {
    it('renders',() =>{
        shallow(<CartCountComponent count={10}/>)
    });

    it('match snapshot',() => {
        const wrapper = shallow(<CartCountComponent count={10}/>)
        expect(toJSON(wrapper)).toMatchSnapshot()
    });

    /**
     * Shallow() will go one level deep testing
     * Mount() will test browser environment
     */

    it('updates props', () => {
        const wrapper = shallow(<CartCountComponent count={50}/>)
        expect(toJSON(wrapper)).toMatchSnapshot()
        wrapper.setProps({ count: 10 });
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
});