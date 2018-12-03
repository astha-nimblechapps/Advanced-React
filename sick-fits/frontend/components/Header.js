import Nav from './Nav'
import styled from 'styled-components';
import Link from 'next/link';
import Cart from './Cart';
import Search from './Search'
import { ButtonLink, Brand, Color } from '../lib/exim-component';

const Logo = styled.div`
    font-size: 2.3rem;
    margin-left: 2rem;
    margin-bottom: 2px;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a{
        padding: 0.5rem 1rem;
        background: ${ props => props.theme.black };
        color: white;
        text-decoration: none;
        text-transform:uppercase;
    }
    @media (max-width: 1300px) {
        margin: 0px;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 3px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () =>(
    <StyledHeader>
       
        <div className="bar ">
           
            <Brand logo={true} style="dark" href="/"> Demo </Brand>
                {/* <ButtonLink href="/">
                   Demo
                </ButtonLink> */}
       
            <Nav/>
        </div>
        <div className="sub-bar">
           <Search/>
        </div>
        <Cart></Cart>
    </StyledHeader>
);

export default Header;