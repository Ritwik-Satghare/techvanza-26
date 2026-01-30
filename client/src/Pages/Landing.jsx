import React from 'react'
import Logo from '../Components/logo'
import { useState } from 'react'

const Landing = () => {
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")

    const validate = (regex, input) => {
        return patterns[regex].test(input);
    }

    const patterns = {
        username: /^[a-z\d-]{3,15}$/i,
        email: /^([a-z\d\.-])+@([a-z]+\.([a-z]{2,8}))$/,
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[*@\-/$%&])[a-zA-Z\d*@/\-$%&]{8,}$/
    }
    return (

        <div>
            <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .pop{
    font-family:"Poppins";
    }
    `}
            </style>
            <div className='bg-green-500 h-20'>Navbar</div>
           
                <div className='flex flex-col justify-center items-center mt-10 '>
                    <div className='bg-gray-300 flex w-150  flex-col justify-center items-center rounded-3xl'>
                        <div className='pop'>Signup</div>
                        {/* Username Input */}
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full h-14 pl-5 bg-white/10 rounded-full text-white placeholder-indigo-200/50 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-14 pl-5 bg-white/10 rounded-full text-white placeholder-indigo-200/50 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />

                        {/* Password Input */}
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-14 pl-5 bg-white/10 rounded-full text-white placeholder-indigo-200/50 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>
                </div>

        </div>

    )
}

export default Landing