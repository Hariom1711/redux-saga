import React, { useSyncExternalStore } from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {

    const result =useSelector((state)=>state.cartData)
    console.log('redux data' , result)
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
    <Link to='/'>
    <a class="navbar-brand" href="#">Navbar</a>
      </Link>  
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}

    <Link to='/cart'>
    <Badge badgeContent={result.length} color="primary">
    <  ShoppingCartIcon color="action" />
    </Badge>

      
     
    </Link>
    
   
    </div>
  </nav>
  )
}

export default Header