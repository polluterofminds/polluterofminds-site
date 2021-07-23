import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <Fragment>
      <div className="text-black">
        <div className="mx-auto pb-12 lg:pb-16">
          <div className="px-6 py-6 bg-orange md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <StaticImage style={{borderRadius: 1000}} width={150} src="../images/me.jpg" alt="My personal avatar"className="mb-10" />
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                I'm Justin. <Link to="/writing"><u>I write</u></Link>. <a href="https://github.com/polluterofminds" target="_blank" rel="noopener noreferrer"><u>I code</u></a>. I start companies. Currently, I'm the Head of Product at <a href="https://pinata.cloud" target="_blank" rel="noopener noreferrer"><u>Pinata</u></a>.
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-black">
                If you give your email, I promise not to abuse it, and to only delight you. 
              </p>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-black">Want to know what I'm working on <Link className="text-black" to="/now"><u>now</u></Link>? Want to <Link to="/contact"><u>work with me</u></Link>? Maybe you just want to see some of the cool things I've been <Link to="/studios"><u>building for writers</u></Link>.</p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-black bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Join the club
                </button>
              </form>              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
