import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../Constant/API";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = (e) => {
    try {
      setLoading(true);
      axios
        .post(
          `${API}/login`,
          {
            email: email,
            password: password,
            phonenumber: phone,
          }
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setData(res);
          if (res.status === 200) {
            toast.success(res.data.message);
            setTimeout(() => {
              window.location.href = "/";
            }, [1000]);
          }

        })
    }
    catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-[#42BFA5] h-[200px]"></div>
      <div className="bg-[#D9DAD4]  grow shrink">
        <div className="shadow-md flex  rounded-sm  justify-evenly relative top-[-100px]  bg-[white] p-8 h-[360px] w-[80%] m-auto">
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
              <Link to="/signup">
                <div className="mt-2">
                  Click here to <b>Signup</b> if you don't have an account
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <div className="text-[24px] pb-2  text-center text-[#6e7171] ">
              Login to your account
            </div>
            <div className="w-[100%] m-auto p-2 ">
              <div className="w-[90%] flex items-center m-auto text-center">
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
                    type="number"
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
                      class="bg-[#42BFA5]   flex items-center justify-center hover:bg-blue-700 text-white  w-[100%] p-2 border  rounded"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
