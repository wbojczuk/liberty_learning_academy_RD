"use client"

import { useRef, useState } from "react"
import "./freeestimateform.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import MessageStatus from "./MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{sendEmail(evt, setStatus, {
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        data: Object.fromEntries(new FormData(formRef.current))
    }, formRef.current)}}>

        <h3 id="estimateFormTitle"><span className="underline">Contact Us</span></h3>

        {/* START FIELDS */}
            
        
            <div className="input-wrapper">
                <label htmlFor="Name">Name</label>
                <input required type="text" name="Name" id="name_input" />
            </div>

            <div className="input-wrapper">
                <label htmlFor="Email">Email</label>
               <input required type="email" name="Email" id="email" />
               </div>
            
            <div className="input-wrapper">
                <label htmlFor="Phone_Number">Phone Number</label>
                <input required type="tel" name="Phone_Number" id="phonenum"/>
            </div>
           

            <div className="input-wrapper">
            <label htmlFor="Details">Leave us a message...</label>
                <textarea required maxLength={5000} name="Details" id="messageInput"></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className={`main-link`} id="estimateFormSubmit" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
