import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import MailSubscribeSection from "../Components/MailSubscribeSection/MailSubscribeSection";
import { BlueVectorImg } from "../pages/Home/HeroSection";
import { RedVectorImg } from "../pages/OurServices/OurServices";
// import ReactHtmlParser from 'html-react-parser';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import PlayBtnIcon from "../Assets/images/Group 789 (1).png";
import YoutubeIcon from "../Assets/images/youtube-icon.png";
import EnquiryComponent from "../Components/EnquiryComponent";
import InputField from "../Components/InputField/InputField";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Service = ({ data }) => {
  const AssetsArray = data.allContentfulAsset.edges;
  console.log(AssetsArray);
  // const Object = data.contentfulServices.allContentfulServices.edges[0].node
  let IsCurrentPathCargo;

  if (typeof window !== `undefined`) {
    IsCurrentPathCargo = !!window.location.pathname.includes("project-cargo");
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="list-disc flex ml-3">{children}</li>;
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="text-4xl font-bold py-3">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h1 className="text-2xl font-bold py-3">{children}</h1>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h1 className="text-xl font-bold py-3 ">{children}</h1>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need

        const image = AssetsArray.find(
          (itm) => itm.node.contentful_id == node.data.target.sys.id
        ).node.file.url;

        return (
          <div className="align-center">
            <img src={image} />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <main className="container ">
        <section className="grid grid-cols-1 gap-5 lg:min-h-screen md:h-full py-10 px-5">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              {data.contentfulServices?.title}
            </h1>
            <p className="w-10/12 mt-2">
              {data.contentfulServices?.description.description}
            </p>
          </div>

          <div className="relative">
            <img
              src={RedVectorImg}
              className={
                "w-48 absolute z-0 2xl:-left-10 lg:-left-0 lg:bottom-0 lg:top-0 m-auto "
              }
              style={{ zIndex: -1 }}
              alt=""
            />
            <img
              src={BlueVectorImg}
              className={"w-48 absolute z-0 2xl:-right-10 lg:-right-0"}
              alt=""
              style={{ zIndex: -1 }}
            />

            <div className="grid md:grid-cols-2">
              <div>
                <img
                  src={data.contentfulServices?.portraitImage.file.url}
                  className={""}
                  alt=""
                />
                <div>
                  {data.contentfulServices?.portraitImageDescription && (
                    <div>
                      {renderRichText(
                        data.contentfulServices?.portraitImageDescription,
                        options
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <img
                  src={data.contentfulServices?.landscapeImage.file.url}
                  className={" "}
                  alt=""
                />
                <div>
                  {data.contentfulServices?.landscapeImageDescription && (
                    <div>
                      {renderRichText(
                        data.contentfulServices?.landscapeImageDescription,
                        options
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 p-4 my-5">
              {IsCurrentPathCargo &&
                data.allContentfulProjectCargo.edges?.map((itm) => {
                  const item = itm.node;
                  return (
                    <div
                      class="flex flex-row 	rounded-2xl p-2"
                      style={{
                        boxShadow:
                          "0px 2.92353px 36.5441px rgb(10 80 159 / 25%)",
                      }}
                    >
                      <div class="basis-1/2">
                        <span>
                          <img
                            className="w-11/12 "
                            src={item?.image.file.url}
                          />
                        </span>
                      </div>
                      <div class="basis-1/2">
                        <div class="flex flex-col ">
                          <div>
                            <h5 className=" font-normal text-xs md:text-sm py-1 ">
                              {item?.projectName}
                            </h5>
                          </div>
                          <div>
                            <h3 className="text-primary font-extrabold text-sm md:text-lg py-1 ">
                              {item?.title}
                            </h3>
                          </div>
                          <div>
                            <h5 className="text-primary font-normal text-xs md:text-sm py-1 ">
                              Location: <b>{item?.location}</b>
                            </h5>
                          </div>
                          <div>
                            <p className="text-left font-normal text-xs lg:text-sm">
                              Scope of work : <b>{item?.scopeOfWork}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="py-10">
            {data.contentfulServices.youtubeThumbnailImage.file.url.length &&
              data.contentfulServices.youtubeLink.length && (
                <div className="flex flex-col w-full justify-center  items-center relative ">
                  <img
                    src={
                      data.contentfulServices?.youtubeThumbnailImage.file.url
                    }
                    alt=""
                  />
                  <img
                    src={PlayBtnIcon}
                    alt=""
                    className="absolute m-auto inset-0 cursor-default	 h-20 w-20		"
                  />
                </div>
              )}
            {data.contentfulServices.youtubeLink && (
              <div className="flex items-center justify-center mt-5">
                <img className="h-7" src={YoutubeIcon} alt="" />
                <Link
                  to={data.contentfulServices?.youtubeLink}
                  target={"_blank"}
                  className="text-primary underline underline-offset-4 ml-2 font-bold w-max-60"
                >
                  {data.contentfulServices?.buttonText
                    ? data.contentfulServices?.buttonText
                    : "watch Video"}
                </Link>
              </div>
            )}

            <div className="flex justify-center">
              <EnquiryComponent />
            </div>
          </div>
        </section>
      </main>
      <section className="bg-primary">
        <div className="container">
          <MailSubscribeSection />
        </div>
      </section>
    </Layout>
  );
};

export function Head() {
  const isBrowser = () => typeof window !== "undefined"
  const title = isBrowser() &&  window.location.pathname
    .split("/")
    .slice(2)
    .toLocaleString()
    .toUpperCase()
    .replace("-", " ");

  return <title>{title} | EFS Logistics KSA</title>;
}
export default Service;
export const PageQuery = graphql`
  query ($slug: String!) {
    contentfulServices(slug: { eq: $slug }) {
      slug
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

    allContentfulProjectCargo {
      edges {
        node {
          image {
            file {
              url
            }
          }
          projectName
          scopeOfWork
          title
          location
        }
      }
    }

    allContentfulAsset {
      edges {
        node {
          file {
            url
          }
          contentful_id
        }
      }
    }
  }
`;
