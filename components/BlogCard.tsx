import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
// import { image4, image5, image6, image1, image3 } from "@/public";

import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clpy92k06kjx901un6pbv1k5c/master"
);

interface blogTypes {
  id: String;
  title: String;
  subTitle: String;
  link: String;
  image: {
    url: String;
  };
  publishAt: String;
  content: {
    html: String;
  };
}

const Query = gql`
  {
    blogs {
      id
      title
      subTitle
      link
      image {
        url
      }
      publishedAt
      content {
        html
      }
    }
  }
`;

export default async function BlogCard() {
  const { blogs }: any = await graphcms.request(Query);

  return (
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {blogs.map((item: blogTypes, i: number) => {
        if (true) {
          i++;
          if (i % 5 === 0) {
            return (
              <Card
                className="w-full h-[300px] col-span-12 sm:col-span-7"
                key={i}
              >
                <Link
                  href={`/blog/${item.link}`}
                  key={i}
                  className="w-full h-full"
                >
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                      {item.subTitle}
                    </p>
                    <h4 className="text-white/90 font-medium text-xl">
                      {item.title}
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={`${item.image.url}`}
                  />
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center pl-10">
                      {/* <Image
                        removeWrapper
                        alt="Breathing app icon"
                        className="rounded-full w-10 h-11 bg-black"
                        src="/breathing-app-icon.jpeg"
                      /> */}
                      <div className="flex flex-col">
                        <p className="text-tiny text-white/60">Breathing App</p>
                        <p className="text-tiny text-white/60">
                          Get a good night&apos;s sleep.
                        </p>
                      </div>
                    </div>
                    <Button radius="full" size="sm">
                      Get App
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            );
          } else if ((i + 1) % 5 === 0) {
            return (
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-5"
                key={i}
              >
                <Link href={`/blog/${item.link}`} key={i}>
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                      {item.subTitle}
                    </p>
                    <h4 className="text-gray-100 font-medium text-2xl">
                      {item.title}
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={`${item.image.url}`}
                  />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-white text-tiny">Available soon.</p>
                      <p className="text-white text-tiny">Get notified.</p>
                    </div>
                    <Button
                      className="text-tiny"
                      color="primary"
                      radius="full"
                      size="sm"
                    >
                      Notify Me
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            );
          } else {
            return (
              <Card className="col-span-12 sm:col-span-4 h-[300px]" key={i}>
                <Link href={`/blog/${item.link}`} className="h-full">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                      {item.subTitle}
                    </p>
                    <h4 className="text-white font-medium text-large">
                      {item.title}
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={`${item.image.url}`}
                  />
                </Link>
              </Card>
            );
          }
        }
      })}
    </div>
  );
}

export const revalidate = 3;