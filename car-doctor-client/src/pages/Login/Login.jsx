import { Link } from "react-router-dom";
import logo from "../.././assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
  const { signInUser } = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={logo} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body ">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full bg-slate-200"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input  w-full bg-slate-200"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <input
                  className="btn btn-success btn-block mt-4"
                  type="submit"
                  value="LOGIN"
                />
              </fieldset>
            </form>
            <p className="text-sm">
              New to CarDoctor?{" "}
              <Link to="/signup" className="text-orange-500 font-bold">
                Sign up now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
