import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register, logout } from "../../actions/auth";

const Login = () => {
    console.log("logininnnnnnnnnnnnnnnnnnn")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerMode, setRegisterMode] = useState(false);

    const dispatch = useDispatch();
    const { user, error, loading } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { email, password };
        if (registerMode) {
            dispatch(register(credentials));
        } else {
            dispatch(login(credentials));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {registerMode ? (
                    <button type="submit">Register</button>
                ) : (
                    <button type="submit">Login</button>
                )}
                <button type="button" onClick={() => setRegisterMode(!registerMode)}>
                    Switch to {registerMode ? "Login" : "Register"}
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && <p>User: {user.email}</p>}
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
};

export default Login;
