
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const auth = getAuth();

const Login = () => {
    const [success, setSucess] = useState(false);
    const [errorMesseage, setErrorMessage] = useState('');
    const [resetEmail, setResetEmail] = useState('');

    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleSignInWithFacebook = () =>{
        signInWithPopup(auth, facebookProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            setErrorMessage(error.message)
        })
    }

    const handleSignInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            setErrorMessage(error.message)
        })

    }

    const handleSignInWithGitHub = () =>{
        signInWithPopup(auth, gitHubProvider )
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        /* .catch((error) => {
            setErrorMessage(error.message)
        }) */
    }


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            setSucess(true);
            form.reset();
            console.log(user);
            
        })
        .catch(error =>{
            setErrorMessage(error.message)
        })
    }
    
   const handleEmailReset = (event) =>{
      const email = event.target.value;
      setResetEmail(email);
   } 


   const handleResetPassword = () =>{
            if(!resetEmail){
                alert('Please enter your email address');
                return;
            }
            sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                alert('Reset email sent to your email')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)

            });
            setSucess(false);
            setErrorMessage('');
   }

    return (
        <div className='flex justify-center p-5'>
           <form className='flex flex-col gap-3 w-72' onSubmit={handleSubmit}>
                <p className='text-2xl font-semibold text-success'>Please Log in</p>
                <input onBlur={handleEmailReset} type="email" placeholder="Your email" name='email' className="input input-bordered input-accent w-full max-w-xs" required />
                    <input type="password" placeholder="Your Password" name='password' className="input input-bordered input-accent w-full max-w-xs" required />
                    {
                        success && <p className='text-success'>Login Successfull</p> 
                    }
                    <p>{errorMesseage}</p>
                <button className="btn btn-success text-white" type='submit'>Log in</button>
                <div>
                    <span>forget password?</span>
                    <button className="btn btn-link" onClick={handleResetPassword}>reset</button>
                </div>
                <p><small>Are you new to this website? please <Link to='/register' className='text-primary underline'>Register</Link></small></p>
                <p><small>Log in with one of the following: </small></p>
                <button className="btn btn-primary" onClick={handleSignInWithFacebook}> Facebook</button>
                <button className="btn border-t-orange-500 bg-orange-500" onClick={handleSignInWithGoogle}> Google</button>

                <button className="btn border-t-orange-500 bg-orange-500" onClick={handleSignInWithGitHub}> Github</button>
           </form>
           
        </div>
    );
};

export default Login;