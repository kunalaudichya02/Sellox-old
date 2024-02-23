import { useState } from "react";
// import { Route, Routes } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            if (response.ok) {
                const responseData = await response.json();
                setData(responseData)
                console.log('Login successful');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };
    return (
        <div className="w-1/2 j-full">
            <form onSubmit={handleSubmit}>
                <p><input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} /></p>
                <p><input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} /></p>
                <p>Don&apost have an account?
                    <a href="">Sign up</a>
                </p>
                <button className="bg-purple-300 text-white px-4 py-2" type="submit">login</button>
            </form>
            <p>{data.message}</p>
        </div>
    )
}

export default Login