import { useEffect, useState } from "react"
import '../component/Assets/css/home.css';
import axios from "axios";
import starwar from '../component/Assets/images/star-wars-4.svg'

function Home() {

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true)
  const [rollFilter, setrollFilter] = useState('')


  useEffect(() => {
    axios.get(`https://swapi.dev/api/films`)
      .then(res => {
        setData(res.data.results)
        setloading('true')
        console.log(res.data.results)
      }).catch(err => console.log(err))
      setTimeout(() => setloading(false), 6000)
  }, [])




  console.log('this is data', data)


 

  const changeRole = (e)=> {
   setrollFilter(e.target.value)
  }

  const filterFilm = data.filter(d => d.title.includes(rollFilter))

  const info = filterFilm.map(d => (
    <div className="item-container" key={d.title}>
        <h5 style={{textAlign: 'center'}}>{d.title}</h5>
        <p style={{textAlign: 'center'}}>Author:{d.director}</p>
        <p style={{textAlign: 'center'}}>producer:{d.producer}</p>
        <p style={{textAlign: 'center'}}>release date:{d.release_date}</p>
        <p style={{textAlign: 'center'}}>release date:{d.characters.name}</p>
        
    </div>
  ))

  return (

    
      <>

      <div className="logo">
          <img src={starwar} alt="" className="img-log"  />
        </div>

       {loading ? (
         <div className="spinner-border text-warning" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
       ): (
         <div>
            <div className="search-container">
          <select class="form-select" aria-label="Default select example" onChange={changeRole}>
             <option value={''}>choose a movie</option>
               {data.map(d => (
               <option key={d.title}>{d.title}</option>
          ))} 
          </select>
      

          
{     /* list of star wars film     */}

   

        </div>
         

        <div className="main-container">
           {info}
        </div>
         </div>
       )

       }
        
         
         


      </>
    

  );
}

export default Home;