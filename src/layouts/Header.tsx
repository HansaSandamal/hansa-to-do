import React from 'react';
import { Container } from 'react-bootstrap';

const Header :React.FC=()=>{
    return(
       <Container className={'header'} fluid={true}>
           <h1>To-Do-List</h1>
       </Container>
    )
}
export default Header;