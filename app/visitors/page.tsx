import React from 'react'
import { Room } from './Room'
import LiveMarqueeComponent from '@/components/LiveMarqueeComponent'
import { CommentForm } from '@/components/CommentForm'

export default function Visitors() {
  return (
    <Room>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-4">
        <div className="w-full">
          <LiveMarqueeComponent />
        </div>
        <div className="bg-card text-card-foreground w-full max-w-lg rounded-xl border p-6">
          <h2 className="text-2xl leading-none font-semibold tracking-tight">Leave a comment!</h2>
          <div className="mt-4">
            <CommentForm />
          </div>
        </div>
      </div>
    </Room>
  )
}
