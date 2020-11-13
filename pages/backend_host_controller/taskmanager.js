import { createTask, getTasks, removeTask, updateTaskStatus } from '../../services/apiservice'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
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

function TaskManager({getFirstLoad}) {

    const [inputs, setInputs] = useState({
        objective: '',
        status: 'created',
    })
    const [allTasks, setAllTasks] = useState(getFirstLoad != null ? getFirstLoad: null)
    const [status, setStatus] = useState(getFirstLoad != null ? 'succeeded': 'none')
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

    return (
        <div className='maindiv'>
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
                                    <div onClick={(e) => {
                                        task.status = nextStatus;
                                        updateThisTask(e, task.id, nextStatus)
                                    }} className='update'>Update Status</div>
                                    <div onClick={(e) => removeThisTask(e, task.id)} className='remove'>Remove Task</div>
                                </div>
                            </div>
                        ]
                    }
                }): status == 'none' ? <h2>No Tasks yet</h2>: <div className='loading'></div>}
            </div>
            
            <img id='body_bg' src='/bg_login.png'/>
            <style jsx>{`
                .cat {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    color: white;
                    margin: 20px 0;
                    font: 12px 'Roboto';
                    background: ${Theme.colors.gunmetal};
                }
                .tasktoggle {
                    float: left;
                    width: 100px;
                    height: 100px;
                    padding: 10px;
                }
                .update {
                    float: left;
                    width: 100%;
                    padding: 8px 0;
                    text-align: center;
                    font: 12px 'Open Sans';
                    opacity: .8;
                    background: ${Theme.colors.platinum};
                    transition: opacity .4s ease;
                    cursor: pointer;
                }
                .update:hover {
                    opacity: 1;
                    background: white;
                }
                .remove {
                    float: left;
                    width: 100%;
                    padding: 8px 0;
                    text-align: center;
                    font: 12px 'Open Sans';
                    opacity: .8;
                    color: white;
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
                    right: -10px;
                    top: -10px;
                    width: 120px;
                    transform: translateX(0) scale(0,0);
                    padding: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: opacity .2s ease, transform .4s;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255,.8);
                    box-shadow: 0 0 2px rgba(20,20,20,.6);
                    z-index: 9999;
                }
                .tasklist {
                    float: left;
                    width: 100%;
                    transition: all .2s ease;
                    padding: 30px 0;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255,.8);
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .task {
                    float: left;
                    width: 200px;
                    position: relative;
                    padding: 10px;
                }
                .task h2 {
                    float: left;
                    width: 90%;
                    padding: 5px 5%;
                    margin: 0;
                    font: 13px 'Open Sans';
                    margin-top: 10px;
                }
                .task h3 {
                    float: left;
                    width: 90%;
                    padding: 5px 5%;
                    margin: 0;
                    font: 12px 'Roboto';
                    opacity: .8;
                }
                .maindiv textarea {
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
                .maindiv {
                    float: left;
                    width: 100%;
                    z-index: 9999;
                    margin: 20px 0;
                    margin-top: 90px;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255, .9);
                }
                .maindiv h1 {
                    float: left;
                    margin: 10px 5%;
                    width: 90%;
                    font: 20px 'Montserrat';
                }
                .maindiv form {
                    float: left;
                    width: 40%;
                    transition: all .2s ease;
                    padding: 10px 5%;
                }
                #body_bg {
                    width: 100%;
                    z-index: -20;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
                .maindiv button {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    background: ${Theme.colors.royalblue};
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

TaskManager.getInitialProps = async(ctx) => {
    const cookies = await nextCookie(ctx)
    const getfirsttasks = await getTasks(50, cookies.accessToken)
    if(getfirsttasks == 'Not Authorized') {
        if (ctx.res) {
            ctx.res.writeHead(301, {
              Location: '/login'
            });
            ctx.res.end();
        } 
    }
    getfirsttasks.sort(compare('status'))
    return {getFirstLoad: getfirsttasks}
}

export default TaskManager