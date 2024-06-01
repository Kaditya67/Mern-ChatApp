import React from 'react';
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className="text-3xl font-semibold text-center text-grey-300">
          Sign Up 
          <span className="text-blue-500"> ChatApp</span>
          </h1>
      <form>
      <div>
            <label className="label p-2">
              Full Name
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Aditya Ojha"
            />
          </div>
          <div>
            <label className="label p-2">
              Username
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div>
            <label className="label p-2">
              Password
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <label className="label p-2">
              Password
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter Confirm Password"
            />
          </div>

          {/* CheckBox */}
          <GenderCheckbox />


          <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </a>
          <div>
            <button
              className="btn btn-block btn-sm mt-2"
              type="submit"
            >
              Sign Up
            </button>
          </div>
      </form>
      </div>
      </div>
  );
};

export default SignUp;
// import React from 'react';
// import GenderCheckbox from './GenderCheckbox';

// const SignUp = () => {
//   return (
//     <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className="text-3xl font-semibold text-center text-grey-300">
//           Sign Up 
//           <span className="text-blue-500"> ChatApp</span>
//           </h1>
//       <form>
//       <div>
//             <label className="label p-2">
//               Full Name
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               type="text"
//               placeholder="Aditya Ojha"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               Username
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               type="text"
//               placeholder="Enter Username"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               Password
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               type="password"
//               placeholder="Enter Password"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               Password
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               type="password"
//               placeholder="Enter Confirm Password"
//             />
//           </div>

//           {/* CheckBox */}
//           <GenderCheckbox />


//           <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//             Already have an account?
//           </a>
//           <div>
//             <button
//               className="btn btn-block btn-sm mt-2"
//               type="submit"
//             >
//               Sign Up
//             </button>
//           </div>
//       </form>
//       </div>
//       </div>
//   );
// };

// export default SignUp;