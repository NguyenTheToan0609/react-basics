import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title : ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title : event.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title){
            toast.error("Missing title!");
            return;
        }
        this.props.addNewTodo({
            id : Math.floor(Math.random() * 1000),
            title: this.state.title
        })
        this.setState({
            title:''
        })
    }

    render () {
        let {title} = this.state;
        return(
            <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event) => this.handleOnChangeTitle(event)}
                    />
                    <button type="button" className="add"
                        onClick={() => this.handleAddTodo()}
                    >Add   
                    </button>
               </div>
        )
    }
}

export default AddTodo ;