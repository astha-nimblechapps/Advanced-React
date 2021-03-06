import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    padding: 0px;
    margin-top: 2px;
  }
  a{
    color: #000;
  }
  img{
    height: 80px;
    width:80px;
    border-radius: 0px;
  }
  input,
  textarea,
  select {
    height:28px;
    width: 100%;
    padding: 0.5rem;
    font-size: 13px;
    border: 1px solid black;
    margin-bottom: 6px;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    margin-top: 10px;
    background: #393939;
    color: white;
    
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  
   
  }
`;

export default Form;
