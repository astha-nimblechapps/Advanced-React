import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles'
import NProgress from 'nprogress';
import Router from 'next/router';
import User from './User';
import SignOut from './SignOut';

Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  
  Router.onRouteChangeError = () => {
    NProgress.done();
  };
  
const NavDiv = styled.div`
    margin-left: 10px;
`;

const Nav = () => (
    
        <User>
      {({ data: { me } }) => (
          <NavStyles>
              {
                  me && (
                    <Link href='/'>
                    <a> {me.name}</a>
                    </Link>
                  )
              }
            <Link href='/items'>
                <a> Item </a>
            </Link>
            {
                me && (
                    <>
                <Link href='/sell'>
                    <a> Sell </a>
                </Link>
                <SignOut>

                </SignOut>
                </>
                )
            }
            {
                !me && (
                    <Link href='/singup'>
                    <a> Signup </a>
                </Link>
                )
            }
           
          </NavStyles>
      )}
    </User>
);

export default Nav;