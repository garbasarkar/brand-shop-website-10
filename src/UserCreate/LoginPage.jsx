import { Link } from "react-router-dom";
import google from "/src/assets/image/google.jpg";
import { useContext } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../PrivateRouter/firebase.config";

const LoginPage = () => {
  const {loginUserAuth} = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
    loginUserAuth(email, password)
    .then(result => {
      console.log(result.user)
      form.reset();
    })
    .catch(error => {
      console.log(error)
    })
  };

  const googleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" mt-32">
      <div className="w-2/2 px-2 md:w-2/6 mx-auto">
        <div className="text-white py-10 bg-purple-600 text-center font-semibold text-2xl md:text-3xl">
          <h1>Login Now!</h1>
        </div>
        <form onSubmit={handleLoginForm}>
          <input
            className="py-2 rounded border w-full mt-3 pl-2"
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />
          <br />
          <input
            className="py-2 rounded border w-full mt-3 pl-2"
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
          />
          <br />
          <input
            className="py-2 rounded border w-full mt-5 pl-2 bg-purple-600 text-white"
            type="submit"
            value="Login"
          />
          <div className=" mt-3">
            <p>
              All Ready Register?{" "}
              <Link className="text-purple-500 font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
          <div className="flex justify-center mt-8 cursor-pointer">
            <div
              onClick={googleLogIn}
              className="w-full md:w-2/3 flex items-center gap-5 border justify-between px-4 p-2 rounded-full shadow"
            >
              <img className="w-8" src={google} alt="" />
              <h1>Continue With Google</h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;