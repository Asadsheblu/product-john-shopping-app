import React from 'react';
import logo from ".././images/Logo.svg"
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#"><img src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto me-5">
        <li class="nav-item">
          <a class="nav-link active text-light menu" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light menu" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light menu" href="#">Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light menu">Inventory</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;