import React from 'react'
import Occupation from './Occupation'
import Looking from './Looking'
import GithubWidget from './GitHubContributions'

export default function Header() {
  return (
    <div className='w-1/2 h-fit mt-5'>
        <div className=' text-whit gap-10'>

            <h1>
                Portfolio
            </h1>
            <Occupation />
            <p className='mt-2'>
            I'm a full stack developer and graphic designer with a knack for weaving digital magic. By day, I'm deep into the world of web development, using tools like Express, Eleventy, and React.js to create seamless online experiences. But when the workday's done, you'll find me freelancing as a graphic designer, bringing local clients' dreams to life, especially for weddings and events. Outside of work, I'm all about gaming, movie marathons, and getting lost in a good book. And when it comes to design tools, Adobe is my playground. Let's team up and make some digital dreams a reality!
            </p>
            <Looking />
            <div className='flex justify-between'>
              <GithubWidget />
            </div>
        </div>
    
    </div>
  )
}
