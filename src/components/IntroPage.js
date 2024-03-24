import React from 'react'
import Link from 'next/link' // Import Link from next/link

const IntroPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ChatSmart</h1>
        <p className="text-lg mb-8">
          ChatSmart revolutionizes the way you communicate, blending cutting-edge AI with an
          intuitive, user-friendly chat interface. Experience real-time conversations like never
          before, in a sleek design that is as vibrant as your ideas. Dive into a world where every
          message brings you closer to clarity and connection.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link href="/chat">
            <a className="px-6 py-3 rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 text-white font-semibold">
              Start Chatting
            </a>
          </Link>
          <Link href="/about">
            <a className="px-6 py-3 rounded-lg border border-orange-500 text-orange-500 font-semibold">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IntroPage
