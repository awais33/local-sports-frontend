// Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register(name, email, password));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
