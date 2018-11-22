import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { TOOGLE_CART, LOCAL_STATE } from '../components/Cart';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    clientState:{
      resolvers: {
        Mutation:{
          toogleCart(_,variables, {cache}){
            const {cartOpen} = cache.readQuery({
              query: LOCAL_STATE,
            });
            console.log(cartOpen);
            const data = {
              data: { cartOpen: !cartOpen },
            }
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
      }
    }
  });
}

export default withApollo(createClient);
