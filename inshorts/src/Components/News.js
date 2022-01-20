import { Container } from '@material-ui/core'
import React from 'react'
import './News.css'
import Newscard from './Newscard'

export default function News({newsArray,newResults,loadMore,setLoadMore}) {
    return (
    <Container maxWidth="md">
  <div className='content'>
   <div className='download'>
       <span className='downText'>For the best experience ise inshorts App on your smartphone</span>
    <img src="https://www.nicepng.com/png/detail/25-253876_app-store-and-google-play-with-your-own.png"
    height="80%" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"
    height="80%" />
  
   </div>

{
     newsArray.map((item)=>
     (
       <Newscard item={item}
         key={item.title}
       />
     ))
}
{loadMore <= newResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
   
  </div>
    </Container>
    )
}
