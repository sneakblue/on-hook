import { Link } from 'react-router-dom';
import './SplashPage.css';

export default function SplashPage() {
    return (
        <div className='splashPage__main--div'>
            {/* <h4>Splash Page</h4> */}
            <div className='splashPage__description--div'>
                <h1>Find Fishing Spots near you!</h1>
                <h3>Discover, create, and share your favorite fishing spots with other anglers near you!</h3>
                <div className='splashPage__btn--div'>
                    <Link className='splashPage__link--btn' to='/home'>Browse Fishing Spots</Link>
                    <Link className='splashPage__link--btn' to='/signup'>Sign-Up</Link>
                </div>
            </div>
            <div className='splashPage__image--div'>
                <img className='splashPage__image--img' src='https://images.unsplash.com/photo-1601776945824-880c978dd931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80' alt='angler-img' />
            </div>
        </div>
    )
}
