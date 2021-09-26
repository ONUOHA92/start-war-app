import React, { useEffect, useState } from "react"
import axios from "axios";
import starwar from '../component/Assets/images/star-wars-4.svg'
import '../component/Assets/css/people.css'

const People = () => {

    const [people, setPeople] = useState([]);
    const [loading, setloading] = useState(true)
    const [rollFilter, setrollFilter] = useState('')


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
            .then(res => {
                setPeople(res.data.results)
                setloading('true')
                console.log(res.data.results)
            }).catch(err => console.log(err))
        setTimeout(() => setloading(false), 6000)
    }, [])

    console.log('people data', people)


    const changeRole = (e)=> {
        setrollFilter(e.target.value)
       }

       const filterCharacter = people.filter(p => p.name.includes(rollFilter))



    return (
        <div>

            <div className="logo">
                <img src={starwar} alt="" className="img-log" />
            </div>

            {loading ? (
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
                   <div className="search-container">
                        <select class="form-select" aria-label="Default select example" onChange={changeRole}>
                            <option value={''}>character</option>
                            {people.map(d => (
                                <option key={d.name}>{d.name}</option>
                            ))}
                        </select>





                        {     /* list of star wars film     */}



                    </div>
                    <div className="table-responsive">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Height</th>
                                    <th scope="col">gender</th>
                                    <th scope="col">Mass</th>
                                    <th scope="col">hair color</th>
                                    <th scope="col">skin color</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterCharacter.map((p, i) => (
                                    <tr key={i}>
                                        <td>{p.name}</td>
                                        <td>{p.height}</td>
                                        <td>{p.gender}</td>
                                        <td>{p.mass}</td>
                                        <td>{p.hair_color}</td>
                                        <td>{p.skin_color}</td>
                                    </tr>

                                ))}
                            </tbody>

                        </table>
                    </div>


                </>
            )


            }

        </div>
    );
};

export default People;