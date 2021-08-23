import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoomPage from './RoomPage/RoomPage';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import LandingPage from './LandingPage/LandingPage';
import './App.css';

function App() {
  return (
  <Router>
    <Switch>
        <Route path = '/join-room'>
            <JoinRoomPage />
        </Route>

        <Route path = '/room'>
             <RoomPage />
        </Route>

        <Route path = '/'>
             <LandingPage />
        </Route>
    </Switch>
  </Router>
  )
}

export default App;