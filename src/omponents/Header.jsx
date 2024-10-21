import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';



function Header() {

  const {carts} = useSelector((state) =>state.allCart)
  console.log(carts);
  


  return (
    <>
     <Navbar style={{ height: "60px", background: "black", color: "white" }}>
                <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-2">
                    <h3 className='text-light'>Ecommerce</h3>
                </NavLink>
                    <NavLink to="/card" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                    </NavLink>
                   
                </Container>
            </Navbar>
    </>
  )
}

export default Header