import React from "react";

class AddComponent extends React.Component {

    state = {
        title : '',
        salary : ''
    }
    
    handleChangeTitle = (event) => {
        this.setState({
             title: event.target.value
        })
     } 
 
     hanhandleChangeSalary = (event) => {
         this.setState({
             salary: event.target.value
         })
     }
 
     handleSubmit = (event) => {
         event.preventDefault()
         
         if(!this.state.title || !this.state.salary){
            alert('Chưa nhập dữ liệu')
            return;
         }

         this.props.addNewJob({
            id : Math.floor(Math.random() * 1001),
            title : this.state.title,
            salary : this.state.salary
         })
         
        this.setState({
            title:'',
            salary:''
        })
     }

    render () {
        return(
            <>
            <form >
            <label htmlFor="fname">Job's Title:</label><br/>

            <input type="text"
            value={this.state.title} onChange={(event) => {this.handleChangeTitle(event)}}/>
            <br/>

            <label htmlFor="lname">Salary:</label> 
            <br/>

            <input type="text" value={this.state.salary}
            onChange={(event) => {this.hanhandleChangeSalary(event)}} /><br/><br/>

            <button onClick={(event) => {this.handleSubmit(event)}}>Submit</button>
            </form> 
        </>
        )
    }

}

export default AddComponent 
