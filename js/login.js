import Type from 'union-type';
import {pipe, targetValue} from './utils';

const Action = Type({
    Name: [String],
    Password: [String],
    Login: []
});

const onSubmit = dispatch => () => {
    dispatch(Action.Login);
};
const view = ({state, dispatch}) =>
    <form className="login">
        <h1>Login</h1>
        <input
            on-input={pipe(targetValue, Action.Name, dispatch)}
            type="text"
            placeholder="User name"
            value={state.name}/>
        <input
            on-input={pipe(targetValue, Action.Password, dispatch)}
            type="password"
            placeholder="Password"
            value={state.password}/>
        <button type="button" on-click={onSubmit(dispatch)}>Sign in</button>
        <div className="status" style-display={state.status ? 'block' : 'none'}>
            {state.status}
        </div>
    </form>;

function init() {
    return {name: '', password: '', status: ''};
}

function update(state, action) {
    return Action.case({
        Name: name => ({...state, name}),
        Password: password => ({...state, password}),
        Login: () => ({...state, status: `${state.name}, ${state.password}`})
    }, action);
}

export default {init, view, update};
