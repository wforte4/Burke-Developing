import { createTask, getTasks, removeTask, updateTaskStatus } from '../../services/apiservice'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import Theme from '../../styles/theme'

const sortingOrder = {
    'inprogress': 1,
    'created': 2,
    'done': 3
}

export function compare(key, order = 'asc') {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) 
	    return 0;
		
	const first = (a[key].toLowerCase() in sortingOrder) ? sortingOrder[a[key]] : Number.MAX_SAFE_INTEGER;
	const second = (b[key].toLowerCase() in sortingOrder) ? sortingOrder[b[key]] : Number.MAX_SAFE_INTEGER;
		
	let result = 0;
	if (first < second) 
	    result = -1;
	else if (first > second) 
	    result = 1;
	return (order === 'desc') ? ~result : result
    };
}

const HamEx = ({onClick, color, width, height, active}) => {
    return (
        <div onClick={onClick} className='hame'>
            <div className={`slash ${active == true ? 'one': ''}`}></div>
            <div className={`slash ${active == true ? 'two': ''}`}></div>
            <div className={`slash ${active == true ? 'three': ''}`}></div>
            <style jsx>{`
                .hame {
                    float: left;
                    width: ${width}px;
                    height: ${height}px;
                    padding: 10px;
                    position: relative;
                    cursor: pointer;
                }
                .slash {
                    float: left;
                    width: 100%;
                    height: 8px;
                    border-radius: 8px;
                    background: ${color};
                    margin: 2px 0;
                    transition: all .4s ease;
                }
                .one {
                    transform: translateY(12px) rotate(45deg);
                }
                .two {
                    opacity: 0;
                }
                .three {
                    transform: translateY(-12px) rotate(-45deg);
                }
            `}</style>
        </div>
    )
}

export default function TaskManager({getFirstLoad}) {

    const [inputs, setInputs] = useState({
        objective: '',
        status: 'created',
    })
    const [allTasks, setAllTasks] = useState(getFirstLoad != null ? getFirstLoad: null)
    const [status, setStatus] = useState(getFirstLoad != null ? 'succeeded': 'none')
    const [active, setActive] = useState(false)
    let lastcat = null

    // Create a new Task DEFAULT: status: 'created'
    const createNewTask = async(e) => {
        e.preventDefault();
        const newTask = await createTask(inputs.objective, inputs.status)
        if(newTask) {
            console.log(newTask)
            setInputs({...inputs, objective: ''})
            updateTasks(e)
        }
    }

    // Updating Tasks with Backend
    const updateTasks = async(e) => {
        setStatus('loading')
        const getalltasks = await getTasks(50, null)
        if(getalltasks) {
            console.log(getalltasks)
            getalltasks.sort(compare('status'))
            setAllTasks(getalltasks)
            setStatus('succeeded')
        }
    }

    const removeThisTask = async(e, task_id) => {
        e.preventDefault()
        const removenewtask = await removeTask(task_id);
        if(removenewtask) {
            console.log(removenewtask)
            updateTasks(e)
        }
    }

    const updateThisTask = async(e, task_id, status) => {
        e.preventDefault()
        const updatenewtask = await updateTaskStatus(task_id, status);
        if(updatenewtask) {
            console.log(updatenewtask)
            updateTasks(e)
        }
    }

    const isTyping = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const toggleActive = (e) => {
        e.persist()
        if(active == true) setActive(false)
        else setActive(true)
    }

    return (
        <div className='sideleft'>
            <HamEx onClick={toggleActive} active={active} width={30} height={30} color={Theme.colors.onxy}/>
            <form onSubmit={createNewTask}>
                <h1>New Task</h1>
                <textarea 
                    name='objective'
                    onChange={isTyping}
                    value={inputs.objective}
                    placeholder='Objective'
                    required
                />
                <button>Add Task</button>
            </form>
            <div className='tasklist'>
                <h1>My Tasks</h1>
                {allTasks ? allTasks.map((task, i) => {
                    let nextStatus = task.status == 'created' ? 'inprogress': 'done';
                    if(lastcat == task.status) {
                        return (
                            <div key={i} className='task'>
                                <h2>Objective: {task.objective}</h2>
                                <h3>Status: {task.status}</h3>
                                <img className='threedots' src='/three_dots.png'/>
                                <div className='floater'>
                                    <div onClick={(e) => {
                                        task.status = nextStatus;
                                        updateThisTask(e, task.id, nextStatus)
                                    }} className='update'>Update Status</div>
                                    <div onClick={(e) => removeThisTask(e, task.id)} className='remove'>Remove Task</div>
                                </div>
                            </div>
                        )
                    } else {
                        lastcat = task.status;
                        return [
                            <div key={task.status} className='cat'>{task.status.toUpperCase()}</div>,
                            <div key={i} className='task'>
                                <h2>Objective: {task.objective}</h2>
                                <h3>Status: {task.status}</h3>
                                <img className='threedots' src='/three_dots.png'/>
                                <div className='floater'>
                                    <div onClick={(e) => updateThisTask(e, task.id, 'inprogress')} className='update'>Update Status</div>
                                    <div onClick={(e) => removeThisTask(e, task.id)} className='remove'>Remove Task</div>
                                </div>
                            </div>
                        ]
                    }
                }): status == 'none' ? <h2>No Tasks yet</h2>: <div className='loading'></div>}
            </div>
            <style jsx>{`
                .cat {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    color: white;
                    font: 12px 'Roboto';
                    background: ${Theme.colors.coral};
                }
                .tasktoggle {
                    float: left;
                    width: 100px;
                    height: 100px;
                    padding: 10px;
                    opacity: ${active == true ? '0': '1'};
                }
                .update {
                    float: left;
                    width: 130px;
                    text-align: center;
                    font: 12px 'Open Sans';
                    padding: 6px;
                    opacity: .9;
                    color: white;
                    border-radius: 8px;
                    background: rgba(70,70,70,.6);
                    transition: opacity .4s ease;
                    cursor: pointer;
                }
                .update:hover {
                    opacity: 1;
                }
                .remove {
                    float: left;
                    width: 75px;
                    text-align: center;
                    font: 12px 'Open Sans';
                    margin-left: 10px;
                    padding: 6px;
                    opacity: .9;
                    color: white;
                    border-radius: 8px;
                    background: rgba(226, 70, 70,.8);
                    cursor: pointer;
                }
                .remove:hover {
                    opacity: 1;
                }
                .threedots {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    width: 20px;
                    height: 20px;
                    padding: 15px;
                    cursor: pointer;
                }
                .threedots:hover ~ .floater, .floater:hover {
                    opacity: 1;
                    transform: translateX(100%) scale(1,1);
                }
                .floater {
                    position: absolute;
                    right: -2px;
                    top: 10px;
                    transform: translateX(0) scale(0,0);
                    padding: 4px;
                    opacity: 0;
                    overflow: hidden;
                    transition: opacity .2s ease, transform .4s;
                    border-radius: 10px;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255, .7);
                    box-shadow: 0 0 1px rgba(20,20,20,.6);
                    z-index: 9999;
                }
                .tasklist {
                    float: left;
                    width: 100%;
                    transition: all .2s ease;
                    height: ${active == true ? 'auto': '0.1px'};
                    opacity: ${active == true ? '1': '0'};
                }
                .task {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    position: relative;
                    border-top: 1px solid ${Theme.colors.coral};
                }
                .task h2 {
                    float: left;
                    width: 90%;
                    padding: 5px 5%;
                    margin: 0;
                    font: 14px 'Montserrat';
                }
                .task h3 {
                    float: left;
                    width: 90%;
                    padding: 5px 5%;
                    margin: 0;
                    font: 12px 'Roboto';
                    opacity: .8;
                }
                .sideleft textarea {
                    float: left;
                    margin: 10px 2.5%;
                    padding: 10px 2.5%;
                    width: 90%;
                    font: 18px 'Roboto';
                    border: none;
                    resize: vertical;
                    max-height: 150px;
                    min-height: 30px;
                    border-radius: 6px;
                    box-shadow: 0 0 2px rgba(20,20,20,.8);
                }
                .sideleft {
                    float: left;
                    width: ${active == true ? '23%': '50px'};
                    transition: width .3s ease-in-out;
                    z-index: 9999;
                    margin: 20px 1%;
                    border-radius: 10px;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255, .7);
                    box-shadow: 0 0 2px rgba(20,20,20,.8);
                }
                .sideleft h1 {
                    float: left;
                    margin: 10px 5%;
                    width: 90%;
                    font: 20px 'Montserrat';
                }
                .sideleft form {
                    float: left;
                    width: 90%;
                    transition: all .2s ease;
                    opacity: ${active == true ? '1': '0'};
                    height: ${active == true ? 'auto': '0.1px'};
                    border-bottom: 2px solid ${Theme.colors.coral};
                    padding: 10px 5%;
                }
                .sideleft button {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    background: ${Theme.colors.coral};
                    color: white;
                    cursor: pointer;
                    border: none;
                    border-radius: 8px;
                    margin: 10px 5%;
                }
            `}</style>
        </div>
    )
}