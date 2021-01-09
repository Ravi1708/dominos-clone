import React from 'react'
import logo from './img/Logo.svg'
import Appstore from './img/Appstore.svg'
import Playstore from './img/Playstore.svg'
import calorie from './img/calorie.svg'
import veg from './img/Veg.svg'
import Banner1 from './img/Banner1.webp';
import Banner2 from './img/Banner2.jpeg'
import Banner3 from './img/Banner3.jpeg'
import burger from './img/burger.webp'
import empty_cart from './img/Empty_cart.svg'
import './home.css'
import {Row,Col,Button} from 'react-bootstrap'


function Home() {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbrand'>
                    <img src={logo} />
                </div>
                <div className='nav-delivery'>
                    <p>Delivery</p>
                    <input placeholder='Location not set' type='text' className='location' />
                </div>
                <div className='nav-applink'>
                    <p>Now</p>
                    <div className='applinks'>
                        <img src={Appstore} height='80%' width='90%' />
                        <img src={Playstore} height='80%'width='90%'/>
                    </div>
                    <p>offers</p>
                    <p>login/Signup</p>
                    
                </div>
            </nav>

            <div className='main-carousel'>
                <div className='carousel-item'>
                    <img src={Banner1} width= '380px' height= '240px' />
                </div>
                <div className='carousel-item'>
                    <img src={Banner2} width= '380px' height= '240px' />
                </div>
                <div className='carousel-item'>
                    <img src={Banner3} width= '380px' height= '240px' />
                </div>
                <div className='carousel-item'>
                    <img src={Banner1} width= '380px' height= '240px' />
                </div>
                <div className='carousel-item'>
                    <img src={Banner2} width= '380px' height= '240px'/>
                </div>
                <div className='carousel-item'>
                    <img src={Banner3} width= '380px' height= '240px'/>
                </div>
            </div>

            <div className='search-prefer'>
                <div className='serchfield'>
                    <input type='text' placeholder='search for menu'/>
                </div>
                <div className='calorie'>
                    <img src={calorie} height='80%'/>
                    <p>calorie</p>
                    <input type='radio'  />
                </div>
                   
                <div className='calorie'>
                    <img src={veg} height='80%'  />
                    <p>veg</p>
                    <input type='radio' />
                </div>   
            </div>
            <Row className='food-content'>
                <Col  xs={3} className='menu'>
                    <ul>
                        <li className='active'>Trending</li>
                        <li>Recommended</li>
                        <li>stay Home Combos</li>
                        <li>Meals</li>
                        <li>Happy Meals</li>
                        <li>Family Meals</li>
                        <li>Burgers & Wraps</li>
                        <li>Fries and Sides</li>
                        <li>Desserts</li>
                        <li>Beverages</li>
                        <li>Keep it Hot</li>
                        <li>keep it chill</li>
                    </ul>
                </Col>
                <Col xs={4} lg={4} className='food'>
                    <h1>Trending</h1>
                    <div className='food-item'>
                        <img src={burger} width='25%' height='25%' />
                        <div className='item-content'>
                            <h3 className='item-name'>Mcaloo Tikki Burger</h3>
                            <p style={{width:'80%'}} >The world's favourite indian burger potato and peas patty topped woth veg sauce , ketchup, tomatoes and onions.</p>
                        </div>
                        <div className='item-prize'>
                            <p>$49</p>
                            <Button  className='item-add' >Add </Button>
                        </div>
                    </div>
                    <div className='food-item'>
                        <img src={burger} width='25%' height='25%' />
                        <div className='item-content'>
                            <h3 className='item-name'>McVeggie Burger</h3>
                            <p style={{width:'80%'}} >The world's favourite indian burger potato and peas patty topped woth veg sauce , ketchup, tomatoes and onions.</p>
                        </div>
                        <div className='item-prize'>
                            <p>$59</p>
                            <Button  className='item-add' >Add </Button>
                        </div>
                    </div>
                    <div className='food-item'>
                        <img src={burger} width='25%'height='25%' />
                        <div className='item-content'>
                            <h3 className='item-name'>McSpicy Paneer Burger</h3>
                            <p style={{width:'80%'}} >A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns</p>
                        </div>
                        <div className='item-prize'>
                            <p>$29</p>
                            <Button  className='item-add' >Add </Button>
                        </div>
                    </div>
                    <div className='food-item'>
                        <img src={burger} width='25%' height='25%'/>
                        <div className='item-content'>
                            <h3 className='item-name'>Chicken McNuggets Piri Burger</h3>
                            <p style={{width:'80%'}} >Rich and filling cottage cheese patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more.</p>
                        </div>
                        <div className='item-prize'>
                            <p>$60</p>
                            <Button  className='item-add' >Add </Button>
                        </div>
                    </div>
                    <div className='food-item'>
                        <img src={burger} width='25%' />
                        <div className='item-content'>
                            <h3 className='item-name'>Mcaloo Tikki Burger</h3>
                            <p style={{width:'80%'}} >The world's favourite indian burger potato and peas patty topped woth veg sauce , ketchup, tomatoes and onions.</p>
                        </div>
                        <div className='item-prize'>
                            <p>$49</p>
                            <Button  className='item-add' >Add </Button>
                        </div>
                    </div>
                </Col>
                <Col xs={4}  className='cart'>
                    <h1>Cart Empty</h1>
                    <img src={empty_cart} />
                </Col>
            </Row>


        
            <footer className='footer'>
               <p> 	&#169; primespot.tech - All rights reserved</p>
            </footer>
            
        </div>
    )
}

export default Home
