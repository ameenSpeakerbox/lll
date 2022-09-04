import { graphql, Link } from 'gatsby'
import React, { useEffect } from 'react'
import Layout from '../Components/Layout/Layout'
import MailSubscribeSection from '../Components/MailSubscribeSection/MailSubscribeSection'
import { BlueVectorImg } from './Home/HeroSection'
import { RedVectorImg } from './OurServices/OurServices'
// import ReactHtmlParser from 'html-react-parser';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import PlayBtnIcon from '../Assets/images/Group 789 (1).png'
import YoutubeIcon from '../Assets/images/youtube-icon.png'
import EnquiryComponent from '../Components/EnquiryComponent'
import InputField from '../Components/InputField/InputField'

const Service = ({ data }) => {
  console.log(data)
  const Object = data.allContentfulServices.edges[0].node
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className='list-disc	'>{children}</li>
      },
    },
  }

  return (
    <Layout>
      <main className='container '>
        <section className='grid grid-cols-1 gap-5 lg:min-h-screen md:h-full py-10 px-5'>
          <div>
            <h1 className='text-5xl font-bold text-primary'>{Object.title}</h1>
            <p className='w-10/12 mt-2'>{(Object.description.description)}</p>
          </div>

          <div className='relative'>
            <img src={RedVectorImg} className={'w-48 absolute z-0 2xl:-left-10 lg:-left-0 lg:bottom-0 lg:top-0 m-auto '} style={{ zIndex: -1 }} alt="" />
            <img src={BlueVectorImg} className={'w-48 absolute z-0 2xl:-right-10 lg:-right-0'} alt="" style={{ zIndex: -1 }} />

            <div className='grid grid-cols-2'>
              <div>
                <img src={Object.portraitImage.file.url} className={''} alt="" />
                <div>
                  <div>{renderRichText(Object.portraitImageDescription, options)}</div>
                </div>
              </div>
              <div>
                <img src={Object.landscapeImage.file.url} className={' '} alt="" />
                <div>
                  <div>{renderRichText(Object.landscapeImageDescription, options)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className='py-10'>
            <div className='flex flex-col w-full justify-center  items-center relative '>
              <img src={Object.youtubeThumbnailImage.file.url} alt="" />
              <img src={PlayBtnIcon} alt="" className='absolute m-auto inset-0 cursor-default	 h-20 w-20		' />
            </div>
            <div className='flex items-center justify-center'>
              <img className='h-7' src={YoutubeIcon} alt="" />
              <Link to={Object.youtubeLink} target={'_blank'} className='text-primary underline underline-offset-4 ml-2 font-bold w-60'>{Object.buttonText}</Link>
            </div>
            
            <div className="flex justify-center">
              <EnquiryComponent />
            </div>
              <InputField label={'Company Name'} type={'text'} />
              <InputField label={'Company Name'} type={'select'} />


          </div>
              <InputField label={'message'} type={'texarea'} />
        </section>
      </main>
      <section className='bg-primary'>
        <div className="container">
          <MailSubscribeSection />
        </div>

      </section>
    </Layout>
  )
}

export default Service
export const PageQuery = graphql`
{
allContentfulServices {
    edges {
      node {
        buttonText
        youtubeLink
        title
        description {
          description
        }
        landscapeImage {
          file {
            url
          }
        }
        landscapeImageDescription {
          raw
        }
        portraitImage {
          file {
            url
          }
        }
        portraitImageDescription {
          raw
        }
        youtubeThumbnailImage {
          file {
            url
          }
        }
      }
    }
  }
}`