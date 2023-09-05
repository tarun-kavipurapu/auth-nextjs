"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function SignUppage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const showToast = () => toast("Here is your toast.");

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.password.length > 0 &&
      user.email.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  async function signUp() {
    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);
      router.push("/login");
    } catch (error: any) {
      toast.error("Error:", error);
    }
  }

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full items-center justify-center">
          {/* Left Column - User Login Form */}
          <div className="px-4 md:px-0 lg:w-6/12">
            <div className="md:mx-6 md:p-12">
              <div className="text-center">
                {/* Logo */}
                <img
                  className="mx-auto w-48"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                  We are The Lotus Team
                </h4>
              </div>

              {/* Login Form */}
              <form>
                {/* ... Your form inputs ... */}
                <p className="mb-4">Please Sign Up to your account</p>
                {/* Username input */}
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <label htmlFor="exampleFormControlInput1" className="">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <label htmlFor="exampleFormControlInput1" className=" ">
                    Username
                  </label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </div>

                {/* Password input */}
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <label htmlFor="exampleFormControlInput11" className="">
                    Password
                  </label>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput11"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>

                {/* Submit button */}
                <div className="mb-12 pb-1 pt-1 text-center">
                  <button
                    className={`${
                      buttonDisabled
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed" // Add the disabled styles
                        : "bg-blue-500 hover:bg-blue-600 text-white hover:text-white" // Add the active styles
                    } px-6 py-2 rounded-md text-base font-medium uppercase focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    disabled={buttonDisabled} // Set the 'disabled' attribute
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                    onClick={signUp}
                  >
                    Signup
                  </button>
                </div>
              </form>
              <Link href={"/login"} className="flex justify-center">
                <button
                  type="button"
                  className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
