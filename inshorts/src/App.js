
import './App.css';
import { useState,useEffect } from 'react';
import Header from './Components/Header';
import News from './Components/News';
import axios from 'axios';
import Footer from './Components/Footer';

function App() {
const [category, setcategory] = useState("general");
const [newsArray, setnewsArray] = useState([])
const [newResults, setnewResults] = useState()
const [loadMore, setLoadMore] = useState(20)
const newsApi=async()=>{
  try{
  const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey={add your api key}&pageSize=${loadMore}`);
  setnewsArray(news.data.articles);
  setnewResults(news.data.totalResults);
  // console.log(newsArray);
  // console.log(news);
  }
  catch(error){
    console.log(error);
  }
}
useEffect(() => {
newsApi();//eslint-disable-next-line
  
}, [category,newResults,loadMore])
  return (
    <div className="App">
      <Header setcategory={setcategory}/>

      <News newsArray={newsArray}
        newResults={newResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer/>
    </div>
  );
}

export default App;
