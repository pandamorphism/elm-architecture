const view = ({state, dispatch}) =>
    <form className="login">
        <h1>Login</h1>
        <input
            type="text"
            placeholder="User name"
            value={state.name}/>
        <input
            type="password"
            placeholder="Password"
            value={state.password}/>
        <button>Sign in</button>
    </form>;

function init() {
    return {name: '', password: ''};
}

export default {init, view};
