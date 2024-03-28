import React, { useState } from 'react'

function Intro() {
    const [tasks, setTasks] = useState([])
    const [open, setOpen] = useState(false)

    const [title, setTitle] = useState("")
    const [categ, setCateg] = useState("Pending")
    const [desc, setDesc] = useState("")

    const handleChange = (e) => {
        setCateg(e.target.value);
      };

    const openTask = () =>{
        setOpen(!open)
    }

    const handleTask = (e) =>{
        e.preventDefault();
        if(title && categ && desc){
            const newTask = {
                title : title,
                categ : categ,
                desc : desc
            }

        setTasks([...tasks, newTask])

        setTitle('')
        setDesc('')
        setCateg('')
        setOpen(!open)

        }
        else{
            alert('Waa')
        }
    }
  return (
    <div className='intro'>
        <div className="tip">TASKY</div>
        <div className="intro-head">
            <h1>Welcome 👋 Let`s be <span>well organised</span></h1>
        </div>

        <div className="intro-body">
            <p>C`mon add a <button onClick={openTask}>new task</button></p>
            <p>Total TASKS : ({tasks.length})</p>
        </div>

       {open && (
        <>

            <form>

                <div className="head">
                    <input type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>

                    <select value={categ} onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="Pending">Pending</option>
                        <option value="Proccessing">Proccessing..</option>
                        <option value="Completed">Completed</option>
                        <option value="Canceled">Canceled</option>
                    </select>

                </div>

                <div className="body">
                    <textarea placeholder='More details..' onChange={(e)=>setDesc(e.target.value)}></textarea>
                </div>

                <div className="foot">
                    <input type='submit' value='V' onClick={handleTask}/>
                </div>
            </form>

        </>
       )}

       
        <div>
                <ul>
                    {tasks.map((task)=>(
                        <li>{task.title}, {task.desc} {task.categ}</li>
                    ))}
                </ul>
                
        </div>
      
       

    </div>
  )
}

export default Intro