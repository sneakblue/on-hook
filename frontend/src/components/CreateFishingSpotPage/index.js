import FishingSpotForm from "../FishingSpotForm"
import './CreateFishingSpotPage.css';

export default function CreateFishingSpot () {
    return (
        <div className='create-fishing-spot-main--div'>
            <div className='fishing-spot-form'>
                <h2 className='create-fishing-spot--title'>Create A Fishing Spot</h2>
                <FishingSpotForm />
            </div>
        </div>
    )
}
