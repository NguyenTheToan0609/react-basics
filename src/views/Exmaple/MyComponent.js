import  React  from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    // state : Khi state đối tượng thay đổi, thành phần sẽ được hiển thị lại.
   
    state = {
        arrJob : [
            {id : 'job1', title : 'Developers',salary : 500 },
            {id : 'job2', title : 'Testers',salary : 400 },
            {id : 'job3', title : 'Project Managers',salary : 1000 }

        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJob : [...this.state.arrJob , job]
        })
    }

    deleteAJob = (job) => {
        let current = this.state.arrJob
        current = current.filter(item => item.id !== job.id);
        this.setState({
            arrJob : current
        })
    }
  
    render(){
        console.log(this.state)
        return(  
            <>
            <AddComponent
                addNewJob = {this.addNewJob}
            />

            <ChildComponent
            arrJob = {this.state.arrJob}
            deleteAJob = {this.deleteAJob}
            />
            </>
        )
    }
}

export default MyComponent ;
