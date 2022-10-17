import React from 'react'
import ServiceTemplate from './OurServices/ServiceTemplate'
import Img1 from '../Assets/Service/Group 846.png'
import Img2 from '../Assets/Service/Group 1022.png'
import Logo1 from '../Assets/Service/image 5.png'
// import Logo2 from '../Assets/Service/image 3.png'
import YoutubeThumbnail from '../Assets/Service/Rectangle 31.png'

const SeaFreight = () => {
    const data = {
        title: 'Sea Freight',
        description: 'We are one of the leading firm having direct consolidation to/from various destinations/origins around the globe.',
        portraitImage: Img1,
        landscapeImage: Img2,
        landscapeImageDescription: `We handle all types of sea freight shipments from FCL & LCL to break-bulk and RORO.
        Through our consol partners in every region we are able to cover the entire globe at minimal rate. 
        We are licensed forwarder to carry out Sea freight operations by Trans­port General Authority Saudi Arabia.  `,
        logos: [Logo1],
        youtubeLink: '',
        youtubeThumbnailImage: YoutubeThumbnail,
        buttonText: 'EFS Sea Freight Services'
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
export default SeaFreight