import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles'
import NProgress from 'nprogress';
import Router from 'next/router';

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
    <NavStyles>
        <Link href='/items'>
            <a> Item </a>
        </Link>
        <Link href='/sell'>
            <a> Sell </a>
        </Link>
        <Link href='/'>
            <a> Signup </a>
        </Link>
    </NavStyles>
);

export default Nav;