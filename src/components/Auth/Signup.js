import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../Constant/API";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    axios
      .post(`${API}/register`, {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then((res) => {
        console.log(res);
        setData(res);
        if (res.status === 200) {
          setLoading(false);
          toast.success(res.data.message);
          setTimeout(() => {
            window.location.href = "/login";
          }, [1500]);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.message);
      });
  };

  return (
    <div>
      <div className="flex flex-col  h-screen">
        <div className="bg-[#42BFA5] h-[200px]"></div>
        <div className="bg-[#D9DAD4]  grow shrink">
          <div className="shadow-md flex  justify-evenly rounded-sm  relative top-[-100px]  bg-[white] p-8 h-[360px] w-[80%] m-auto">
            <div className="w-[40%]">
              <div className="text-[24px] text-[#6e7171] ">
                Use WhatsApp On your computer
              </div>
              <div className="flex w-full mt-6">
                <div className="w-[10%]">1.</div>
                <div className="w-[90%] text-[#252525]">
                  Open Whatsapp on your phone
                </div>
              </div>
              <div className="flex w-full mt-6">
                <div className="w-[10%]">2.</div>
                <div className="w-[90%] text-[#252525]">
                  Register Yourself on this website
                </div>
              </div>
              <div className="flex w-full mt-6">
                <div className="w-[10%]">3.</div>
                <div className="w-[90%] text-[#252525]">
                  Login with your phone number
                </div>
              </div>
              <div className="  w-full mt-2">
                <div className="font-semibold  w-1/2 text-center">OR</div>
                <Link to="/login">
                  <div className="mt-2">
                    Click here to <b>Login</b> if you already have an account
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-[40%]">
              <div className="text-[24px] pb-2  text-center text-[#6e7171] ">
                Signup you account
              </div>
              <div className="w-[100%] m-auto p-2 ">
                <div className="w-[90%] flex items-center m-auto text-center">
                  <div className="w-[40%] text-left">
                    <label className="text-[#252525] ">Name</label>
                  </div>
                  <div className="w-[60%] m-auto">
                    <input
                      class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Name"
                      name={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[90%] mt-4 flex items-center m-auto text-center">
                  <div className="w-[40%] text-left">
                    <label className="text-[#252525] ">Email</label>
                  </div>
                  <div className="w-[60%] m-auto">
                    <input
                      class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Email"
                      name={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[90%] mt-4 flex items-center m-auto text-center">
                  <div className="w-[40%] text-left">
                    <label className="text-[#252525]">Phone Number</label>
                  </div>
                  <div className="w-[60%] m-auto">
                    <input
                      class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Phone Number"
                      name={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[90%] mt-4 flex items-center m-auto text-center">
                  <div className="w-[40%] text-left">
                    <label className="text-[#252525]">Password</label>
                  </div>
                  <div className="w-[60%] m-auto">
                    <input
                      class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Password"
                      name={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[90%] mt-4 flex items-center m-auto text-center">
                  <div className="w-full">
                    {data.status == 200 ? (
                      <button
                        class="bg-[#42BFA5] cursor-not-allowed  flex items-center justify-center hover:bg-blue-700 text-white  w-[100%] p-2 border  rounded"
                        disabled
                      >
                        <div class="flex items-center justify-center">
                          <div
                            class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status"
                          >
                            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                              Loading...
                            </span>
                          </div>
                        </div>
                        &nbsp; Submitting....
                      </button>
                    ) : (
                      <button
                        class="bg-[#42BFA5] hover:bg-blue-700 text-white  w-[100%] p-2 border   rounded"
                        onClick={handleSubmit}
                      >
                        Signup
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
