import React from "react";
import { withRouter } from "react-router";
import logo from '../../assets/images/background.png'
import { connect } from "react-redux";

class Home extends React.Component {
//     componentDidMount() {
//         setTimeout(() => {
//             this.props.history.push('/todo')
//         },3000)
//     }

handleDeleteUsers = (user) => {
    this.props.deleteUserRedux(user)
}

handleCreateUsers = () => {
    this.props.AddUserRedux()
}

    render() {
        // console.log('check props: ' , this.props.dataRudex)
        let listUsers = this.props.dataRudex;
        return(
            <>
             <div>Hello world from Home</div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item,index)=>{
                            return(
                                <div key={item.id}>
                                    {index + 1 } - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUsers(item)}>X</span>
                                </div>
                            )
                        })
                    }
                    <button type="button" onClick={() => this.handleCreateUsers()}>Add New</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRudex : state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux : (userDelete) => dispatch({ type:'DELETE_USER', payload: userDelete}),
        AddUserRedux : () => dispatch({ type:'CREATE_USER'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);