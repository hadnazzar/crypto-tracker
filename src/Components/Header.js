import React from 'react';
import { Link } from 'react-router-dom'

const header = () => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to='/'>CryptoTracker</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to='/'>Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to='/liquidity'>Liquidity</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default header;