import React, { Component } from 'react'

import api from '../../services/api'

export default class CreateUser extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    ValueChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitForm = async e => {
        e.preventDefault()

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        await api.post('/user/create', user)

        this.setState({ name: '', email: '', password: '' })

        alert('Usuário criado')
    }

    render() {
        return(
            <form>
                <input type="text" name="name" onChange={this.ValueChange} value={this.state.name} />
                <input type="email" name="email" onChange={this.ValueChange} value={this.state.email} />
                <input type="password" name="password" onChange={this.ValueChange} value={this.state.password} />
                <input type="button" value="Criar" onClick={this.SubmitForm} />
            </form>
        )
    }
}