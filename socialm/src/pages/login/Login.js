import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SmartCity</h3>
                <span className="loginDesc">
                    Connects with friends and the world around you on SmartCity
                    </span>
                </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Email" className="loginInput"/>
                            <input placeholder="Password" className="loginInput"/>
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">Create a new Account</button>
                            </div>           
                    </div>
            </div>
        </div>
  );
}

