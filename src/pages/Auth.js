import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom"

function Auth() {
    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    })

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const history = useHistory()

    const handleInputs = (event) => {
        const namee = event.target.name;
        const value = event.target.value;

        setUser({ ...user, [namee]: value })
    }

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    const setData = async (event) => {
        event.preventDefault()

        const res = await fetch('/adminLogin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,password
            })
        })

        const data = await res.json()

        if (res.status === 201) {
            localStorage.setItem('token', data.token)
            window.alert('Dang Nhap THanh COng')
            history.push('/')
        }
        else {
            window.alert('Khong co tai khoan nay')
        }
    }

    const postData = async (event) => {
        event.preventDefault()

        const { name, email, phone, password, cpassword } = user

        const res = await fetch('/adminRegister', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword
            })
        })

        const data = await res.json()

        if (res.status === 201) {
            localStorage.setItem('token', data.token)
            window.alert('Dang Ky THanh Cong')
            history.push('/')
        }
        else {
            window.alert('Dang Ky KHong THanh COng')
        }
    }

    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" method="POST">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={setData}>
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="123">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" method="POST">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control mt-1"
                            placeholder="Ten cua ban"
                            value={user.name}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            value={user.email}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Phone</label>
                        <input
                            name="phone"
                            type="tel"
                            className="form-control mt-1"
                            placeholder="Phone Number"
                            value={user.phone}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                            name="cpassword"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            value={user.cpassword}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={postData}>
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="123">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Auth