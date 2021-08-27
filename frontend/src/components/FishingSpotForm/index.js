import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createFishingSpot } from '../../store/fishing_spots';

export default function FishingSpotForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [ pic, setPic ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ name, setName ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ lat, setLat ] = useState(0.0);
    const [ lng, setLng ] = useState(0.0);
    const [ errors, setErrors ] = useState([]);

    if(!sessionUser) {
        history.push('/home');
    }

    const checkErrors = () => {
        const errors = [];
        if (name.length < 3) {
            errors.push('Name must be 3 or more characters');
        } else if (name.length === 0) {
            errors.push('Must provide a name');
        };
        if (pic.length === 0) {
            errors.push('Must provide a picture url')
        };
        if (description.length === 0) {
            errors.push('Must provide a description')
        };
        if (city.length === 0) {
            errors.push('Must provide a city')
        };
        if (state.length === 0) {
            errors.push('Must provide a state')
        };
        if (country.length === 0) {
            errors.push('Must provide a country')
        };
        setErrors(errors);
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkErrors();
        if (errors.length === 0) {
            const newFishingSpot = {
                user_id: sessionUser.id,
                name,
                pic,
                description,
                city,
                state,
                country,
                lat,
                lng
            }
            dispatch(createFishingSpot(newFishingSpot));
            history.push('/home');
        }
    }


    return (
        <>
            <h2>Fishing Spot Form</h2>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input
                        type='text'
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='pic'>Picture</label>
                    <input
                        type='url'
                        name='pic'
                        value={pic}
                        onChange={e => setPic(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        name='state'
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='lat'>Lattitude</label>
                    <input
                        type='number'
                        name='lat'
                        value={lat}
                        onChange={e => setLat(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='lng'>Longitude</label>
                    <input
                        type='number'
                        name='lng'
                        value={lng}
                        onChange={e => setLng(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
