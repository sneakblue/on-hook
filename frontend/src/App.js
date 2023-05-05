import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import HomePage from './components/HomePage';
import SplashPage from './components/SplashPage';
import MapSection from './components/MapSection';
import FishingSpotPage from './components/FishingSpotPage/FishingSpotPage';
import CreateFishingSpot from './components/CreateFishingSpotPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/map'>
              <MapSection />
          </Route>
          <Route path='/create-fishing-spot'>
              <CreateFishingSpot />
          </Route>
          <Route path='/fishing-spot/:id'>
              <FishingSpotPage />
          </Route>
          <Route path='/' exact={true}>
              <SplashPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
