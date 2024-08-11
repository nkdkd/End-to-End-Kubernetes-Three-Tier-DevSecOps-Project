import axios from 'axios';

const apiUrl = 'http://k8s-threetie-mainlb-11c5700e30-1598476283.us-east-1.elb.amazonaws.com';

const api = axios.create({
    baseURL: apiUrl,
});

export function getTasks() {
    return api.get('/api/tasks');
}

export function addTask(task) {
    return api.post('/api/tasks', task);
}

export function updateTask(id, task) {
    return api.put(`/api/tasks/${id}`, task);
}

export function deleteTask(id) {
    return api.delete(`/api/tasks/${id}`);
}
