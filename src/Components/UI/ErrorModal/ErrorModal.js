import styled from "styled-components";
import Button from "../Button/Button";

const Modal = styled.div`

  display: ${props=>props.show?'block':'none'};

  & .modal-card{
    display:block;
    position:absolute;
    background: white;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:550px;
    border-radius:0.5rem;
    box-shadow:1px 1px 12px 1px rgba(0,0,0,0.1);
    overflow:hidden;
    padding-bottom:10px;
    z-index:1000;
  }

  &::before{
    content:"";
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    top:0;
    left: 0;
  }

  & .modal-header{
    background: rgb(137, 42, 182);
    box-sizing:border-box;
    padding: 15px;
    color:white;
    font-weight:bold;
    font-size:1.1rem;
  }

  & .modal-header .modal-header__title{
    padding: 0;
    margin: 0;
  }

  & .modal-body{
    padding: 15px;
  }

  & .modal-footer{
    padding: 15px;
  }

  & .modal-footer .modal-footer__button{
    float:right;
    background: rgb(137, 42, 182);
    color:white;
  }
`;

const ErrorModal = props=>{
  return(
    <Modal show={props.show}>
      <div className="modal-card">
        <div className="modal-header">
          <p className="modal-header__title">{props.title}</p>
        </div>
        <div className="modal-body">
          <p className="modal-body__content">{props.content}</p>
        </div>
        <div className="modal-footer">
            <Button className="modal-footer__button" type="button" value={props.buttonText} onClick={props.onHideErrorModal}/>
        </div>
      </div>

    </Modal>
  )
}

export default ErrorModal;