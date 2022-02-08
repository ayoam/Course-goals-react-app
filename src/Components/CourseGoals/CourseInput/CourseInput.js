import { useState } from 'react';
import styled from 'styled-components';
import Button from "../../UI/Button/Button";
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const MainForm = styled.form`
  width:500px;
  box-shadow:1px 1px 12px 1px rgba(0,0,0,0.1);
  box-sizing:border-box;
  padding:20px;
  margin:50px auto;
  border-radius:0.5rem;

  & .course-input__title{
    font-weight:bold;
    font-size:1.1rem;
    margin-bottom:10px;
  }

  & .course-input__controls>input{
    width: 100%;
    border-radius:0;
    outline: none;
    border: 1px solid ${props=>props.invalid? 'red':'rgba(0,0,0,0.2)'};
    background-color: ${props=>props.invalid? 'rgba(255, 0, 0, 0.212)':''};;
    height:30px;
    box-sizing:border-box;
    padding:0 5px;
  }

  & .course-input__controls>input:focus{
    background-color: rgba(207, 137, 45, 0.1);
  }

  & .course-input__actions{
    margin: 10px 0;
  }
`;


const CourseInput= props=>{
  const [enteredTitle,SetEneteredTitle] = useState('');
  const [isValid,SetIsValid] = useState(true);
  const [showErrorModal,SetShowErrorModal] = useState(false);

  const hideErrorModalHandler = ()=>{
    SetShowErrorModal(false);
  }

  const titleChangeHandler = e =>{
    SetIsValid(true);
    SetEneteredTitle(e.target.value);
  }
  const formSubmitHandler = e =>{
    e.preventDefault();
    if(enteredTitle.trim()===''){
      SetIsValid(false);
      SetShowErrorModal(true);
      return;
    }
    SetEneteredTitle('');
    props.onSaveGoalItem(enteredTitle);
  }

  return(
    <MainForm onSubmit={formSubmitHandler} invalid={!isValid}>
      <p className="course-input__title">Course Goal</p>
      <div className="course-input__controls">
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
      </div>
      <div className="course-input__actions">
        <Button type="submit" value="Add Goal"/>
      </div>
      <ErrorModal title="Input Invalid"
       content="input shoudn't be empty!"
        buttonText="Okay"
        show={showErrorModal}
        onHideErrorModal={hideErrorModalHandler}/>
    </MainForm>
  )
}

export default CourseInput;