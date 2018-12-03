import styled from "styled-components";

const OrderItemStyles = styled.div`
  list-style: none;

  border: 1px solid ${props => props.theme.offWhite};
  /* box-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);
    list-style: none;
   
    border: 1px solid #EDEDED; */
  display: inline-block;
  width: 100%;
  a {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
  }
  .list {
    list-style: none;
  }
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  .div-sec {
    display: inline-block;
    width: 100%;
    margin-left: 10px !important;
    p {
      margin: 0px !important;
      float: left;
      width: 32%;
    }
  }
  .div-fir {
    display: inline-block;
    width: 100%;
    padding: 0;
    height: 40px;
    p {
      &:first-child {
        width: 30%;
        float: left;
        font-weight: 700;
        margin-left: 10px;
      }
      margin-right: 10px;
    }
  }
  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
      border-radius: 0%;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 4px;
    }
  }
  .order-meta {
    vertical-align: middle;
    display: inline-block;
    width: 100%;

    & > * {
      margin: 0;

      float: left;

      /* border: 1px solid rgba(0,0,0,0.03); */
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderItemStyles;
