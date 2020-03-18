import React, { Component} from 'react';
import Pokemons from './Components/Pokemons/Pokemons.json';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemondx from './Components/Pokemons/Pokemondx';

export default class Routes extends Component {
    render() {
        return(
            <div className = "row">{Pokemons.map((postDetail, id) =>{
                return(
                    <Router>
                        <div>
                            <Switch>
                                <Route exactpath={`pokemon/${postDetail.name}`} to component={Pokemondx}  />
                            </Switch>
                        </div>
                    </Router>
                );
                })}
            </div>

            
        )
    }
}