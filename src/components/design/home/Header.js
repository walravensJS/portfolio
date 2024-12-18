import React from 'react'
import Occupation from './Occupation'
import GithubWidget from './GitHubContributions'
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdClass } from "react-icons/md";

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;





export default function Header() {
  return (
    <div className='w-5/6 h-screen flex flex-col justify-around gap-10'>
        <div className=' text-whit gap-10'>

            <div className=''>
              <h1 className='leading-none'>
                Stijn
                  <br/>
                Walravens
              </h1>
            </div>

            <Occupation />
            <p className='mt-5 mb-5'>
            22 year old, Belgian/Native American fullstack developer and Designer.
            </p>

            <div className='flex gap-5 items-center text-purple-500 font-bold hover:cursor-pointer'>
              <a href='https://www.linkedin.com/in/stijn-walravens-7b0b4b1b3/' target='_blank' rel='noreferrer'>
                Reach out
              </a>
              <FaExternalLinkAlt />
            </div>
        </div>
        <div className='flex w-full justify-between gap-10'>
              <GithubWidget username={username} token={token}  />
              <div className='flex items-center gap-5'>
              <MdClass 
                className='text-purple-500'
              />
               <div>
                <h2 className='font-bold'>Current Project</h2>
                <p>Logo design</p>
               </div>
              </div>
          </div>
    
    </div>
  )
}
