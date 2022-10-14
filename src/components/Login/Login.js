import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center p-5'>
           <form className='flex flex-col gap-3 w-72'>
                <p className='text-2xl font-semibold text-success'>Please Log in</p>
                <input type="email" placeholder="Your email" name='email' className="input input-bordered input-accent w-full max-w-xs" />
                    <input type="password" placeholder="Your Password" name='password' className="input input-bordered input-accent w-full max-w-xs" />
                <button className="btn btn-success text-white" type='submit'>Log in</button>
                <p><small>Are you new to this website? please <Link to='/register' className='text-primary underline'>Register</Link></small></p>
           </form>
          
        </div>
    );
};

export default Login;