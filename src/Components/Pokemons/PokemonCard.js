import React, { Component} from 'react';
import Pokemons from './Pokemons.json';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

//
const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;
//

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




export default class PokemonCard extends Component {
    render() {
        return(
            <div className = "row">{Pokemons.map((postDetail, id) =>{
                return(
                    <div className= "col-md-3 col-sm-6 mb-5">
                        <Styledlink to={`pokemon/${postDetail.name}`}>
                        <Card className = "card">
                             <h5 className = "card-header">{postDetail.id}</h5>
                             
                             <h5 className = "text-center">
                             <img class = "img-center"
                             src={postDetail.img}
                             alt="new"
                             />
                             </h5>

                             <div className = "card-body mx-auto">
                                 <h6 className="card-title">{postDetail.name}</h6>
                                 </div>
                     </Card>
                     </Styledlink>
                    </div>
                );
                })}
            </div>
                
                   
        );
    
    }
    
}