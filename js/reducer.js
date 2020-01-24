let state = {count: 0}



function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

const render = () => {
  document.body.textContent = `The state for counter is now ${state.count}.`
}


let action = {type: 'INCREASE_COUNT'}

// changeState(state, action)


const dispatch = action => {
  state = changeState(state, action)
  // return state
  render(); 
};

// dispatch(action); 
// dispatch(action);



// render(); 



