import styled from "styled-components";

const SubmitButton = styled.button`
  background-color:aqua;
  padding:8px 20px;
  outline:none;
  border:none;
  font-size:1.1rem;
  background-color:orange;
  cursor:pointer;
`

const Button= props=>{
  return(
    <SubmitButton className={props.className} type={props.type} onClick={props.onClick}>
      {props.value}
    </SubmitButton>
  )
}

export default Button;