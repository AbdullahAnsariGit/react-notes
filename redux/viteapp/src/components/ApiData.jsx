import React, { useEffect } from 'react'
import axios from 'axios'

function ApiData() {
    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch users');
        }
    };
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>ApiData</div>
    )
}

export default ApiData