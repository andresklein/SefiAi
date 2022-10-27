import React from 'react';
import Sidenav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';
function MySidenav () {
    const navegate =useNavigate();
return <Sidenav
onSelect={selected=> {
    console.log(selected)
    navegate('/'+selected)
}}
className='mysidenav'

>
    <Sidenav.Toggle />
    <Sidenav.Nav defaultSelected="home">
    <NavItem eventKey="community">
    <NavIcon><i class="fa-solid fa-c" Style={{fontSize: 1}}></i></NavIcon>
    <NavText>community</NavText>
    </NavItem>
    <NavItem eventKey="gif">
    <NavIcon><i class="fa-solid fa-g" Style={{fontSize: 1}}></i></NavIcon>
    <NavText>gif</NavText>
    </NavItem>
    <NavItem eventKey="image">
    <NavIcon><i class="fa-solid fa-i" Style={{fontSize: 1}}></i></NavIcon>
    <NavText>image</NavText>
    </NavItem>
    <NavItem eventKey="history">
    <NavIcon><i class="fa-solid fa-h" Style={{fontSize: 1}}></i></NavIcon>
    <NavText>history</NavText>
    </NavItem>
    </Sidenav.Nav>
</Sidenav>
}
export default MySidenav;
