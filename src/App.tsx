import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import Stars from './components/Stars/Stars';
import './App.css';
import Listing from './components/offersList/Listing';
import data from "./components/offersList/etsy.json";
import MessageHistory from './components/chat/MessageHistory';
import messages from './components/chat/data';

function App() {
  let [ curTask, setCurTask ] = useState('STARS');
  const tasks = [
    { taskName: 'STARS', solving: <Stars count={1} key={'STARS'} />},
    { taskName: 'OFFERSLIST', solving: <Listing items={data} key={'OFFERSLIST'} /> },
    { taskName: 'CHAT', solving: <MessageHistory list={messages} key={'CHAT'} />}
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App;
