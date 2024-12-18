import React from 'react'
import Occupation from './Occupation'
import GithubWidget from './GitHubContributions'

export default function Header() {
  return (
    <div className='w-5/6 h-full mt-5 flex items-center'>
        <div className=' text-whit gap-10'>

            <h1>
                Welcome
            </h1>

            <Occupation />
            <p className='mt-5 mb-5'>
            22 year old, Belgian/Native American fullstack developer.


            </p>
            <div className='flex justify-between'>
              <GithubWidget />
            </div>
        </div>
    
    </div>
  )
}
