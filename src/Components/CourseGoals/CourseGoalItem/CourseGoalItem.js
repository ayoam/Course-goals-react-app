import styled from "styled-components";

const Goal = styled.li`
  display:block;
  width:100%;
  background: orange;
  box-sizing:border-box;
  padding: 15px 30px;
  font-size:1.1rem;
  box-shadow:1px 1px 12px 1px rgba(0,0,0,0.1);
  margin-bottom:10px ;
  cursor:pointer;
`;

const CourseGoalItem = props=>{

  const GoalItemClickHandler = ()=>{
    props.onSaveItemKey(props.id)
  }

  return(
    <Goal onClick={GoalItemClickHandler}>
      {props.goalItem}
    </Goal>
  )
}

export default CourseGoalItem;