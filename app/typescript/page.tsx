"use client";
import TypeCard from "@/components/TypeCard";
import React from "react";

interface blogData {
  id: Number;
  title: String;
  paragraph: String;
}

// const handleSubmit  = (e) =>{

// }

const Typescript = () => {
  const data: blogData[] = [{ id: 1, title: "rabindra", paragraph: "djfdjk" }];
  return (
    <div>
      <TypeCard
        id={2}
        content={"dkfjdkfdf"}
        title={"dkjfkdjf"}
        number={"dfhdhfdjk"}
      />

      <form action="" onSubmit={(e) => console.log("hello")}>
        <button onClick={(e) => console.log("hell0")}>submit</button>
      </form>
    </div>
  );
};

export default Typescript;

/** we know that how to declare a type of mouse event or Html Form Event */