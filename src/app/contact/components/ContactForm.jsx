import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactForm() {

    const handleSendMessage = async (event) => {
        event.preventDefault();

        const form = event?.target;
        const name = form?.name?.value;
        const email = form?.email?.value;
        const subject = form?.subject?.value;
        const message = form?.message?.value;

        if (!name) {
            return toast.error("Enter your name first!")
        }

        if (!email) {
            return toast.error("Enter your email first!")
        }

        if (!subject) {
            return toast.error("Enter your subject first!")
        }

        if (!message) {
            return toast.error("Enter your message first!")
        }

        const templateParams = {
            from_name: email,
            to_name: "Muhammad",
            message,
            subject
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )

            toast.success("Your email sent successfully!")

            form.reset()
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    return (
        <div className='p-4 rounded-xl bg-local'>
            <h2 className='font-semibold text-4xl text-white'>Let’s work <span className='text-green-500'>together</span>.</h2>
            <form className='mt-4 flex flex-col space-y-4' onSubmit={handleSendMessage}>
                <input className='px-4 py-3 rounded-lg bg-transparent border-2 border-white outline-none text-white' type="text" name='name' placeholder='Name *' />
                <input className='px-4 py-3 rounded-lg bg-transparent border-2 border-white outline-none text-white' type="email" name='email' placeholder='Email *' />
                <input className='px-4 py-3 rounded-lg bg-transparent border-2 border-white outline-none text-white' type="text" name='subject' placeholder='Subject *' />
                <textarea className='px-4 py-3 rounded-lg bg-transparent border-2 border-white outline-none text-white' name="message" placeholder='Message *' cols="30" rows="10"></textarea>
                <button className='btn btn-success btn-block text-white'>Send Message</button>
            </form>
        </div>
    )
}
