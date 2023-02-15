import { CMS_NAME, CMS_URL } from '../lib/constants'
import React from 'react';

export default function Intro() {
  return (
    // Your components here
    <div className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12' style={{backgroundImage: `url("https://idw.design/wp-content/uploads/2023/02/4-edited.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50%"
    
    }}>
    
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Journal
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Market Analysis by {' '}
        <a
          href="https://idw.design/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          IDW Design & Build
        </a>{' '}
        for {' '}
      
          Industires
        
        .
      </h4>
      
 
    </div>
  )
}

//create background image in section using tsx in nextjs
