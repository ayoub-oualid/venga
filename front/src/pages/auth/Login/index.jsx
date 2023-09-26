
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Session/useAuth";

function LoginIndex() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    // If user is already authenticated, navigate them to the desired route
    if (user ) {
      console.log("User already authenticated, redirecting...");
      navigate('/');  // Change this to the desired route
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies in the request
        body: JSON.stringify({ email, password }),
      });
      console.log('response:', response);

      if (response.ok) {
        // Logique de connexion réussie
        console.log('Connexion réussie');
        const userData = await response.json();

        //console.log('userData:', userData);

        // Store the user role in session storage
        //sessionStorage.setItem('userRole', userData.role);

        // Redirect to dashboard
        navigate('/');

       // Effacer les messages d'erreur précédents
      } else if (response.status === 401) {
        const errorData = await response.json();
        if (errorData.error === 'invalid_email') {
          setErrorMessage('Adresse e-mail introuvable. Veuillez réessayer.');
        } else if (errorData.error === 'invalid_password') {
          setErrorMessage('Mot de passe incorrect. Veuillez réessayer.');
        } else {
          setErrorMessage('Identifiants incorrects. Veuillez réessayer.');
        }
      } else {
        const errorData = await response.json();
        setErrorMessage("Une erreur s'est produite. Veuillez réessayer ultérieurement.");
      }

    } catch (error) {
      console.error('Error signing in:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };
  const LoginImage =
    "https://api.vector.ma/vectors/download/d264587f-e711-482b-ad1c-1fc01651e52e?type=png&size=1024";
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex w-full flex-col md:flex-row">
          {/* Image */}
          <div className="md:bg-white-500 md:min-h-screen flex flex-wrap md:w-1/2">
            <div className="items-center text-center flex flex-col relative justify-center mx-auto">
              <img
                src={LoginImage}
                alt="Logo Login"
                className="md:w-72 w-48 mx-auto"
              />
              <div className="md:block hidden text-slate-100">
                <h1 className="font-bold text-2xl pb-2 text-red-800">
                  Login to Your Account
                </h1>
              </div>
            </div>
          </div>
          {/* Login Section */}
          <div className="flex flex-col bg-red-800 md:flex-1 items-center justify-center">
            <div className="loginWrapper flex flex-col w-full lg:px-36 md:px-8 px-8 md:py-8">
              {/* Login Header Text */}
              <div className="hidden md:block font-medium self-center text-xl sm:text-3xl text-gray-300">
                Welcome Back!
              </div>

              {/* Sparator */}
              <div className="hidden md:block relative mt-10 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-red-800 px-4 text-xs text-gray-100 uppercase">
                    Login
                  </span>
                </div>
              </div>

              <div className="md:hidden block my-4">
                <h1 className="text-2xl font-semibold">Login</h1>
              </div>

              {/* Login Form */}
              <div className="md:mt-10 mt-4">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="flex flex-col mb-3">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>

                      <input
                        id="email"
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400"
                        placeholder="Username"
                      />
                    </div>
                    {errorMessage && <p style={{ color: 'red', display: 'block' }}>{errorMessage}</p>}
                    
                  </div>

                  {/* Password */}
                  <div className="flex flex-col mb-6">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faLock} />
                      </div>

                      <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400"
                        placeholder="Password"
                      />
                    </div>
                    {errorMessage && <p style={{ color: 'red', display: 'block' }}>{errorMessage}</p>}
                  </div>
                  {/* Button Login */}
                  <div className="flex w-full">
                    <button
                      type="submit"
                      className="flex items-center justify-center focus:outline-none text-red-800 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 md:uppercase">
                        {"Login"}
                      </span>
                    </button>
                  </div>
                </form>
                <div className="hidden md:block relative mt-12 h-px bg-gray-300">
                  <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span className="bg-red-800 px-4 text-xs text-white uppercase">
                      Or create new account
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-12">
                  <Link
                    to="/auth/register"
                    className="flex items-center justify-center focus:outline-none text-red-800 text-sm bg-gray-100 hover:bg-gray-300 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                  >
                    <span className="mr-2 md:uppercase">Register</span>
                  </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginIndex;
