import styled from 'styled-components';

const Card = styled.div`
 
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: #929398;
  padding: 1rem;
  color: white; 
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border: solid black 1px;
`;



const Error = styled.div`
  color:red;
  padding : 1em;
  font-style:italic;
`;

export { Form, Input, Button, Card, Error };