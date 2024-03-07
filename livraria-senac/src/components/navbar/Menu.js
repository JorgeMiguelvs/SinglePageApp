import {Menu} from "../navbat/styles/Components";
import {ImagemLogo} from "../navbat/styles/Imagem";
import {Item, Lista} from "../navbat/styles/Listas";
import logo from "../../images/logo.png"

const lista =['Lançamentos','Blog','Fale Conosco'];


function MenuBar(){
    return <Menu>
        <ImagemLogo src={logo}/>
        <Lista>            
         {
            lista.map(item =><Item>{item}</Item>)
        }
        </Lista>
        
    </Menu>
}
export default MenuBar;