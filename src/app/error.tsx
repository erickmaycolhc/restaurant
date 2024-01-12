'use client'
export default function ErrorPage({error}:{error:Error}){
  console.log(error);

  return(
    <div>Something went wrong, try again!</div>
  )
}
