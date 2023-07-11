import {logementList} from '../Home/logementList'
import Carousel from './Carousel'

function CarouselEssai(id) {
    return (
        <div>
        {logementList.map(({id,pictures})=>(
        <div key={id}>
            <Carousel 
            pictures={pictures} />
        </div>
    ))}
</div>
    )
}

export default CarouselEssai