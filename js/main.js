const snabbdom = require('snabbdom');
import './styles/styles.css';
import clazz from 'snabbdom/modules/class';
import props from 'snabbdom/modules/props';
import style from 'snabbdom/modules/style';
import eventlisteners from 'snabbdom/modules/eventlisteners';


import Login from './Login';

const patch = snabbdom.init([
    clazz, props, style, eventlisteners
]);

// Gets the initial state from the Component
let state = Login.init(),
    vnode = document.getElementById('app');

function updateUI() {
    const newVnode = <Login state={state} dispatch={dispatch}/>;
    vnode = patch(vnode, newVnode);
}

function dispatch(action) {
    state = Login.update(state, action);
    updateUI();
}

updateUI();
