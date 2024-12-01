import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Login = () => {
    const {loginWithGoogle, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handelGoogleLogin = () => {
        loginWithGoogle()
        .then(res => {
            setUser(res.user)
            navigate('/')
        })
    }

    const handelSignIn = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = {name, email}
        fetch('https://notpad-server.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
     return (
    <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
            <h1 className="text-3xl font-semibold tracking-tight text-center">Sign In With Google</h1>
            <button onClick={handelGoogleLogin} className="mx-auto mb-4 mt-8 block rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mr-2 inline-block h-5 w-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                        Continue with Google
            </button>
        </div>
    );
};

export default Login;