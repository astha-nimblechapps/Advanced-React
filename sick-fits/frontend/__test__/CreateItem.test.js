import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import CreateItem, { ADD_ITEMS } from '../components/CreateItem';
import Router from 'next/router';
import { fakeItem } from '../lib/testUtils';

const demImage = 'https://dog.com/dog.jpg';

global.fetch = jest.fn().mockResolvedValue({
    json: () => ({
        secure_url: demImage,
        eager: [{ secure_url: demImage }],
    }),
});


describe('<CreateItem/>',() => {

    it('render and matches',async () =>{
        const wrapper = mount(
            <MockedProvider>
                <CreateItem/>
            </MockedProvider>
        )
        const form =  wrapper.find('form[data-test="form"]');
        expect(toJSON(form)).toMatchSnapshot();
    })

    it('upload files', async() => {
        const wrapper = mount(
            <MockedProvider>
                <CreateItem/>
            </MockedProvider>
        )
        const input = wrapper.find('input[type="file"]')
        input.simulate('change',{ target: { files: ['fakedog.jpg'] } })
        await wait();
        wrapper.update();
        const componet = wrapper.find('CreateItem').instance();
        //console.log(componet);
        expect(componet.state.image).toEqual(demImage);
        expect(componet.state.largeImage).toEqual(demImage);
        expect(global.fetch).toHaveBeenCalled();
        //expect(global.fetch).toHaveBeenCalledWith('abc');
        global.fetch.mockReset();
    });

    it('handles state update',async() =>{
        const wrapper = mount(
            <MockedProvider>
                <CreateItem/>
            </MockedProvider>
        )
        wrapper.find('#title').simulate('change',{ target :{ value:'Testing', name:'title' } })
        wrapper.find('#price').simulate('change',{ target :{ value: 5000, name:'price', type: 'number' } })
        wrapper.find('#description').simulate('change',{ target :{ value:'Testing', name:'description' } })

        expect(wrapper.find('CreateItem').instance().state).toMatchObject({
            title:'Testing',
            price: 5000,
            description: 'Testing',
        })
    })

    it('create item', async () =>{
        const item = fakeItem();

        const mocks= [{
            request:{
                query: ADD_ITEMS,
                variables: { 
                    price: item.price,
                    title: item.title,
                    description: item.description,
                    image: '',
                    largeImage: ''
                }
            },
            result:{
                data:{
                    createItem:{
                        ...fakeItem(),
                        __typeName: 'Item',
                    }
                }
            },
        }]

        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <CreateItem/>
            </MockedProvider>
        );

        wrapper.find('#title').simulate('change',{ target :{ value: item.title, name:'title' } })
        wrapper.find('#price').simulate('change',{ target :{ value: item.price, name:'price', type: 'number' } })
        wrapper.find('#description').simulate('change',{ target :{ value: item.description, name:'description' } })

        Router.router = {
            push: jest.fn()
        };

        wrapper.find('form').simulate('submit');

        await wait(50);

        expect(Router.router.push).toHaveBeenCalled();

    })

});