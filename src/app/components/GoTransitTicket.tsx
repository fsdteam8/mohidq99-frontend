"use client"

import { useState, useEffect } from "react"

export default function GoTransitTicket() {
  const [timeLeft, setTimeLeft] = useState("01:49:05")
  const [timeSinceActivation, setTimeSinceActivation] = useState("02:10:54")

  // Update the countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      // This is a simplified timer for demo purposes
      const [hours, minutes, seconds] = timeLeft.split(":").map(Number)
      const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1

      if (totalSeconds < 0) {
        clearInterval(timer)
        return
      }

      const newHours = Math.floor(totalSeconds / 3600)
      const newMinutes = Math.floor((totalSeconds % 3600) / 60)
      const newSeconds = totalSeconds % 60

      setTimeLeft(
        `${newHours.toString().padStart(2, "0")}:${newMinutes
          .toString()
          .padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`,
      )

      // Update time since activation
      const [actHours, actMinutes, actSeconds] = timeSinceActivation.split(":").map(Number)
      const actTotalSeconds = actHours * 3600 + actMinutes * 60 + actSeconds + 1

      const actNewHours = Math.floor(actTotalSeconds / 3600)
      const actNewMinutes = Math.floor((actTotalSeconds % 3600) / 60)
      const actNewSeconds = actTotalSeconds % 60

      setTimeSinceActivation(
        `${actNewHours.toString().padStart(2, "0")}:${actNewMinutes
          .toString()
          .padStart(2, "0")}:${actNewSeconds.toString().padStart(2, "0")}`,
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, timeSinceActivation])



  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(formatted);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg ">

        
      {/* Ticket Container */}
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="bg-[#2841b3] text-white py-4 flex flex-col items-center">
          <div className="w-16 h-16 mb-2">
            <GoTransitLogo />
          </div>
    
          <div className="flex items-center justify-between w-full mt-2 animate-marquee">
            <div className="w-1 h-1 bg-white rounded-full" />
            <h1 className="text-xl font-bold text-center ">GO TRANSIT</h1>
            <div className="w-1 h-1 bg-white rounded-full" />
            <h1 className="text-xl font-bold text-center ">GO TRANSIT</h1>
          </div>
          <div className="flex items-center justify-center w-full mt-2">
           
            <p className="text-sm text-center">Streetsville GO to Union Station GO</p>
            
          </div>
          <div className="relative w-full mt-4 mb-[-14px] flex items-center justify-between">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500  transform -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-blue-500 border-white  border-2 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Ticket Info */}
        <div className="bg-white p-4">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-center text-black">x1</h2>
              <p className="text-black text-center">Passenger(s)</p>
              <p className="text-xs text-black text-center">1x Adult</p>
            </div>
            <div className="w-8 h-8 ml-[-20px] text-gray-500 text-center">
              <TrainIcon />
            </div>
            <div className="flex flex-col items-center">
            <div className="w-6 h-6 text-gray-700">
                <OneWayIcon />
              </div>
              <p className="font-medium mr-2 text-black">One-Way</p>
              
            </div>
          </div>

          <div className="py-4 border-b border-gray-200">
            <p className="text-md  text-gray-700 text-center">
              Ticket Number: <span className="font-bold">MZ63313105</span>
            </p>
          </div>

          {/* Barcode */}
          <div className="py-4 flex flex-col items-center">
            <div className="w-full h-16 mb-2">
              <BarcodeIcon />
            </div>
            <p className="text-blue-600 font-bold text-lg mt-[-50px]">ACTIVE</p>
          </div>

          {/* Date and Time Info */}
          <div className="flex justify-between text-xs text-gray-700 py-2">
            <div>
              <p className="font-medium">CURRENT DATE & TIME:</p>
              <p>{currentTime}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">TIME SINCE ACTIVATION:</p>
              <p>{timeSinceActivation}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#2841b3] text-white p-4 flex flex-col items-center">
          <p className="text-sm text-center mb-3">
            Please show proof of your ticket to the
            <br />
            Customer Protective Officers when
            <br />
            asked
          </p>
          <p className="text-3xl font-bold">{timeLeft}</p>
        </div>
      </div>
    </div>
  )
}

function GoTransitLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-23 -11 46 22" className="w-full h-full">
      <defs>
        <clipPath id="c">
          <path d="m-23-11h46v22h-46zM23 1v-2h-34v-10h-2v22h2V1z" />
        </clipPath>
      </defs>
      <path clipPath="url(#c)" fill="#ffffff" d="m-1 0a11 11 0 1 0-11 11h11zm2 0a1 1 0 0 0 22 0A1 1 0 0 0 1 0z" />
    </svg>
  )
}

function OneWayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.66 86.6" className="w-full h-full">
      <path
        fill="currentColor"
        d="M123.85 39L84.79 1.13a4 4 0 1 0-5.57 5.74l33.41 32.43H4a4 4 0 0 0 0 8h108.63L79.21 79.73a4 4 0 0 0 5.57 5.74l39.06-37.91a5.93 5.93 0 0 0 0-8.53z"
      />
    </svg>
  )
}

function TrainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 58" className="w-full h-full">
      <path
        fill="currentColor"
        d="M24 0C10.8 0 0 1.52 0 12.21v29a10.73 10.73 0 0 0 10.5 10.7L6 56.48V58h36v-1.52l-4.5-4.58A10.73 10.73 0 0 0 48 41.22v-29C48 1.52 37.2 0 24 0zM10.5 45.79a4.58 4.58 0 0 1 0-9.15 4.58 4.58 0 0 1 0 9.15zM21 27.47H6V12.21h15zm16.5 18.32a4.58 4.58 0 1 1 4.5-4.57 4.65 4.65 0 0 1-4.5 4.58zM42 27.47H27V12.21h15zm0 0"
      />
    </svg>
  )
}

function BarcodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676 108" className="w-full h-full">
      <path
        fill="currentColor"
        d="M0 0h8v108H0zm52 0h8v108h-8zm17 0h17v108H69zm127 0h17v108h-17zm131 0h17v108h-17zm130 0h17v108h-17zm206 0h13v108h-13zm-79 0h17v108h-17zM275 0h25v108h-25zm130 0h25v108h-25zm127 0h25v108h-25zM96 0h8v108h-8zm17 0h8v108h-8zm109 0h8v108h-8zm18 0h8v108h-8zm70 0h8v108h-8zm130 0h8v108h-8zM258 0h8v108h-8zm95 0h8v108h-8zm131 0h8v108h-8zm82 0h8v108h-8zm44 0h8v108h-8zm18 0h8v108h-8zm17 0h8v108h-8zM501 0h8v108h-8zm13 0h8v108h-8zM370 0h8v108h-8zm18 0h8v108h-8zM126 0h8v108h-8zm52 0h8v108h-8zM17 0h25v108H17zm127 0h25v108h-25z"
      />
    </svg>
  )
}
