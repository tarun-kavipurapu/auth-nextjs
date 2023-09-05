"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  async function onLogin() {
    try {
      const res = await axios.post("api/users/login", user);
      console.log("success", res.data);
      //  toast.success("login sucessfully");
      router.push("/profile ");
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
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
                      <p className="mb-4">Please login to your account</p>
                      {/* Username input */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label htmlFor="exampleFormControlInput1">
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
                      {/* Password input */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label htmlFor="exampleFormControlInput11">
                          Password
                        </label>
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                        />
                      </div>
                      {/* Submit button */}
                      <div className=" pb-1 pt-1 text-center">
                        <div className=" pb-1 pt-1 text-center">
                          <button
                            className={`${
                              buttonDisabled
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed" // Add the disabled styles
                                : "bg-blue-500 hover:bg-blue-600 text-white hover:text-white" // Add the active styles
                            } px-6 py-2 rounded-md text-base font-medium uppercase focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            w-64
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                            disabled={buttonDisabled}
                            onClick={onLogin}
                          >
                            Log in
                          </button>
                        </div>
                        {/* Forgot password link below the login button */}
                        <div className="mb-4 pb-1 pt-1 text-center">
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>
                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <Link href={"/signup"}>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            Register
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
