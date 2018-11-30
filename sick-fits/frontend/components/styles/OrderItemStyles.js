import styled from 'styled-components';

const OrderItemStyles = styled.div`
  box-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);
    list-style: none;
   
    border: 1px solid #EDEDED;
    display: inline-block;
    width: 100%;
    a{
      display: inline-block;
    vertical-align: middle;
    width:100%;
    height:148px;
    }
  .list{
    list-style: none;
  }
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
.div-sec{
  p{
    margin: 0px !important;
  }
}
  .div-fir{
    display: inline-block;
    width: 100%;
    padding: 0;
    height:40px;
    p{
      &:first-child{
        width: 30%;
      float: left;
      }
      margin-right: 10px;
    }
  }
  .images {
    width: 19%;
    float:left;
    img {
      object-fit: cover;
      height:148px;
    width: 100%;
    border-radius: 0;
    display: inline-block;
    }
  }
  .order-meta {
    vertical-align: middle;
    display: inline-block;
    width:81%;
    p{
      &:first-child{
        font-weight:700;
      }
    }
    & > * {
      margin: 0;
   
    padding: 1rem 0;
    float: left;
    margin-left: 10px;
    /* border: 1px solid rgba(0,0,0,0.03); */
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderItemStyles;
