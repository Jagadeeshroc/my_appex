import { Link } from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <img src=" https://media-hosting.imagekit.io//a296024100f64ab1/Screenshot%202025-03-10%20182743.png?Expires=1836219628&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=b374ghJagDo6~kHWOp28M53sc4HQjXOTh5Vjwg9g5Yn29xOIKmDOnw1MA-wFg0W5xhBkAxQlqv781P8nMlzTm531rPow3elwiMX0wmwkLWjoh9u5DfuCIQSnoH3fDpjD5dTgwCwkzZffu2J3CaC94JHUNEI3nBdx2tGeGk1M4GXsXO7DUdy5phcUP2ho9SABWBN1JmwzUfA3QKq7QInTsnwheM-c3m~DkBJAv1ARj6uwDXbF9c-zyVthN3Ai5B5DYTou9PRh5iqWzmmOxNNdk4kBC-2SqkHtNkpzvCUdrz-IAFQndjpzQCiM~-JKbiHa7V201pl9p~R7W1eZRfwkgw__" className="image" alt="Company Logo" /> 
      <div>
            <ul className="nav-menu">
                <Link className="nav-link" to="/">
                Home
                </Link>
                <Link className="nav-link" to="/about">
                About
                </Link>
                <Link className="nav-link" to="/contact">
                Contact
                </Link>
            </ul>
        </div>    
    </div>


  </nav>
)

export default Header