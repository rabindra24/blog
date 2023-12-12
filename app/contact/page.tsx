"use client";
import ComponentWrapper from "@/components/ComponentWrapper";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { gql, GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clpy92k06kjx901un6pbv1k5c/master",
  {
    headers: {
      Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDIzMDAxNjMsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NscHk5MmswNmtqeDkwMXVuNnBidjFrNWMvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjgwMjI2ZDI2LTYyYTAtNGEzYi04NzRmLTc4ODVlOTZiN2Y3NiIsImp0aSI6ImNscTB4a2NvOTA0emwwMXVxN3lpNGg4Z3oifQ.DHVcYUvQLy9B-c9FLsew8fxZkt0yUxCcOASsGZ9zR3ZkoXUhcLbULV46ZoPSUDXxaegN_j8W1hGx9a-x1SxjJiGgeZYaGZQQWD0kEYztHQsdqGvG2qiIciBW5zU4IO7Bzl4VjkSWIxn4wNWdAxkMkQLQSlxC-tUiwdi5KI3qK_dfiollWu1hlX4e_4AZFwtU2sAd4ok-Mtc0nFFQkw0w98T16B5bXO0jrU7muOkiPqmDbK4YLnEWroGkQ3RBVZ40QTtq7N9sqGa1noYYut7pmLjtQo18XEmCRg1hJb3hBq6AgaijVU5HhyEUM4cPTT-I97kHv3PFJMKxqWbUlBK8Jgj5bK-dhExgItn7hFWHDKn-lQ8a9JyTmXUgOgNGKO9OOB7X_VkBmNdH2T_OcyhfkVpziUIdbt1K_hD78DU-9A0bgnLTqnURSe4D2jSEMK9PKgtlvB6V1aE_a0YkyxSuPGyQnTSs8ymU7-UYzuVtR5WUM27JX40pizDz7vLImdYgxJUgjdzpNxzolEcdYcfkCABQ29zckoGZys96udF4vrNA5SnG2o2PCU6wwheDTjAAb_hGDxU_15Oop0QIC65On-d3f0T1IfLAZutbMfaIybiOgtNWpQKLiDd9D7gJE7nbZF85s5ltxjgiG6MRJ-PXIegN0cW_dFQVaPvNJbYPmfQ`,
    },
  }
);

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const CREATE_COMMENT = gql`
    mutation Contact {
      createContact(
        data: { name: "${data.name}", email: "${data.email}", number: "${data.number}" }
      ) {
        id
        name
        email
        number
      }
    }
  `;

  const formSubmit = async (e: any) => {
    e.preventDefault();
    const { createContact }: any = await graphcms.request(CREATE_COMMENT);

    const publishContact = gql`
      mutation MyMutation {
        publishContact(
          where: { id: "${createContact.id}" }
          to: PUBLISHED
        ) {
          id
          name
          email
        }
      }
    `;

    const publish = await graphcms.request(publishContact);

    // console.log(publish);
  };
  return (
    <ComponentWrapper>
      <h1 className="md:text-[3rem] font-bold">Contact Us</h1>
      <form
        action=""
        className="mt-5 space-y-3 shadow-lg rounded-xl"
        onSubmit={formSubmit}
      >
        <Input
          type="text"
          label="Name"
          variant="bordered"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
          className="max-w-lg"
        />
        <Input
          type="email"
          label="Email"
          variant="bordered"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          className="max-w-lg"
        />
        <Input
          type="tel"
          label="Number"
          variant="bordered"
          value={data.number}
          onChange={(e) => setData({ ...data, number: e.target.value })}
          className="max-w-lg"
        />
        <Button color="primary" type="submit">
          Button
        </Button>
      </form>
    </ComponentWrapper>
  );
};

export default Contact;
