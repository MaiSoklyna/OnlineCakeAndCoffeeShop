import { Link } from 'react-router-dom';
import { TfiAngleDown } from "react-icons/tfi";
import { Button } from 'react-bootstrap';
import { PiListBold } from "react-icons/pi";
import { FaAppleAlt, FaFish, FaEgg, FaCoffee, FaBreadSlice, FaSnowflake, FaCookieBite, FaLeaf } from "react-icons/fa";


const Navigation = () => {
    return (
        <> 
        <nav className='container header'>
            <div className='row'>
                <div className='col-sm-3 navPart1 position-relative'>
                    <div className="all-categories-dropdown">
                        <Button className="allcartTab align-items-center justify-content-center">
                            <PiListBold
                                size={25}
                                color="#c1add9"
                                style={{
                                    position: 'relative',
                                    top: '2px',
                                    marginRight: '16px'
                                }}
                            />
                            <span className="text">ALL CATEGORIES</span>
                            <TfiAngleDown
                                size={24}
                                color="#c1add3"
                                style={{
                                    position: 'relative',
                                    top: '2px',
                                    marginLeft: '16px'
                                }}
                            />
                        </Button>
                       

<div className="categories-menu" 
style={{ listStyle: 'none' }}>
  <Link className="category-item" to="/category/fruits-vegetables">
    <FaAppleAlt className="cat-icon" /> Fruits & Vegetables <span className="cat-arrow">&gt;</span>
  </Link>
  <Link className="category-item" to="/category/meats-seafood">
    <FaFish className="cat-icon" /> Meats & Seafood <span className="cat-arrow">&gt;</span>
  </Link>
  <Link className="category-item" to="/category/breakfast-dairy">
    <FaEgg className="cat-icon" /> Breakfast & Dairy <span className="cat-arrow">&gt;</span>
  </Link>
  <Link className="category-item" to="/category/beverages">
    <FaCoffee className="cat-icon" /> Beverages <span className="cat-arrow">&gt;</span>
  </Link>
  <Link className="category-item" to="/category/breads-bakery">
    <FaBreadSlice className="cat-icon" /> Breads & Bakery <span className="cat-arrow">&gt;</span>
  </Link>
  <Link className="category-item" to="/category/frozen-foods">
    <FaSnowflake className="cat-icon" /> Frozen Foods <span className="cat-arrow">&gt;</span>
  </Link>
  <Link className="category-item" to="/category/biscuits-snacks">
    <FaCookieBite className="cat-icon" /> Biscuits & Snacks <span className="cat-arrow">&gt;</span>
  </Link>
  <Link className="category-item" to="/category/grocery-staples">
    <FaLeaf className="cat-icon" /> Grocery & Staples <span className="cat-arrow">&gt;</span>
  </Link>
</div>
                    </div>
                </div>
                <div className='col-sm-9 navPart2 lato-thin'>
                    <ul className="main-nav list list-inline">
                        <li className="nav-item active">
                            <Link to={'/'}>
                                <span className="nav-icon">{/* Optionally use an icon here */}</span>
                                HOME
                                 <TfiAngleDown
                                size={24}
                                color="#c1add3"
                                style={{
                                    position: 'relative',
                                    top: '2px',
                                    marginLeft: '16px'
                                }}
                            />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/shop'}>
                                SHOP <span className="nav-arrow"></span>
                                <TfiAngleDown
                                size={24}
                                color="#c1add3"
                                style={{
                                    position: 'relative',
                                    top: '2px',
                                    marginLeft: '3px'
                                }}
                            />
                            </Link> 
                            
                        </li>
                        <li className="nav-item">
                            <Link to={'/meats-seafood'}>
                                <FaFish className="nav-icon" /> MEATS & SEAFOOD
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/bakery'}>
                                <FaSnowflake className="nav-icon" /> BAKERY
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/beverages'}>
                                <FaCoffee className="nav-icon" /> BEVERAGES
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to={'/blog'}>BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'}>CONTACT</Link>
                        </li>
                         <li className="nav-item">
                            <Link to={'/contact'}>CONTACT</Link>
                        </li>
                    </ul>
                    {/* Other nav content */}
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navigation;