import axios from "axios";
import React, { useRef, useState } from "react";
import { FiCornerDownLeft, FiX } from "react-icons/fi";
import useModal from "../../utils/hooks/useModal"


export default function WaitlistButton() {
    const wrapper = useRef<any>();
    const input = useRef<any>();

    const {isOpen, setIsOpen} = useModal(wrapper, false);
    const [loading, setLoading] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const enterEmail = async () => {
        const email = input.current.value;
        if (validateEmail(email)) { 
            setLoading(true);
            await axios.post("https://axantillon.npkn.net/add-waitlist", {
                email: email
            }).then((res) => {
                console.log(res);
                setLoading(false);
                setInvalidEmail(false);
                setSuccess(true);
            }).catch(err => {
                console.log(err);
                setError(true);
            })
        } else {
            setInvalidEmail(true);
        }
    }

    const handleEnter = () => {
        try {
            enterEmail();
        } catch (e) {
            console.log(e);
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleEnter();
        }
    }

    return (
        <>
            <div className="flex flex-col items-center mt-16 space-y-2">
                <div onClick={() => setIsOpen(true)} className="flex items-center justify-center w-60 h-14 rounded-full border border-black bg-white cursor-pointer">
                    <span> join the waitlist</span>
                </div>
                <span className="text-sm"> get notified when we release our first drop...</span>
            </div>
            {isOpen &&  
                <div className="absolute z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-10">
                    <div ref={wrapper} className="flex flex-col w-1/3 p-4 space-y-4 rounded-md bg-white">

                        <div onClick={() => {setIsOpen(false); setError(false); setSuccess(false)}} className="flex items-center justify-end text-xl cursor-pointer">
                            <FiX/>
                        </div>

                        { !loading ?
                            <>
                                { success ? 
                                    <span> yeah! thanks for joining our waitlist! </span>
                                :
                                    <>
                                        <div>
                                            <span> enter your email address </span>
                                        </div>
                                        <div className="">
                                            <div className={`flex items-center w-full p-2 border ${invalidEmail ? 'border-red-500' : 'border-black'} rounded-sm`}>
                                                <input onKeyPress={handleKeyPress} ref={input} className="flex-grow outline-none bg-white text-sm" type="text" />
                                                <div onClick={() => handleEnter()} className={`${invalidEmail && 'text-red-500'} cursor-pointer`}>
                                                    <FiCornerDownLeft/>
                                                </div>
                                            </div>
                                            {invalidEmail && <span className="text-red-500 text-xs"> sorry, that's not an email </span>}
                                        </div>
                                    </>
                                }

                                { error &&
                                    <div className="text-red-500">
                                        <span> so sorry, an error occured... </span>
                                    </div>
                                } 
                            </>
                        :
                            <div className="">
                                <span> loading... </span>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}