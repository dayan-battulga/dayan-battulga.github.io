'use client'

import React, { useState } from 'react'
import { useCreateThread, useThreads, useDeleteThread } from '@liveblocks/react'
import { CommentBody, CommentBodyText } from '@liveblocks/core'

export function CommentForm() {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const { threads } = useThreads()
  const createThread = useCreateThread()
  const deleteThread = useDeleteThread()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (threads && threads.length >= 8) {
      const randomThreadIndex = Math.floor(Math.random() * threads.length)
      const threadToDelete = threads[randomThreadIndex]
      deleteThread(threadToDelete.id)
    }

    const commentBody: CommentBody = {
      version: 1,
      content: [
        {
          type: 'paragraph',
          children: [
            {
              text: comment,
            } as CommentBodyText,
          ],
        },
      ],
    }

    const authorName = name.trim() || 'Anonymous'

    createThread({
      metadata: { authorName },
      body: commentBody,
    })

    setName('')
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="bg-background border-input mt-1 block w-full rounded-md border p-2 text-sm"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="comment" className="text-sm font-medium">
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment..."
          className="bg-background border-input mt-1 block w-full rounded-md border p-2 text-sm"
          rows={3}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-semibold"
        disabled={!comment.trim()}
      >
        Submit
      </button>
    </form>
  )
}
