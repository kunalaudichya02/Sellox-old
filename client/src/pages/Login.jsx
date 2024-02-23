import { useState } from "react";

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
        <div>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <p>Password</p>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">login</button>
            </form>
            <p>{data.message}</p>
        </div>
    )
}

export default Login