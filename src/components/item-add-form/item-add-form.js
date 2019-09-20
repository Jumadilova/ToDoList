import React, {Component} from 'react';
import './item-add-form.css'

class ItemAddForm extends Component {
    state = {
        onInput: ''
    };
    onHandleInput(event) {
        this.setState({onInput: event.target.value})
    }
    submitInput(event) {
        event.preventDefault();
        this.props.addItem(this.state.onInput)
        this.setState({onInput:''})
    }
    render () {
        return (
            <form className='item-add-form d-flex'
                  onSubmit = {this.submitInput.bind(this)}>
                <input type ="text"
                       className={"form-control"}
                       placeholder="What needs to be done"
                       onChange={this.onHandleInput.bind(this)}
                       value={this.state.onInput}
                />
                <button
                    className='btn btn-outline-success'

                >
                    Add Item
                </button>
            </form>
        )
    }
}
export default ItemAddForm;