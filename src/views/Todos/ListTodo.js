import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {


    state = {
        ListTodo:[
            {id:'todo1',title:'Doing HomeWork'},
            {id:'todo2',title:'Making Videos'},
            {id:'todo3',title:'fixing bugs'}
        ],

        editTodo:{}
    }

    addNewTodo = (todo) => {
        this.setState({
            ListTodo : [...this.state.ListTodo , todo]
        })
        toast.success("Wow so easy!");
    }

    handleDeleteTodo = (todo) => {
        let currenTodos = this.state.ListTodo;
        currenTodos = currenTodos.filter(item => item.id !== todo.id)

        this.setState({
            ListTodo : currenTodos
        })
        toast.success("Delete success!");
    }

    handleEditTodo = (todo ) => {
        let {editTodo,ListTodo}= this.state
        let isEmtyObj =  Object.keys(editTodo).length === 0;
        if(isEmtyObj === false && editTodo.id === todo.id) {

            let ListTodoCopy = [...ListTodo]

            let objIndex = ListTodoCopy.findIndex(item => item.id == todo.id);
 
            ListTodoCopy[objIndex].title = editTodo.title
            
            this.setState({
                ListTodo : ListTodoCopy,
                editTodo : {}
            })
            toast.success("Edit success!");
            return;
        }
        
        this.setState({
            editTodo : todo 
        })
    }

    handleOnChangEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo : editTodoCopy
        })
    }

    render(){
        let {ListTodo,editTodo} = this.state;
        // let ListTodo = this.state.ListTodo
        let isEmtyObj =  Object.keys(editTodo).length === 0;

        return(
            <>
            <p>App ToDo Sample With React.Js</p>
            <div className="list-todo-container">
               <AddTodo 
                addNewTodo = {this.addNewTodo}
               />

               <div className="list-todo-content">
                    {ListTodo && ListTodo.length > 0 &&
                        ListTodo.map((item,index) => {
                            return(
                            <div className="todo-child" key={item.id}>
                                {isEmtyObj === true ?
                                    <span> {index + 1} - {item.title} </span>
                                    :
                                    <>
                                    {editTodo.id === item.id ?
                                        <span>
                                            {index + 1} - <input value= {editTodo.title}
                                                onChange={(event) =>this.handleOnChangEditTodo(event)}
                                            />
                                        </span>
                                        :
                                        <span> {index + 1} - {item.title} </span>
                                    }
                                    </>     
                                }

                                <button className="edit" 
                                onClick={()=>this.handleEditTodo(item)}
                                >
                                {isEmtyObj === false && editTodo.id === item.id ?
                                'Save' : 'Edit'} 
                                </button>

                                <button className="delete"
                                onClick={()=>this.handleDeleteTodo(item)}
                                
                                >Delete</button>     
                            </div>
                            )
                        })
                    }
               </div>
            </div>
            </>
            
        )
    }
}

export default ListTodo;