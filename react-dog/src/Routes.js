import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DogList from './DogList'
import FindDogDetails from './FindDogDetails'

const Routes = ({dogs}) => {
    return (
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogs} /> 
          </Route>
          <Route path="/dogs/:name" >
            <FindDogDetails dogs={dogs} /> 
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      );
}

export default Routes