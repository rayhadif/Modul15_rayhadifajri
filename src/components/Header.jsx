import React from 'react';
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import './header.css'

export const Header = ()=>{
  const navigate = useNavigate()
  const [texts, setTexts] = useState('')

  return(
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div class="navbar-brand" id='tobu'>Toko Buku Asadel</div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="/">New Arrival</a>
            </li>
          </ul>
          <form action="" class="d-flex">
            <label for="validationServer02" class="form-label"></label>
              <input class="form-control is-valid" type="search" placeholder="Finds the Book" id='validationServer01' aria-label="Search" onChange={(e) => setTexts(e.target.value)}></input>
            <div class="valid-feedback" id="validations">Looks good!</div>
            <button onClick={() => { navigate("/" + texts) }} type="submit" class="btn btn-light" >Search</button>
            <script>console.log(texts)</script>
          </form>
        </div>
      </nav>
      <Outlet/>
    </> 
  )
}