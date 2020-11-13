import { Cookies } from 'react-cookie';
import { baseConfig } from './restservice' 

const cookies = new Cookies();

export async function createProject(title, body, tags, images) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newProject = await fetch(baseConfig.baseURL + '/projects', {
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

export async function getProjects(limit) {
    // New Login Data request
    const newTask = await fetch(baseConfig.baseURL + '/projects', {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
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

export async function getProjectById(id) {
    // New Login Data request
    console.log(process.env.PROJECTS_ROUTE)
    const newTask = await fetch(process.env.PROJECTS_ROUTE + '/' + id, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
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

export async function removeProject(taskId) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch(`http://localhost:3600/projects/${taskId}`, {
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