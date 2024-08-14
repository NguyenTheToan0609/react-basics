import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {

    state = {
        user : {}
    }

    async componentDidMount() {

        if(this.props.match && this.props.match.params.id) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            // console.log('check user', res)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data :{}
            })
        }

    }

    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render(){
        let {user} = this.state;
        let isEmtyObj =  Object.keys(user).length === 0;
        return(
            <>
           
                {isEmtyObj === false &&
                <>
                    <div>DetailUser id : {this.props.match.params.id}</div>
                    <div>Use's Name : {user.first_name}-{user.last_name}</div>
                    <div>Use's Email : {user.email} </div>
                    <div>
                        <img src={user.avatar}/>
                    </div>
                    <div> 
                        <button type="button" className="btn-back" onClick={() => this.handleBackButton()}>Back</button>
                    </div>
                </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser) ;