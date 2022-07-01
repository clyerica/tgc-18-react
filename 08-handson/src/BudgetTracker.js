import React from 'react'

export default class BudgetTracker extends React.Component {
    state = {
        expenses: [
            {
                _id: 1,
                description: 'mcdonalds',
                category: 'food',
                amount: "10.50",
                date: "1 Jan",
                reconciled: false
            },
            {
                _id: 2,
                description: 'Grab',
                category: 'transport',
                amount: "23.80",
                date: "5 Jan",
                reconciled: false
            },
            {
                _id: 3,
                description: 'M1',
                category: 'bills',
                amount: '25.00',
                date: "9 Jan",
                reconciled: false
            },
            {
                _id: 4,
                description: 'Dr Strange',
                category: 'entertainment',
                amount: "15.80",
                date: "9 Jan",
                reconciled: false
            }
        ],
        newDescription: '',
        newCategory: 'transport',
        newAmount: '',
        newDate: '',
        expenseToBeEdited: null,
        modifiedDescription: '',
        modifiedCategory: '',
        modifiedAmount: '',
        modifiedDate: ''
    }

    categories = [
        {
            "display": "Transport",
            "value": "transport"
        },
        {
            "display": "Entertainment",
            "value": "entertainment"
        },
        {
            "display": "Food",
            "value": "food"
        },
        {
            "display": "Bills",
            "value": "bills"
        },
        {
            "display": "Loans",
            "value": "loans"
        },
        {
            "display": "Others",
            "value": "others"
        }
    ]

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addExpense = () => {
        const newExpense = {
            _id: Math.floor(Math.random() * 1000000 + 1),
            description: this.state.newDescription,
            category: this.state.newCategory,
            amount: this.state.newAmount,
            date: this.state.newDate,
            reconciled: false
        }
        this.setState({
            expenses: [
                ...this.state.expenses,
                newExpense
            ],
            newAmount:'',
            newCategory:'',
            newDate:'',
            newDescription:''
        })
    }

    reconciledToggle = (expense) => {
        const clonedExpense = {
            ...expense,
            reconciled: !expense.reconciled
        }
        let index = this.state.expenses.findIndex(e => e._id === clonedExpense._id)
        this.setState({
            expenses: [
                ...this.state.expenses.slice(0, index),
                clonedExpense,
                ...this.state.expenses.slice(index + 1)
            ]
        })
    }

    displayExpense = (e) => {
        return <React.Fragment>
            <li className="list-group-item d-flex justify-content-between align-items-start" >
                <div className="ms-2 me-auto">
                    <div>
                        <input type="checkbox"
                            checked={e.reconciled}
                            className="form-check-input me-2"
                            onChange={() => this.reconciledToggle(e)}
                        />
                        <label className="fw-bold px-3" style={{ backgroundColor: e.reconciled ? "lightgreen" : "lightpink", borderRadius: "3px" }}>
                            {e.description}
                        </label>
                    </div>
                    <ul>
                        <li>Amount: ${e.amount}</li>
                        <li>Category: {e.category}
                        </li>
                        <li>Date: {e.date}</li>
                    </ul>
                </div>
                <div className="ms-auto align-self-end">
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => this.beginEdit(e)}
                    >Edit</button>
                    
                </div>
            </li>
        </React.Fragment>
    }

    beginEdit = (e) => {
        this.setState({
            expenseToBeEdited: e,
            modifiedDescription: e.description,
            modifiedCategory: e.category,
            modifiedAmount: e.amount,
            modifiedDate: e.date

        })
    }

    displayEditExpense = (e) => {
        return <React.Fragment>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                        <input type="text"
                            name="modifiedDescription"
                            className="form-control me-2"
                            value={this.state.modifiedDescription}
                            onChange={this.updateFormField}
                        />
                    </div>
                    <ul>
                        <li><label>Amount: $</label>
                            <input type="text"
                                name="modifiedAmount"
                                className="form-control-sm form-control"
                                value={this.state.modifiedAmount}
                                onChange={this.updateFormField} />
                        </li>
                        <li><label>Category:</label>
                            <select
                                className="form-select"
                                value={this.state.modifiedCategory}
                                name="modifiedCategory"
                                onChange={this.updateFormField}>
                                {this.categories.map(c =>
                                    <option key={c.value} value={c.value}>{c.display}</option>)}
                            </select>
                        </li>
                        <li><label>Date:</label>
                            <input type="text"
                                name="modifiedDate"
                                className="form-control-sm form-control"
                                value={this.state.modifiedDate}
                                onChange={this.updateFormField} />
                        </li>
                    </ul>
                </div>
                <div className="ms-auto align-self-end">
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => this.updateExpense(e)}
                    >Update</button>
                </div>
            </li>
        </React.Fragment>
    }

    updateExpense = (e) => {
        const modifiedExpense = {
            ...e,
            description: this.state.modifiedDescription,
            category: this.state.modifiedCategory,
            amount: this.state.modifiedAmount,
            date: this.state.modifiedDate
        }
        let index = this.state.expenses.findIndex(e => e._id === modifiedExpense._id)
        this.setState({
            expenses: [
                ...this.state.expenses.slice(0, index),
                modifiedExpense,
                ...this.state.expenses.slice(index + 1)
            ],
            modifiedExpense: null,
            expenseToBeEdited: null
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1>Recorded Expenses</h1>
                <ul className="list-group">
                    {this.state.expenses.map(e =>
                        <React.Fragment key={e._id}>
                            {!this.state.expenseToBeEdited || e._id !== this.state.expenseToBeEdited._id ?
                                this.displayExpense(e)
                                :
                                this.displayEditExpense(e)
                            }
                        </React.Fragment>
                    )}
                </ul>
                <h2 className="mt-3">Add an Expense</h2>
                <div className="container py-3 mb-3" style={{ border: "1px solid grey", borderRadius: "4px" }}>
                    <div className="col-12">
                        <label>Description:</label>
                        <input type="text"
                            name="newDescription"
                            className="form-control-sm form-control"
                            value={this.state.newDescription}
                            onChange={this.updateFormField} />
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label>Amount:</label>
                            <input type="text"
                                name="newAmount"
                                className="form-control-sm form-control"
                                value={this.state.newAmount}
                                onChange={this.updateFormField} />
                        </div>
                        <div className="col-4">
                            <label>Category:</label>
                            <select
                                className="form-select"
                                value={this.state.newCategory}
                                name="newCategory"
                                onChange={this.updateFormField}>
                                {this.categories.map(c =>
                                    <option key={c.value} value={c.value}>{c.display}</option>)}
                            </select>
                        </div>
                        <div className="col-4">
                            <label>Date:</label>
                            <input type="text"
                                name="newDate"
                                className="form-control-sm form-control"
                                value={this.state.newDate}
                                onChange={this.updateFormField} />
                        </div>
                    </div>
                    <button className="btn btn-dark ms-auto" disabled={!this.state.newDescription||!this.state.newCategory||!this.state.newAmount||!this.state.newDate} onClick={this.addExpense}>Submit</button>
                </div>
            </React.Fragment>
        )
    }
}