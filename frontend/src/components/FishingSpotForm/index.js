import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createFishingSpot } from '../../store/fishing_spots';
import cities from 'cities';
import './FishingSpotForm.css';

export default function FishingSpotForm ({ mapLat, mapLng, isMapEdit, setShowModal, setNewLat }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    // const [ pic, setPic ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ name, setName ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ country, setCountry ] = useState('USA');
    const [ lat, setLat ] = useState(0.0);
    const [ lng, setLng ] = useState(0.0);
    const [ errors, setErrors ] = useState([]);
    const [ image, setImage ] = useState(null);
    const [ images, setImages ] = useState([]);
    // const [ imagesPrev, setImagesPrev ] = useState([]);

    if(!sessionUser) {
        history.push('/home');
    }

    useEffect(() => {
        if (mapLat && mapLng) {
            setLat(mapLat)
            setLng(mapLng)
            const locationData = cities.gps_lookup(mapLat, mapLng);
            setState(locationData.state_abbr);
            setCity(locationData.city)
        }
    }, [mapLat, mapLng])



    const checkErrors = () => {
        const errors = [];
        if (name.length < 3) {
            errors.push('Name must be 3 or more characters');
        } else if (name.length === 0) {
            errors.push('Must provide a name');
        };
        // if (pic.length === 0) {
        //     errors.push('Must provide a picture url')
        // };
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

    const handleImages = (e) => {
        const files = e.target.files;
        if (files.length === 1) setImage(e.target.files[0]);
        else setImage(null);
        // if (images.length) {
            // let newImages = [...images];
            // Object.values(e.target.files.forEach(file => {
            //     newImages.push(file);
            // }))
            // setImages([...images, ...files])
        // } else {
            setImages([...images, ...files]);
        // }
    }

    const handleImageRemove = (e, i) => {
        e.preventDefault();
        const newImages = [...images];
        newImages.splice(i, 1);
        setImages(newImages);
        if (newImages.length === 1) {
            setImage(newImages[0]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let submitErrors = checkErrors();
        if (submitErrors.length === 0) {
            const newFishingSpot = {
                user_id: sessionUser.id,
                name,
                description,
                city,
                state,
                country,
                lat,
                lng,
                images,
                image
            }
            dispatch(createFishingSpot(newFishingSpot));
            if (isMapEdit) {
                setShowModal(false);
                setNewLat(0);
            }
            history.push('/home');
        }
    }

    let previewImages;

    if (images.length) {
        previewImages = (
            <div className={'preview_images--div'}>
                {images.map((image, i) => {
                    return (
                        <div key={i} className={'preview_images_single--div'}>
                            <button
                                className={'preview_images--btn'}
                                onClick={(e) => handleImageRemove(e, i)}
                            >x</button>
                            <img
                                className={'preview_images--img'}
                                src={URL.createObjectURL(image)}
                                alt={'preview'}
                            />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        previewImages = (
            <>
            </>
        )
    }


    return (
        <>
            <ul className='errors'>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
            <form
                onSubmit={handleSubmit}
                className='fishing-spot--form'
            >
                <div className='form__input--div'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        required={true}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        value={description}
                        wrap='soft'
                        spellCheck='true'
                        required={true}
                        maxLength={255}
                        className='description--input'
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='pic'>Pictures</label>
                    <input
                        type='file'
                        multiple
                        name='pic'
                        className='form__input__img--input'
                        onChange={handleImages}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={city}
                        required={true}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        name='state'
                        value={state}
                        required={true}
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={country}
                        required={true}
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='lat'>Lattitude</label>
                    <input
                        type='number'
                        name='lat'
                        value={lat}
                        required={true}
                        onChange={e => setLat(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='lng'>Longitude</label>
                    <input
                        type='number'
                        name='lng'
                        value={lng}
                        required={true}
                        onChange={e => setLng(e.target.value)}
                    />
                </div>
                <button type='submit' className='form__submit--btn'>Submit</button>
                {previewImages}
            </form>
        </>
    )
}
