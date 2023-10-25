"use client"
import React, { useEffect, useState } from 'react'
import { motion, useAnimate, useInView, stagger } from 'framer-motion'
import NeuInput from '../elements/contact/NeuInput'
import NeuButton from '../elements/contact/NeuButton';
import ContactImage from '../elements/contact/ContactImage';
import { Form } from '@/types/Inputs';




const Contact = () => {
    const [formValue, setFormValue] = useState<Form>({
        name: '',
        email: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState<boolean>(false)
    const [message, setMessage] = useState<string | null>(null)
    const [sent, setSent] = useState<boolean>(false)
    const [goodToSend, setGoodToSend] = useState<boolean>(false)
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)




    useEffect(() => {
        if (isInView) {
            animate('.form', { y: -20, opacity: 1 }, { delay: stagger(0.3) })
        }
    }, [isInView])
    useEffect(() => {
        message?.includes('❌') && animate('.message', { color: 'red', opacity: 1 }, { duration: .3 })
        message?.includes('✅') && animate('.message', { color: 'green', opacity: 1 }, { duration: .3 })
    }, [message])

    function handleInputValue(id: string, value: string) {
        setFormValue({ ...formValue, [id]: value })
    }

    //Manages the validation and handle the message send if all good
    async function handleSend() {
        setSubmitted(true)
        if (Object.values(formValue).every((value: string) => value.length)) {
            setGoodToSend(true)
            const serverResponse = await fetch('http://localhost:3000/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValue)
            })
            const response = await serverResponse.json()
            if (response.result) {
                setSent(true)
                setSubmitted(false)
                setFormValue({ name: '', email: '', message: '' })
                setMessage('Message sent ! ✅')
                setGoodToSend(false)
            } else {
                setSent(true)
                setSubmitted(false)
                setGoodToSend(false)
                setMessage('❌ Something went wrong, please try again...')
            }
            await new Promise(resolve => setTimeout(resolve, 2000))
            setSent(false)
            setMessage('')
        }
        // await new Promise(resolve => setTimeout(resolve, 500))

    }




    return (

        <motion.div
            id='Contact'

            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            // transition={{ delay: 2.2 }}
            className='flex flex-col w-screen z-10 h-[calc(100vh-9rem)] bg-gradient-to-b from-gray-100 to-gray-200 font-poppins'
        >
            <div className='w-full flex justify-between mt-28 md:mt-40 md:pl-40'>

                <motion.h2
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6, delay: .1 }}
                    className='text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink font-bold flex justify-center md:justify-start text-3xl sm:text-6xl md:text-7xl lg:text-8xl uppercase drop-shadow-md w-full '
                >Get In Touch</motion.h2>

            </div>



            <ContactImage />


            <div className='lg:-mt-52 flex flex-col md:flex-row justify-end pb-10 sm:pb-0 sm:justify-center items-center h-[70%] w-screen lg:gap-24'>
                <form
                    ref={scope}
                    className=' lg:absolute lg:right-[10%] 2xl:right-[15%] flex flex-col items-center justify-center w-1/2 md:w-1/3 h-2/3  gap-2 sm:gap-4 max-w-[600px]'
                    action=""
                >
                    {Object.keys(formValue).map((input: string, i: number) => (

                        <span key={i} className='form opacity-0 -translate-y-[10px] max-h-fit'>
                            <NeuInput id={input} type={input === 'message' ? 'textfield' : 'classic'} placeholder={input} handleInputValue={handleInputValue} submitted={submitted} inputValue={formValue[input as keyof Form]} sent={sent} />
                        </span>
                    ))}

                    <span className='form opacity-0 -translate-y-[10px] max-h-fit'>

                        <NeuButton handleSend={handleSend} submitted={goodToSend} sent={sent} />
                    </span>
                    <span className='message text-xs text-center opacity-0'>{message}</span>


                </form>
            </div>

        </motion.div>
    )
}

export default Contact