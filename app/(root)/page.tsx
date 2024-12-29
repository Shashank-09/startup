import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { Console } from "console";

export default async function Home({searchParams} : {
  searchParams :  Promise<{query? : string }>
}) {
   
  const query = (await searchParams).query;

  const post = await client.fetch(STARTUPS_QUERY)

  console.log(JSON.stringify(post , null , 2))

  // const post = [{
  //   _createdAt : new Date(),
  //   views : 55,
  //   author : {_id : 1 , name : "Shashank"},
  //   _id  : 1,
  //   description : "This is a description",
  //   image : "https://i.pinimg.com/736x/96/87/90/96879034718a6ea6bf204616988b5de8.jpg",
  //   category: "Robots",
  //   title : "We Robots"
  // }]

  return (
    <>
      <section className="pink_container">
         <h1 className="heading">Pitch Your Startup <br />Connect With Entrepreneurs </h1> 
         <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virual Competitions
         </p>
         <SearchForm query={query}/>

      </section>
      <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "All startups"}
          </p>

          <ul className="mt-7 card_grid">
            {post ?.length > 0 ? (
              post.map((post : StartupTypeCard) => (
                <StartupCard  key={post?._id} post={post}/>
              ))
            ) : (
            <p className="no-result">
               No startups found
            </p>)}
          </ul>
      </section>
     </>
  );
}
