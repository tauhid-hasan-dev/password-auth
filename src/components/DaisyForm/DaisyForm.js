import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const DaisyForm = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSucess] = useState(false)
    const handleRegister = (event) =>{
        event.preventDefault();
        setSucess(false);


        const form = event.target;
         const email = event.target.email.value;
         const password = event.target.password.value;
         console.log(email, password);

         if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setPasswordError('Please provide at least two uppercase');
          return
         }

         if(password.length < 6){
          setPasswordError('Password should be at least 6 character');
          return
         }

         if(!/(?=.*[!@#$&*])/.test(password)){
          setPasswordError('Password should have at least one special character');
          return
         }


         createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
            setSucess(true);
            setPasswordError('')
            form.reset();
         })
         .catch(error =>{
            setPasswordError(error.message)
         })
    }

    return (
      <div className='flex justify-center p-5'>
      <form className='flex flex-col gap-3 w-72' onSubmit={handleRegister}>
           <p className='text-2xl font-semibold text-primary'>Please Register</p>
           <input type="email" placeholder="Your email" name='email' className="input input-bordered input-accent w-full max-w-xs" required />
               <input type="password" placeholder="Your Password" name='password' className="input input-bordered input-accent w-full max-w-xs" required />
               <p className='text-red-500' >{passwordError}</p>
            {
              success && <p className='text-success'>Your account is created successfully</p>
            }
           <button className="btn btn-primary text-white" type='submit'>Register</button>
           <p><small>Already have an account please <Link to='/login' className='text-primary underline'>Log in</Link></small></p>
      </form>
   </div>
    );
};

export default DaisyForm;

