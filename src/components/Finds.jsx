import { Header } from "./Header";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';


export const Finds = () => {
    const { query } = useParams()
    const [database, setDatabase] = useState([])
    const navigate = useNavigate()
    const fetchingAPI = async () => {
        await axios.get(`https://api.itbook.store/1.0/search/${query}`)
            .then(res => {
                setDatabase(res.data.books)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    console.log(database)
    useEffect(() => {
        fetchingAPI()
    }, [])
    return (
        <>
            <div className="container">
                <Header />
                <div className="d-flex justify-content-end flex-column" style={{ alignItems: "center" }}>
                    {database.map((form) => (
                        <>
                            <div className="card flex-row flex-wrap" style={{ width: "48rem", marginTop: "50px" }} onClick={() => { navigate('/book/' + form.isbn13) }}>
                                <div className="card-header border-0">
                                    <img src={form.image} alt="Buku.jpg" width="200" height="220" class="px-4" />
                                </div>
                                <div className="card-block p-4" style={{ width: "50%" }}>
                                    <h4 className="card-title">{form.title}</h4>
                                    <p className="card-text">{form.subtitle}</p>
                                    <p className="text-muted">{form.isbn13}</p>
                                    <h5>{form.price}</h5>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}