import React, { Component } from "react";
import axios from "axios";

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password, password_confirmation } = this.state;
        if (password !== password_confirmation){
            return;
        }
        axios
            .post(
                "http://localhost:5000/register",
                {
                    email: email,
                    password: password,
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}