import { createTask, getTasks, removeTask, updateTaskStatus } from '../../services/apiservice'
import { useState, useEffect, useReducer } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import Theme from '../../styles/theme'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

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

function getPriorityColor(priority) {
    switch(priority) {
        case 'Urgent':
            return 'rgb(252, 106, 15)';
        case 'High':
            return 'rgb(252, 204, 15)';
        case 'Medium':
            return 'rgb(46, 252, 15)';
        case 'Low':
            return 'rgb(43, 255, 205)';
    }
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
        priority: 'Medium',
        assignee: 'Full Team'
    })
    const [sortedTasks, setSortedTasks] = useState({
        inprogress: [],
        created: [],
        done: []
    })
    const [allTasks, setAllTasks] = useState(getFirstLoad != null ? getFirstLoad: null)
    const [status, setStatus] = useState(getFirstLoad != null ? 'succeeded': 'none')
    const [loading, setLoading] = useState(false)
    let lastcat = null

    // Create a new Task DEFAULT: status: 'created'
    const createNewTask = async(e) => {
        e.preventDefault();
        const newTask = await createTask(inputs.objective, inputs.status, inputs.priority, inputs.assignee)
        if(newTask) {
            console.log(newTask)
            setInputs({...inputs, objective: ''})
            updateTasks(e)
        }
    }

    const sortAllTasks = (tasks) => {
        const inp = []
        const cr = []
        const dn = []
        tasks.map((task) => {
            if(task.status === 'done') dn.push(task)
            if(task.status === 'created') cr.push(task)
            if(task.status === 'inprogress') inp.push(task)
        })
        setSortedTasks({
            ...sortedTasks,
            inprogress: inp,
            created: cr,
            done: dn
        })
    }
    useEffect(() => {
        sortAllTasks(getFirstLoad)
        console.log(sortedTasks)
    }, [])

    // Updating Tasks with Backend
    const updateTasks = async(e) => {
        setStatus('loading')
        const getalltasks = await getTasks(75, null)
        if(getalltasks) {
            console.log(getalltasks)
            getalltasks.sort(compare('status'))
            setAllTasks(getalltasks)
            sortAllTasks(getalltasks)
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
            <div className='nav'>
                <h1>Task Manager</h1>
                <p>Welcome to the task manager, please submit bugs and assign to proper developer.</p>
            </div>
            <div className='tasklist'>
                <div className='column'>
                    <form onSubmit={createNewTask}>
                        <h2 className='newtasktitle'>New Task</h2>
                        <label>Task objective</label>
                        <textarea 
                            name='objective'
                            onChange={isTyping}
                            value={inputs.objective}
                            placeholder='Objective'
                            required
                        />
                        <label>Priority</label>
                        <div className='customselect'>
                            <select value={inputs.priority} name='priority' onChange={isTyping}>
                                <option value="Urgent">Urgent</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        <label>Assignee</label>
                        <div className='customselect'>
                            <select value={inputs.assignee} name='assignee' onChange={isTyping}>
                                <option value="William Forte">William Forte</option>
                                <option value="Full Team">Full Team</option>
                            </select>
                        </div>
                        <button type='submit'>Add Task</button>
                    </form>
                </div>
                <div className='column'>
                    <div className='cat'>To Do</div>
                    <TransitionGroup>
                        {sortedTasks.created.length > 0 ? sortedTasks.created.map((task, i) => {
                            let nextStatus = task.status == 'created' ? 'inprogress': 'done';
                            return (
                                <CSSTransition
                                    key={i}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <div className='task'>
                                        <h2>{task.objective}</h2>
                                        <h3 style={{background: getPriorityColor(task.priority)}}>{task.priority}</h3>
                                        <h4>{task.assignee}</h4>
                                        <img className='threedots' src='/icons/taskedit.png'/>
                                        <div className='floater'>
                                            <div onClick={(e) => {
                                                task.status = nextStatus;
                                                updateThisTask(e, task.id, nextStatus)
                                            }} className='update'>Status</div>
                                            <div onClick={(e) => removeThisTask(e, task.id)} className='remove'>Remove</div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            )
                        }): null}

                    </TransitionGroup>
                </div>
                <div className='column'>
                    <div className='cat'>Doing</div>
                    <TransitionGroup>
                        {sortedTasks.inprogress.length > 0 ? sortedTasks.inprogress.map((task, i) => {
                            let nextStatus = task.status == 'created' ? 'inprogress': 'done';
                            return (
                                <CSSTransition
                                    key={i}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <div className='task'>
                                        <h2>{task.objective}</h2>
                                        <h3 style={{background: getPriorityColor(task.priority)}}>{task.priority}</h3>
                                        <h4>{task.assignee}</h4>
                                        <img className='threedots' src='/icons/taskedit.png'/>
                                        <div className='floater'>
                                            <div onClick={(e) => {
                                                task.status = nextStatus;
                                                updateThisTask(e, task.id, nextStatus)
                                            }} className='update'>Status</div>
                                            <div onClick={(e) => removeThisTask(e, task.id)} className='remove'>Remove</div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            )
                        }): null}
                    </TransitionGroup>
                </div>
                <div className='column'>
                    <div className='cat'>Done</div>
                    <TransitionGroup>
                        {sortedTasks.done.length > 0 ? sortedTasks.done.map((task, i) => {
                            let nextStatus = task.status == 'created' ? 'inprogress': 'done';
                            return (
                                <CSSTransition
                                    key={i}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <div className='task'>
                                        <h2>{task.objective}</h2>
                                        <h3 style={{background: getPriorityColor(task.priority)}}>{task.priority}</h3>
                                        <h4>{task.assignee}</h4>
                                        <img className='threedots' src='/icons/taskedit.png'/>
                                        <div className='floater'>
                                            <div onClick={(e) => {
                                                task.status = nextStatus;
                                                updateThisTask(e, task.id, nextStatus)
                                            }} className='update'>Status</div>
                                            <div onClick={(e) => removeThisTask(e, task.id)} className='remove'>Remove</div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            )
                        }): null}
                    </TransitionGroup>
                </div>
            </div>
            
            <img id='body_bg' src='/bg_login.png'/>
            <style jsx>{`
                .item-enter {
                    opacity: 0;
                    transform: scale(0,0);
                }
                .item-enter-active {
                    opacity: 1;
                    transform: scale(1,1);
                    transition: all 500ms ease;
                }
                .item-exit {
                    opacity: 1;
                    transform: scale(1,1);
                }
                .item-exit-active {
                    transform: scale(0,0);
                    transition: all 500ms ease;
                }
                .customselect {
                    float: left;
                    width: 300px;
                    padding: 10px 5%;
                    margin: 5px 0;
                }
                .info {
                    float: left;
                    font: 14px 'Open Sans';
                }
                .column {
                    float: left;
                    width: 23%;
                    margin: 10px 1%;
                    padding: 10px 1%;
                    border-radius: 10px;
                    height: auto;
                    box-shadow: ${Theme.colors.shadowlight};
                    background: rgba(255,255,255,1);
                }
                .cat {
                    float: left;
                    width: 90%;
                    padding: 14px 5%;
                    color: white;
                    margin: 0px 0;
                    margin-bottom: 5px;
                    border-radius: 4px;
                    box-shadow: ${Theme.shadows.mat};
                    font: 16px 'Roboto';
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
                    padding: 5px 0;
                    text-align: center;
                    font: 14px 'Roboto';
                    opacity: .5;
                    transition: all .3s ease;
                    background: white;
                    cursor: pointer;
                }
                .update:hover {
                    opacity: 1;
                }
                .remove {
                    float: left;
                    width: 100%;
                    padding: 5px 0;
                    text-align: center;
                    font: 14px 'Roboto';
                    opacity: .5;
                    transition: all .3s ease;
                    background: white;
                    cursor: pointer;
                }
                .remove:hover {
                    opacity: 1;
                }
                .threedots {
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    width: 14px;
                    height: 14px;
                    padding: 2px;
                    opacity: 0;
                    transition: all .2s ease;
                    cursor: pointer;
                }
                .threedots:hover ~ .floater, .floater:hover {
                    display: block;
                }
                .floater {
                    position: absolute;
                    right: 5px;
                    top: 10px;
                    display: none;
                    padding: 0;
                    border-radius: 4px;
                    overflow: hidden;
                    background: rgba(255, 255, 255,1);
                    box-shadow: ${Theme.shadows.light};
                    z-index: 9999;
                }
                .tasklist {
                    float: left;
                    width: 100%;
                    transition: all .2s ease;
                    padding: 20px 0;
                    display: flex;
                    align-items: flex-start;
                }
                .task {
                    float: left;
                    width: 98%;
                    position: relative;
                    padding: 5px 1%;
                    margin: 5px 0;
                    min-height: 50px;
                    border-radius: 8px;
                    box-shadow: ${Theme.shadows.mat};
                    background: ${Theme.colors.lightplatinum};
                }
                .task:hover .threedots {
                    opacity: 1;
                }
                .task h2 {
                    float: left;
                    width: 90%;
                    padding: 5px 2.5%;
                    padding-bottom: 25px;
                    margin: 0;
                    font: 15px 'Roboto';
                }
                .task h4 {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 4px;
                    margin: 0;
                    opacity: .7;
                    font: 11px 'Roboto';
                }
                .task h3 {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    padding: 5px;
                    margin: 0;
                    border-radius: 3px;
                    font: 12px 'Roboto';
                }
                .newtasktitle {
                    float: left;
                    margin: 10px 5%;
                    width: 90%;
                    text-align: center;
                    font: 20px ${Theme.fonts.title};
                }
                .maindiv textarea {
                    float: left;
                    margin: 10px 2.5%;
                    padding: 10px 2.5%;
                    width: 90%;
                    font: 15px 'Roboto';
                    border: none;
                    resize: vertical;
                    max-height: 150px;
                    min-height: 40px;
                    border-radius: 6px;
                    box-shadow: 0 0 2px rgba(20,20,20,.8);
                }
                .maindiv label {
                    float: left;
                    margin: 2px 0;
                    width: 95%;
                    padding: 0 2.5%;
                    text-decoration: underline;
                    font: 12px 'Roboto';
                }
                .maindiv {
                    float: left;
                    width: 100%;
                    z-index: 99;
                    margin: 20px 0;
                    margin-top: 80px;
                    overflow: hidden;
                }
                .nav h1 {
                    float: left;
                    margin: 10px 25px;
                    width: auto;
                    font: 30px ${Theme.fonts.title};
                }
                .nav p {
                    float: left;
                    font: 16px 'Roboto';
                    margin: 0 10px;
                }
                .nav {
                    float: left;
                    width: 100%;
                    padding: 20px 0;
                    background: white;
                    box-shadow: ${Theme.shadows.mat};
                }
                .maindiv form {
                    float: left;
                    width: 90%;
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
                    font: 16px 'Roboto';
                    background: ${Theme.colors.royalblue};
                    color: white;
                    cursor: pointer;
                    border: none;
                    border-radius: 8px;
                    margin: 10px 5%;
                }
                @media screen and (max-width: 800px) {
                    .tasklist {
                        flex-wrap: wrap;
                        align-items: column;

                    }
                    .column {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

TaskManager.getInitialProps = async(ctx) => {
    const cookies = await nextCookie(ctx)
    const getfirsttasks = await getTasks(75, cookies.accessToken)
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