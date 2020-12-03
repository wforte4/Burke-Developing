import Router from 'next/router';
import { Cookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { baseConfig } from './restservice';

const cookies = new Cookies();

export async function createProfile(firstname, lastname, email, password) {
    // Request data to post to createprofile route on rest api
    fetch(baseConfig.baseURL + '/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "firstName": firstname,
            "lastName": lastname,
            "email": email,
            "password": password
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
}

export async function loginRequest(email, password) {
    // New Login Data request
    const newLogin = await fetch(baseConfig.baseURL + '/auth', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        cookies.set('accessToken', data.accessToken);
        cookies.set('refreshToken', data.refreshToken);
        const decoded = jwt_decode(data.accessToken);
        cookies.set('name', decoded.name)
        cookies.set('email', decoded.email)
        cookies.set('refreshKey', decoded.refreshKey)
        cookies.set('permission_level', decoded.permissionLevel)
        cookies.set('userId', decoded.userId)
        Router.push("/")
    })
    .catch(function(error) {
        return error
    });
    if(newLogin) {
        return "Username/Password does not match our records!"
    }
}

export async function Logout() {
    cookies.remove('accessToken');
    cookies.remove('permission_level')
    cookies.remove('refreshToken');
    cookies.remove('name')
    cookies.remove('email')
    cookies.remove('refreshKey')
    cookies.remove('userId')
    await Router.push("/login");
}

export async function submitContact(name, message, email, cellphone) {
    // Request data to post to createprofile route on rest api
    const newfetch = await fetch(baseConfig.baseURL + '/contact', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "message": message,
            "cellphone": cellphone,
            "email": email
        })
    })
    .then(function(res) {
        return res.status
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });

    if(newfetch) {
        return newfetch
    } else {
        return 404
    }
}

export async function createTask(objective, status) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch('http://localhost:3600/tasks', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken}`
        },
        body: JSON.stringify({
            "objective": objective,
            "status": status
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
