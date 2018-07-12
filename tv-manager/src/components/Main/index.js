import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';
import SeriesCast from '../../containers/SeriesCast';
const Main = props => (
    <Switch>
        <Route exact path="/" component={Series}/>
        <Route path="/series/:id" component={SingleSeries} />
        <Route path="/shows/:id/cast" component= {SeriesCast} />
    </Switch>
);

export default Main;