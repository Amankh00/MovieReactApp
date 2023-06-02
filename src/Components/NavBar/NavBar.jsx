import {  useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.css"



const NavBar = ({ fav,  setSearch }) => {
  
  const inp = useRef();

  const handlechange = () => {
    const input = inp.current.value;
    setSearch(input);
  };


   const { user, isAuthenticated } = useAuth0();
    const { loginWithRedirect, logout} = useAuth0();

      
    return(
        <>
    
       <header>
        <nav>

        <div className="head">

      <a href="/">
        <abbr title="Book My Show">
       <h1 className="logo">BookMyShow</h1>
        </abbr>
      
        </a>
        
        <input type="text" name=""  placeholder=
        "🔎 Search for Movies , Events" id="searchBar" ref={inp}    onChange={handlechange}
             />
              <Link to="fav">
                
            
            <span> 
             <abbr title="FAVOURITE ITEM HERE">
             <i className="fa-solid fa-heart" id="myBtn" ></i>
           
            </abbr>
            </span>
            
            <span id="sp">{isAuthenticated ? fav.length : 0}
</span>
           
             
    
       </Link>
      
   <div className="Loginfo">

   <div className="userDetails">
{
        isAuthenticated  &&
       (
         <div className="LogIn">
           <p>  {user.name}</p>
           <img src={user.picture} alt={user.name} />
         </div>
       )
      }

</div>
      <div className="logout">

      { !isAuthenticated  
      ?
        
       
      <button onClick={() => loginWithRedirect()}>Log In</button>
           

        :
         
        
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
  }
   </div>

      
</div>

        </div>
        </nav>
       </header>
     

    

        </>
    )
}

export default NavBar;