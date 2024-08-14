import  React  from 'react';

class ChildComponent extends React.Component {

    state = {
        showJob : false 
    }

    handleShowHide = () => {
        this.setState({
            showJob : !this.state.showJob
        })
    } 

    handleOnClickDelete = (job) => {
        console.log("handleOnClickDelete",job)
        this.props.deleteAJob(job)
    } 

    render(){
        console.log(this.props)
        // let name = this.props.name
        // let address = this.props.address
        let {showJob} = this.state;
        let {arrJob} = this.props;
        return(  
            <>
               {!showJob ?
               <div>
                <button onClick={() => this.handleShowHide()}>Show</button>
                </div>
                : 
                <>
                <div className='job-list'> 
                    {
                    arrJob.map((item,index)=> {
                        return(
                            <div key={item.id}>
                                {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                            </div>
                        )
                    })
                    }
                </div>
                <div>
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                </div>
               </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) =>{
//         let {firstName,lastName,arrPeople} = props;
//     return(  
//                     <>
//                         <div>
//                             firstName - lastName : {firstName} - {lastName}
//                         </div>
        
//                        <div className='people-list'> 
//                             {
//                             arrPeople.map((item,index)=> {
//                                 return(
//                                     <div key={item.id}>
//                                         {item.name} - {item.age}
//                                     </div>
//                                 )
//                             })
//                             }
//                        </div>
//                     </>
//                 )
// }
export default ChildComponent ;