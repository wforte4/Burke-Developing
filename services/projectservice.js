import { Cookies } from 'react-cookie';
import { baseConfig } from './restservice' 

const cookies = new Cookies();

export async function createProject(title, body, tags, images, date) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newProject = await fetch(baseConfig.projectURL, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken}`
        },
        body: JSON.stringify({
            "title": title,
            "body": body,
            "tags": tags,
            "images": images,
            "date": date
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
    const getAllProjects = await fetch(baseConfig.projectURL , {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        },
        query: JSON.stringify({
            "limit": limit
        })
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        console.log(error)
        return 'none'
    });
    if(getAllProjects) {
        return getAllProjects
    }
}

export async function getProjectById(id) {
    // New Login Data request
    const newProject = await fetch(baseConfig.projectURL + id, {
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
    if(newProject) {
        return newProject
    }
}

export async function removeProject(projectId) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newProject = await fetch(baseConfig.projectURL + projectId, {
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
    if(newProject) {
        return newProject
    }
}

export async function updateProject(projectId, title, body, images, tags) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newProject = await fetch(baseConfig.projectURL + projectId, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken ? getCookies.accessToken: token}`
        },
        body: JSON.stringify({ title: title, body: body, tags: tags, images: images})
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