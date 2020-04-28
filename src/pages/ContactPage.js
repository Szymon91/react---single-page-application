import React, { Component } from 'react';
import "../styles/ContactPage.scss";
import { Prompt } from 'react-router-dom';

class ContactPage extends Component {
    state = {
        value: ''
    }
    handleSumbit = e => {
        e.preventDefault()
        this.setState({
            value: ''
        })
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return ( 
            <div className="contact">
                <form onSubmit={this.handleSumbit}>
                    <h3>Napisz do nas</h3>
                    <textarea 
                        value={this.state.value} 
                        placeholder="Wpisz wiadomość..." onChange={this.handleChange}></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt 
                    when={this.state.value}
                    message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić stronę?"
                />
            </div>
         );
    }
}
 
export default ContactPage;