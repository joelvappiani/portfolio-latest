'use client'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
type Props = {
    isOpen: boolean
    toggleModal: (bool: boolean) => void
    src: string
}
export default function VideoModal({ isOpen, toggleModal, src }: Props) {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    return (
        <div>

            <Transition show={isOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
                <Dialog onClose={() => toggleModal(false)} initialFocus={videoRef}>


                    <Transition.Child
                        className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-out duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        aria-hidden="true"
                    />


                    <Transition.Child
                        className="fixed inset-0 z-[99999] flex p-6"
                        enter="transition ease-out duration-300"
                        enterFrom="opacity-0 scale-75"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-out duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-75"
                    >
                        <div className="max-w-5xl mx-auto h-full flex items-center">
                            <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                                <video ref={videoRef} width="1920" height="1080" loop controls >
                                    <source src={src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>

                </Dialog>
            </Transition>

        </div>
    )
}