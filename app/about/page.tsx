import ComponentWrapper from '@/components/ComponentWrapper'
import React from 'react'

import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clpy92k06kjx901un6pbv1k5c/master"
);

const Query = gql`{
	abouts{
    content{
      html
    }
  }  
}`;

const About = async () => {
  const { abouts }: any = await graphcms.request(Query);

  return (
    <ComponentWrapper>
      <div
        dangerouslySetInnerHTML={{ __html: abouts[0].content.html }}
        className="markdown overflow-x-hidden space-y-4 pt-5"
      ></div>
    </ComponentWrapper>
  )
}

export default About