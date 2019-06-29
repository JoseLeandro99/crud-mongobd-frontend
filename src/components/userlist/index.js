import React, { Component } from 'react'

import api from '../../services/api'

export default class Userlist extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const users = await api.get('/user/list')

        this.setState({ users: users.data })
    }

    render() {
        const { users } = this.state
        return (
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>{user.name} | {user.email}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
