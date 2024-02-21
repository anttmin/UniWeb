import React from "react";
import Postform from "../components/Postform";
import uuid from 'react-uuid';
import { redirect } from "react-router-dom";

const Create = () => {
  return (
    <>
     <Postform />
    </>
  );
};

export default Create;

export const action = async ({request,params}) => {
const data =await request.formData();

const postData = {
  id : uuid(),
  title : data.get("title"),
  description : data.get("description"),
  image : data.get("image"),
  date : data.get("date")
}
console.log(postData);

 const reponse =await fetch ("http://localhost:8080/posts",{
  method : "POST",
  headers : {
    "Content-Type":"application/json",
  },
  body : JSON.stringify(postData)
 })
 console.log(reponse);
  if(!reponse.ok){
    //code
  }
  return redirect("/")
  
}


//  40