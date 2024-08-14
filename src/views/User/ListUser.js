import React from "react";
import axios from "axios";
import './listUser.scss';
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {

    state = {
        ListUser:[]
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUser : res && res.data && res.data.data ? res.data.data : []
        })
    }

    handlViewDetailUser = (user) =>{
        this.props.history.push(`user/${user.id}`)
    }
    render(){
        let {ListUser} = this.state;
        return(
            <div className="list-user-container">
               <div className="title">
                    Fetch all list users
               </div>
               <div className="list-user-content">
                    <div className="child">
                        {ListUser && ListUser.length > 0 &&
                            ListUser.map((item,index) => {
                                return(
                                    <div className="child" key={item.id}
                                        onClick={()=>this.handlViewDetailUser(item)}
                                    >
                                        { index + 1 } - {item.first_name} {item.last_name}
                                    </div>
                                )  
                            })
                        }
                    </div> 
               </div>
            </div>
        )
    }
}

export default withRouter(ListUser) ;