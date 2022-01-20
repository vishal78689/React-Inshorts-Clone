import React from 'react'
import News from './News'
import './Newscard.css'

const Newscard = ({item}) => {
  
    //2021-01-09T12:15:30Z
  const fulldate = new Date(item.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;


    return (
        <div className='newsCard'>
            <img alt={item.title}
                src={item.urlToImage}
                className='img'
            />
           <div className='newsText'>

               <div>
                   <span className='title'>
                       {item.title}
                   </span>
                   <br />
                   <span className='author'>
                      <a href={item.url} target='__blank'>
                      <b> short</b> </a>{" "}
                      <span className='muted'>  {" "}
                       by {item.author?item.author:"unknown"}
                       /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
                       </span>
                   
                   </span>
               </div>
               <div className='lowerText'>
                   <div className='desc'>
                       {item.description}
                   </div>
                   <span className='readmore'> read more at{" "}
                   <a href={item.url} target='__blank' className='source'>
                      <b> {item.source.name}</b> </a>
                   </span>
               </div>
           </div> 
        </div>
    )
}

export default Newscard
