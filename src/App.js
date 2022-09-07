import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [tasks,setTasks]=useState([])
  const [labelInput,setLabelInput]=useState('')
  return (
    <div className="app">
      <div className="input-container">
        <input className='label-input' onChange={(event)=>{
          setLabelInput(event.currentTarget.value)
        }}value={labelInput}/>
        <button className="add-button" onClick={()=>{
          setTasks([{checked:false,label:labelInput},...tasks])
          setLabelInput("")
        }}>追加</button>
      </div>

      <div className="task-list">
        {
          tasks.map((task)=>{
            return (
              <div className={task.checked?'task checked':'task'}>
                <input type="checkbox" checked={task.checked} onChange={(event)=>{
                  task.checked=event.currentTarget.checked
                  console.log(event.currentTarget.checked)
                  console.log(task)
                  tasks.sort((a,b)=>{
                    if(a.checked === b.checked){
                      return 0
                    }
                    if(a.checked){
                      return 1
                    }
                    return -1
                  })
                  setTasks([...tasks])
                }}/>
                <div className="task-label">{task.label}</div>
                <button onClick={()=>{
                  const index =tasks.indexOf(task)
                  tasks.splice(index,1)
                  setTasks([...tasks])
                }}>×</button>
              </div>
            )
          })
        }
        
        

      </div>
    </div>
  );
}

export default App;
