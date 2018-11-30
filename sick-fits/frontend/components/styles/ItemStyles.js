import styled from "styled-components";

const Item = styled.div`
  /* background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs}; */
  position: relative;
  display: flex;
  flex-direction: column;
  .card {
    position: relative;
    overflow-x : hidden;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  /* p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  } */
  .customDiv {
    display: inline-block;
    border-top: 1px solid #e1e1e1;
  }
  .buttonList {
    text-align: center;
    width: 100%;
    float: left;
    display: flex;
    > *{
      flex : 1
    }
    .button {
      line-height: 2.6;
      border: 1px solid #393939;
      font-size: 1.5rem;
      color : #393939;
      font-weight: bold;
    }
    .button:first-of-type{
      border-bottom-left-radius : 6px;
    }
    .button:last-of-type{
      border-bottom-right-radius : 6px;
    }
  }
  .cartBtn {
    border: none;
    width: 70%;
    text-align: center;
    font-family: none;
  }
  .delBtn {
    width: 100%;
    border: 1px solid;
    text-align: center;
    font-family: none;
  }
`;

export default Item;
