// import logo from './logo.svg';
import CourseInput from './Components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './Components/CourseGoals/CourseGoalList/CourseGoalList';
import './Styles/App.css';
import { useState } from 'react';
import { v4 as generateKey } from 'uuid';

function App() {
  const [GoalList,SetGoalList] = useState([]);

  const saveDeletedGoalHandler= GoalID=>{
    SetGoalList(prevState=>{
      return[
        ...prevState.filter(item=>item.id!==GoalID)
      ]
    })
  }

  const saveGoalItemHandler = goalTitle=>{
    SetGoalList(prevState=>{
      return[
        {
          id: generateKey(),
          title:goalTitle
        },
        ...GoalList
      ]
    })
  }
  return (
    <div>
      <CourseInput onSaveGoalItem={saveGoalItemHandler}/>
      <CourseGoalList GoalList={GoalList} onSaveDeletedGoal={saveDeletedGoalHandler}/>
    </div>
  )
}

export default App;
