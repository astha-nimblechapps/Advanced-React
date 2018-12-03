import styled from "styled-components";

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 0px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  padding: 2rem;
  border-top: 10px solid #393939;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
    }
  & > p {
    grid-template-columns: 0fr 0fr;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.offWhite};
    label {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .items{
    margin:10px;
  }
  .item-details {
    float: left;
    width: 70%;
    margin-left: 20px;
    display: grid;
    p {
      margin: 0px;
    }
    label {
      font-size: 11px;
      padding: 0px;
      font-weight: 600;
    }
  }
  .order-item {
    display: inline-block;
    div {
      &:first-child {
        width: 20%;
        float: left;
        height: 30%;
      }
    }
    img {
      width: 100%;

      object-fit: cover;
      border-radius: 0;
    }
  }
`;
export default OrderStyles;
