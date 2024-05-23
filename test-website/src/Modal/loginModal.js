import React, { useState } from "react";

const LoginModal = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginForm = () => {
        console.log('email :', email)
        console.log('passwowrd:', password)
    }

    return(
        <>
            <section id="login" className="section d-flex flex-column">
                <div className="border rounded p-5">
                    <h1>Login</h1>

                    <div className="pt-5">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input class="form-control" id="exampleFormControlInput1" rows="3" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <span className="btn btn-info" onClick={loginForm}> Login</span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LoginModal