// initial State
const initialState={
    users: []
}

// Reducers
const userReducer=(state= initialState,{type,payload}) =>{
switch(type){
    case'SET_USERS':
    return {users:[...payload]};
    
    case'UPDATE_USER':
    return {
        users: state.users.map((user) => {
          if (user.id === payload.id) {
            return payload;
          } else {
            return user;
          }
        })
      };
    case'DELETE_USER':
    return {
        users: state.users.filter((user) => user.id !== payload.id),
      };
    case'CREATE_USER':
    return { users: [...state.users, payload] };
    default:
        return state;
}
}
export default userReducer;
// Actions
export const setusers=(users)=>{
    return {type:'SET_USERS' ,payload:users}

}

export const updatauser=(user)=>{
    return {type:'UPDATE_USER' ,payload:user}

}
export const deleteuser=(user)=>{
    return {type:'DELETE_USER' ,payload:user}

}
export const createuser=(user)=>{
    return {type:'CREATE_USER' ,payload:user}

}