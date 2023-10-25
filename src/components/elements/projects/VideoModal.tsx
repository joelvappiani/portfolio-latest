'use client'
import { ModalProps } from '@/types/Card'
import React from 'react'

const VideoModal = ({ isOpen, src, handleOpenCloseModal }: ModalProps) => {


    return (
        <div className={`hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-white bg-opacity-20 z-50`}>VideoModal</div>
    )
}

export default VideoModal