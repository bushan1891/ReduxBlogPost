import {FETCH_POSTS ,FETCH_POST} from '../actions/index';
const INITIAL_STATE ={ all:[],post :null };


export default function(state = INITIAL_STATE , action) {
  switch (action.type) {
    case FETCH_POST:
      return {...state,post : action.payload.data};

    case FETCH_POSTS :
      return {...state, all : action.payload.data}
    default:
    return state

  }
}


// {...state,post : action.payload.data}
// keep the exsisting state create a new state with key post and store the action.payload.data;

//EXAMPLE
/*const state={
  "all":"all",
  "b":10
}
console.log({...state , c : 10});
*/

// /{"all":"all","b":10,"c":10}
