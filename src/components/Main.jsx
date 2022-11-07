import { Header } from "./Header";
import {useNavigate} from 'react-router-dom'
import React from "react";
import { useEffect, useState} from 'react';
import axios from 'axios';


/*Silakan edit code di bawah agar dapat menampilkan daftar buku baru dari API secara dinamis */
/* HINT : Gunakan mapping array */
export const Main = () => {
    const navigate = useNavigate()
    const [database, setDatabase] = useState([])

    const fetchingAPI = async () => {
        await axios.get('https://api.itbook.store/1.0/new')
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
                    <h5 style={{ width: "48rem", marginTop: "50px" }}>New Arrival</h5>
                    {database.map((form) => (
                        <div className="card flex-row flex-wrap " style={{ width: "48rem", marginTop: "50px" , borderImage:"linear-gradient(#f6b73c, #4d9f0c) 30" ,boxShadow: "3px 6px #888888"}} onClick={() => { navigate('/book/' + form.isbn13) }}>
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
                    ))}
                </div>
            </div>
        </>

    )
}