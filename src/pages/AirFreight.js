import React from 'react'
import ServiceTemplate from './OurServices/ServiceTemplate'
import Img1 from '../Assets/Service/Group 844.png'
import Img2 from '../Assets/Service/Group 1020.png'
import Logo1 from '../Assets/Service/image 2.png'
import Logo2 from '../Assets/Service/image 3.png'
import YoutubeThumbnail from '../Assets/Service/Rectangle 31.png'

const AirFreight = () => {
    const data = {
        title: 'Air Freight',
        description: 'We handle all types of shipments including sensitive by time, hazardous nature, abnormal size and perishables with utmost care and speed to & from world wide destinations.',
        portraitImage: Img1,
        landscapeImage: Img2,
        landscapeImageDescription: 'We are licensed to carry out air cargo by General Authority of Civil Aviation. We partner with all major airlines and offer reliable service at affordable rates. Being an IATA accredited and licensed air cargo agent, our partners can consign their shipments to us on a back to back basis (MAWB/HAWB) to protect their interest. ',
        logos: [Logo1, Logo2],
        youtubeLink: '',
        youtubeThumbnailImage: YoutubeThumbnail,
        buttonText: 'EFS Airfreight Service        '
    }
    return (
        <ServiceTemplate
            title={data.title}
            description={data.description}
            portraitImage={data.portraitImage}
            landscapeImage={data.landscapeImage}
            landscapeImageDescription={data.landscapeImageDescription}
            logos={data.logos}
            youtubeLink={data.youtubeLink}
            youtubeThumbnailImage={data.youtubeThumbnailImage}
            buttonText={data.buttonText}
        />
    )
}
export default AirFreight