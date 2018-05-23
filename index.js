import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react'
import TodoForm from './components/TodoForm'
import {createStore, combineReducers} from 'redux'
import { Provider,connect } from 'react-redux';
import {
    NavigationActions,
    addNavigationHelpers,
    StackNavigator,
} from 'react-navigation';
  
const defaultState = {
    todos : [{title: 'Clean R9o00m'}, {title: 'Drink Milk'}],
}
const todoStore = (state=defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {todos: state.todos.concat([{title: action.todo}])})
        default:
        return state
    }
}


const RootStack = StackNavigator({
    Home:  {screen: App},
    Add: {screen: TodoForm}
  },   {
    initialRouteName: 'Home',
  }
  );


  const store = createStore(todoStore);

  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <RootStack />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('myapp', ()=> Root);
