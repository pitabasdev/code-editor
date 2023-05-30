import { AppBar,styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Logo from "../assets/logo.png"
const Contain=styled(AppBar)`
      background: #060606;
      height:9vh;      
`

function Header(){
    return(
     
        <Contain position="static">
            <Toolbar>
                <img src={Logo} alt="code-logo" style={{width:"90px"}} />

            </Toolbar>
        </Contain>

    );
}


export default Header;