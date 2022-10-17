import React from 'react'
import ServiceTemplate from './OurServices/ServiceTemplate'
import Img1 from '../Assets/Service/Group 845.png'
import Img2 from '../Assets/Service/Group 1021.png'
import Logo1 from '../Assets/Service/image 6.png'
// import Logo2 from '../Assets/Service/image 3.png'
import YoutubeThumbnail from '../Assets/Service/Rectangle 31.png'

const LandTransportation = () => {
    const data = {
        title: 'Land Transportation',
        description: 'We handle all types of shipments including sensitive by time, hazardous nature, abnormal size and perishables with utmost care and speed to & from world wide destinations.',
        portraitImage: Img1,
        landscapeImage: Img2,
        landscapeImageDescription: `EFS is a licensed transport company with our own fleet of trailer heads in Saudi Arabia offering trucking services - domestic & cross-country transport including movement of sensitive and hazard­ous nature.
        Being a TIR approved operator we can handle sea-land & land-sea transit movements between GCC/Middle East and worldwide countries through Saudi seaports. This in an ample solution for custom­ers requiring faster transit time between GCC/Middle East & world­wide countries. `,
        logos: [Logo1],
        youtubeLink: '',
        youtubeThumbnailImage: YoutubeThumbnail,
        buttonText: 'EFS Land Transportation Services'
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
export default LandTransportation