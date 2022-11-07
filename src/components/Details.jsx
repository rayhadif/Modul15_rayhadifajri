import {useParams} from 'react-router-dom'
import { Header } from './Header'
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Details = ()=>{
    //Line Code berikur merupakan fungsi untuk menerima parameter dari URL
    const {isbn} = useParams()
    const [database, setDatabase] = useState([])

    const fetchingAPI = async () => {
        await axios.get(`https://api.itbook.store/1.0/books/${isbn}`)
            .then(res => {
                setDatabase(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    console.log(database)
    useEffect(() => {
        fetchingAPI()
    }, [])

    //Silakan edit code berikut supaya dapat menampilkan buku sesuai dengan parameter ISBN di URL
    return(
        <>
        <div className="container">
            <Header/>
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                {/*Berikut ini merupakan template untuk informasi buku */}
                <div className="card flex-row flex-wrap" style={{width:"50rem",marginTop:"50px"}}>
                    <div className="card-header border-0">
                        <img src={database.image} alt="Buku.jpg" width="250" height="270" className="px-4" />
                    </div>
                    <div className="card-block p-4" style={{ width: "58%" }}>
                        <p className="card-title">{database.title}</p>
                        <p className="card-text">{database.subtitle}</p>
                        <p className="card-text">Authors : {database.authors}</p>
                        <p className="card-text">Language : {database.language}</p>
                        <p className="card-text">isbn10 : {database.isbn10}</p>
                        <p className="card-text">isbn13 : {database.isbn13}</p>
                        <p className="card-text">Pages : {database.pages}</p>
                        <p className="card-text">Year : {database.year}</p>
                        <p className="card-text">Rating : {database.rating}</p>
                        <p className="card-text">{database.desc}</p>
                        <p className='card-text'>{database.price}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}