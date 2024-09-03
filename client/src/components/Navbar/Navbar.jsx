import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const Navbar = () => {

  const products = useSelector((state)=>state.cart.products)
  const productsWishlist = useSelector((state)=>state.wishlist.productsWishlist)

  const [shouldDisplayCloseButtonLeft, setShouldDisplayCloseButtonLeft] = useState(false);
  const [shouldDisplayCloseButtonRight, setShouldDisplayCloseButtonRight] = useState(false);

  const [shouldDisplayCart,setShouldDisplayCart] = useState(false);
  const [shouldDisplayWishlist,setShouldDisplayWishlist] = useState(false);

  const [shouldDisplayCartBigScr,setShouldDisplayCartBigScr] = useState(false);
  const [shouldDisplayWishlistBigScr,setShouldDisplayWishlistBigScr] = useState(false);

  const toggleWishlistBigScr = () => {
    setShouldDisplayWishlistBigScr(!shouldDisplayWishlistBigScr)
    setShouldDisplayCartBigScr(false)
  }

  const toggleCartBigScr = () => {
    setShouldDisplayCartBigScr(!shouldDisplayCartBigScr)
    setShouldDisplayWishlistBigScr(false)
  }

  const toggleRightMenu=()=>{
    setShouldDisplayCloseButtonRight(!shouldDisplayCloseButtonRight)
    shouldDisplayCart===true ? setShouldDisplayCart(false) : setShouldDisplayCart(false)
    shouldDisplayCart===true ? setShouldDisplayWishlist(false) : setShouldDisplayWishlist(false)
  }

  const toggleWishlist = () => {
    setShouldDisplayWishlist(!shouldDisplayWishlist) 
    setShouldDisplayCart(false)
  }
  const toggleCart = () => {
    setShouldDisplayCart(!shouldDisplayCart) 
    setShouldDisplayWishlist(false)
  }




  return (
    <div className="bg-white sticky z-10 top-[0px]">         
      <div className="px-4 py-2 flex flex-1 justify-between">       

        {/*LEFT SIDE*/}

        <div className="hidden sm:flex items-center gap-2 bg-white ">             
          <div className="w-10  ">
            <img src="/img/aclogo.png" alt="" />
          </div>
          <div className={`${styles.catTitle} text-[14px]`}>
            <Link to="/products/1">LAPTOPS</Link>
          </div>
          <div className={`${styles.catTitle} text-[14px]`}>
            <Link to="/products/2">MOBILES</Link>
          </div>
          <div className={`${styles.catTitle} text-[14px]`}>
            <Link to="/products/3">HEADPHONES</Link>
          </div>
        </div>


        <div className=" flex flex-1 justify-left items-center sm:hidden">             
          <div
            className="w-[28]px h-[28]px cursor-pointer object-contain"
            onClick={() => setShouldDisplayCloseButtonLeft(!shouldDisplayCloseButtonLeft)}
          >
            {
              shouldDisplayCloseButtonLeft ? <CloseIcon /> 
              : <div className="w-6 "><img src="/img/aclogo.png" alt="" /></div>
            }
          </div>

          <div
            className={`${
              shouldDisplayCloseButtonLeft ? "flex" : "hidden"
            } ${styles.leftCloseIcon}`}
          >
            <div className="flex justify-left items-start flex-col gap-4">                      
              <div className={`${styles.catTitle} mr-1`}>
                <Link to="/products/1">LAPTOPS</Link>
              </div>
              <div className={`${styles.catTitle}`}>
                <Link to="/products/2">MOBILES</Link>
              </div>
              <div className={`${styles.catTitle}`}>
                <Link to="/products/3">HEADPHONES</Link>
              </div>
            </div>
          </div>
        </div>



        <div className=" flex items-center h-[100px] w-[300px] overflow:hidden  ">                            
          <div className=" hidden sm:block h-full w-full ">
            <Link to="/">
              <img src="/img/homepic.png" alt="" className="object-cover" />
            </Link>
          </div>
          <div className="  h-[100px] sm:hidden">
            <Link to="/">
              <img src="/img/homepic.png" alt="" />
            </Link>
          </div>
        </div>


        {/*RIGHT SIDE*/}

        <div className="hidden sm:flex items-center bg-white gap-8 -mt-1">                   
          <div className="flex text-[#777] gap-12">                              
            <SearchIcon className="hover:text-black cursor-pointer " />

            <div className={`${styles.icon} hover:text-rose-500`}  onClick={toggleWishlistBigScr}>           
              <FavoriteIcon/>
              <span className= {`${styles.iconQuantity} -mt-2 `}>
                {productsWishlist.length}
              </span>
            </div>

            <AccountCircleIcon className="hover:text-black cursor-pointer " />

            <div className={`${styles.icon} hover:text-black`}  onClick={toggleCartBigScr}>             
              <ShoppingCartIcon />
              <span className= {`${styles.iconQuantity} -mt-2 `}>
                {products.length}
              </span>
            </div>

          </div>
        </div>


        <div className=" flex flex-1 justify-end items-center z-[300] sm:hidden">                   
          <div
            className="w-[28]px h-[28]px mt-1.5 cursor-pointer object-contain"
            onClick={toggleRightMenu} 
          >
            {shouldDisplayCloseButtonRight ? <CloseIcon /> : <MenuOpenIcon />}{" "}
          </div>
          <div
            className={`${
              shouldDisplayCloseButtonRight ? "flex" :"hidden"
            } ${styles.rightCloseIcon}`}
          >
            <div className={styles.searchIcon}>    
              <SearchIcon />

              <div className=" " onClick={toggleWishlist}>                                        
                <FavoriteIcon className="text-rose-500"/>
                <span className={`${styles.iconQuantity} -mt-8 `}>
                  {productsWishlist.length}
                </span>
              </div>

              <AccountCircleIcon />

              <div className=" " onClick={toggleCart}>                                            
                <ShoppingCartIcon />
                <span className={`${styles.iconQuantity} -mt-8 `}>
                  {products.length}
                </span>
              </div>
              
            </div>
          </div>
        </div>


      </div>
      
      {shouldDisplayCartBigScr && <Cart/>}
      {shouldDisplayWishlistBigScr && <Wishlist/>}

      {shouldDisplayCloseButtonRight && shouldDisplayCart && <Cart/>}  
      {shouldDisplayCloseButtonRight && shouldDisplayWishlist && <Wishlist/>}  
      
    </div>
  );
};

export default Navbar;
