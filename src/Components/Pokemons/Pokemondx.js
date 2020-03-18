import React, { Component } from 'react';
import Pokemons from './Pokemons.json';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Card = styled.div`
box-shadow:0 1px 3px rgba(0, 0, 0.12), 0 1px 2px(0,0,0.24);
transition: all 0.3s cubic-bezier(0.25,, 0.8, 0.25, 1);

&: hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)
}
`;

const Styledlink = styled(Link)`
text-decoration: none;
color: black; 
&: link,
&:active{
    text-decoration: none;
}
`



export default class Pokemondx extends Component {
    render() {
        return(
            <div className = "row">{Pokemons.map((postDetail, id) =>{
                fetch(`http://localhost:3000/#/pokemon/${postDetail.name}`)
                return(
                    <div className= "col">
                        <h1>{postDetail.name}</h1>
                    </div>
                );
                })}
            </div>

            
        )
    }
}