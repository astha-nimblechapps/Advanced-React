import Nav from './Nav'
import styled from 'styled-components';
import Link from 'next/link';

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
            <Logo>
                <Link href="/"> 
                    <a>
                        Demo
                    </a> 
                </Link>
            </Logo>
            <Nav/>
        </div>
        <div className="sub-bar">
            <p> Search Here
            </p>
        </div>
    </StyledHeader>
);

export default Header;