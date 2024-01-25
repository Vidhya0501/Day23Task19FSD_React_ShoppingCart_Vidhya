import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar({cart}) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#">Fashion Spot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item fw-bold" href="#">All Products</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fw-bold" href="#">Popular Items</a></li>
            <li><a className="dropdown-item fw-bold" href="#">New Arrivals</a></li>
          </ul>
        </li>

        
      </ul>

      <form class="d-flex" role="search">
        <button class="btn btn-outline-dark">
          <FontAwesomeIcon icon={faCartShopping} className='pe-1'/>
          Cart
          <span className='badge bg-dark text-white ms-1 rounded-spill'>{cart}</span>
        </button>
      </form>

    </div>
  </div>
</nav>

<div className="home">
    <h1>Fashion Summer Sale</h1>
</div>
</div>
  )
}

export default Navbar