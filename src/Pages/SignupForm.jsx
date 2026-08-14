import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignupForm=()=>{

    const [user, setUser] = useState({
        username : "",
        password: "",
        email: "",
        mobile: 0,        
    })

    function handleChange(e){
        setUser({
            ...user, [e.target.name] : e.target.value
        })      
                
    }

    function signup(e){
        
        e.preventDefault(); // mandatory for form submission

        // form data validation
        // API call(POST)
        console.log(user);

        // setUser({
        //     username : "",
        //     password: "",
        //     email: "",
        //     mobile: 0,  
        // })

       
    }
 
   const navigate = useNavigate();

    return <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
      Register
    </h2>

    <form onSubmit={signup} className="space-y-5">
      <div>
        <input
          type="text"
          name="user"
          onChange={handleChange}
          placeholder="Username"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <input
          type="password"
          name="pass"
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <input
          type="tel"
          name="mobile"
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        onClick={()=>{navigate("/")}}
      >
        Sign in
      </button>
    </form>
  </div>
</div>
        
    </>
}

export default SignupForm;