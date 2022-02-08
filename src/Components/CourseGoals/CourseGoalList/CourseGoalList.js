import styled from "styled-components";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const Goals = styled.ul`
  width: 550px;
  margin: 0 auto;
  padding: 0;
`;

const CourseGoalList =props=>{
  const GoalList= props.GoalList;

  const saveItemKeyHandler= itemID=>{
    props.onSaveDeletedGoal(itemID);
  }

  return(
    <Goals>
      {
        GoalList.map(goal=>{
            return <CourseGoalItem 
            key={goal.id} 
            id={goal.id} 
            goalItem={goal.title} 
            onSaveItemKey={saveItemKeyHandler}  
            />
          })
      }
    </Goals>
  )
}

export default CourseGoalList;