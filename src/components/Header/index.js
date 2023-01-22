import React,{useContext} from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Context } from "../../context";


import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);

  return(

    <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      {
        user ?(
          <span className="loggedin" style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",

          }}>Logged in as {user.username}</span>
        ):(
          <Link to="/login" style={{
            textDecoration: "none",
          }}>
            <span className="login" style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
            
            }}>Log In</span>
            </Link>
        )
      }


      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
  )
 
};

export default Header;
