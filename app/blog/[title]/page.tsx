import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import ComponentWrapper from "@/components/ComponentWrapper";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clpy92k06kjx901un6pbv1k5c/master"
);

const page = async ({ params }: { params: { title: string } }) => {
  const Query = gql`
{
    blogs(where : {link : "${params.title}"}){
      id,
      title,
      subTitle,
      link,
      image {
        url
      },
      publishedAt,
      content{
        html
      },
    }
  }
`;
  const { blogs }: any = await graphcms.request(Query);
  return (
    <ComponentWrapper>
      <div
        dangerouslySetInnerHTML={{ __html: blogs[0].content.html }}
        className="markdown overflow-x-hidden space-y-4 pt-5"
      ></div>
    </ComponentWrapper>
  );
};

export default page;

export async function generateMetadata({ params }: any) {
  const Query = gql`
{
    blogs(where : {link : "${params.title}"}){
      id,
      title,
      subTitle,
      link,
      image {
        url
      },
      publishedAt,
      content{
        html
      },
    }
  }
`;
  const { blogs }: any = await graphcms.request(Query);
  return {
    title: blogs[0].title,
    description : blogs[0].subTitle,
    keywords : blogs[0].slug
  };
}

export const revalidate = 10