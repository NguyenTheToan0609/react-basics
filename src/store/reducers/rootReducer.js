const innitState = {
    users : [
        {id:1 , name:'Toan'},
        {id:2 , name:'Bob'},
        {id:3 , name:'Alice'}
    ],

    post: []
}

const rootReducer = (state = innitState ,action) => {

    switch(action.type) {
        case 'DELETE_USER':
            console.log('check action ', action)
           let users = state.users
           users= users.filter(item => item.id !== action.payload.id)

            return {
                ...state,users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000000)
            let user = {id: id , name:`random ${id}`}
            return {
                ...state, users : [...state.users ,user]
            }
        default:
         return state;
      }
 
}

export default rootReducer ;