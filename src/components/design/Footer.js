import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t-1 border-white text-white mt-10 h-fit pb-10">
        <div className='flex justify-between w-[95%] m-auto'>
        <div>
            <ul className="flex justify-between gap-5">
                <li className="text-center">
                    <a href="/'">Home</a>
                </li>
                <li className="text-center">
                    <a href="/projects">Projects</a>
                </li>
                <li className="text-center">
                    <a href="/about">About</a>
                </li>
            </ul>
        </div>
        <div>
            <p>
                Stijn Walravens
            </p>
            <p className='mt-2'>
                stijn.walravens@outlook.com
            </p>

            <ul className="mt-5">
                <li>
                    <a href="https://www.linkedin.com/in/stijn-walravens-4263b618b?original_referer=" target="_blank" rel='noreferrer'>LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/pgm-stijwalr" target="_blank" rel='noreferrer'>Github</a>
                </li>
                <li>
                <a href="https://www.instagram.com/walravens.js/" target="_blank" class="social-link" rel="noreferrer"><p>Instagram</p></a>                </li>

             </ul>   
        </div>
        </div>
    </footer>
  );
}
