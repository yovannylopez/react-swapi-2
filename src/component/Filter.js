import React from 'react'

class Filter extends React.Component {
    constructor() {
        super()
        this.state = {
            search: "",
            contacts: [
                { id: 1, gender: "male", eyes: "blue" },
                { id: 2, gender: "male", eyes: "blue" },
                { id: 3, gender: "female", eyes: "blue" },
                { id: 4, gender: "female", eyes: "blue" },
                { id: 5, gender: "female", eyes: "blue" }
            ]
        }
    }

    SearchVal = (event) => {
        this.setState({
            search: event.target.value.substr(0, 20)
        })
    }

    render() {
        const contactsall = this.state.contacts
        const filteredContact = contactsall.filter(contact => {

            return contact.gender.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

        })

        return (
            <div>
                <input type="text" value={this.state.search} onChange={(e) => this.SearchVal(e)} placeholder="Search by Gender or Eye color " />

                <ul>
                    {
                        filteredContact.map(contact => <li key={contact.id}>{contact.gender} {contact.eyes}</li>)
                    }
                </ul>

            </div>
        );
    }
}

export default Filter;