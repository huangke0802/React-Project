import {  put, takeEvery } from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators'
import axios from 'axios';

function* getInitList(){
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5d10eb44b674851c27217ece/example/list.json');
    const data = res.data.data;
    const action = initListAction(data);
    yield put(action) 
  } catch (e) {
    console.log("网络请求失败")
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;