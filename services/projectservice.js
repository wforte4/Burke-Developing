import { Cookies } from 'react-cookie';


const cookies = new Cookies();

export async function createProject(title, body, tags, images) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newProject = await fetch('http://localhost:3600/projects', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken}`
        },
        body: JSON.stringify({
            "title": title,
            "body": body,
            "tags": tags,
            "images": images
        })
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newProject) {
        return newProject
    }
}

export async function getTasks(limit, token) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch('http://localhost:3600/tasks', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken ? getCookies.accessToken: token}`
        },
        query: JSON.stringify({
            "limit": limit
        })
    })
    .then(function(response) {
        if(response.status == 403) {
            return 'Not Authorized'
        }
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newTask) {
        return newTask
    }
}

export async function removeTask(taskId) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch(`http://localhost:3600/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${getCookies.accessToken ? getCookies.accessToken: token}`
        }
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newTask) {
        return newTask
    }
}

export async function updateTaskStatus(taskId, newstatus) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch(`http://localhost:3600/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken ? getCookies.accessToken: token}`
        },
        body: JSON.stringify({
            "status": newstatus
        })
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newTask) {
        return newTask
    }
}