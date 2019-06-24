import {
  CHANG_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
  inputValue: "",
  list: [],
};

//reducer 可以接受state,但是绝对不能改变state；
export default (state = defaultState, action) => {
  //深拷贝
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANG_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_TODO_ITEM) {
    //删除数组中的一个元素
    newState.list.splice(action.index, 1);
    return newState;
  }

  if (action.type === INIT_LIST_ACTION) {
    newState.list = action.data;
    return newState;
  }

  return state;
}