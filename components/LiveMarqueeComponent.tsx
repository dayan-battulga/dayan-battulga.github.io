'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from './lib/utils'
import { Marquee } from './magicui/marquee'
import { useThreads, useCreateThread } from '@liveblocks/react'
import type { CommentBody, CommentBodyText, CommentBodyParagraph } from '@liveblocks/core'

type ThreadMetadata = {
  authorName: string
}

// Helper function to extract plain text from Liveblocks comment body
function getPlainTextFromCommentBody(body: CommentBody): string {
  if (!body || !body.content) {
    return ''
  }

  return body.content
    .map((node) => {
      const p = node as CommentBodyParagraph
      if (p.type === 'paragraph' && p.children) {
        return p.children.map((child) => (child as CommentBodyText).text || '').join('')
      }
      return ''
    })
    .join('\\n')
    .trim()
}

const ReviewCard = ({ img, name, body }: { img: string; name: string; body: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function LiveMarqueeComponent() {
  const { threads } = useThreads()
  const createThread = useCreateThread()
  const hasInitialized = React.useRef(false)

  React.useEffect(() => {
    if (!threads || hasInitialized.current) {
      return
    }

    if (threads.length === 0) {
      hasInitialized.current = true
      // Seed with a single default review
      const body: CommentBody = {
        version: 1,
        content: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Yo, this my website! Write a comment :D',
              } as CommentBodyText,
            ],
          },
        ],
      }
      createThread({
        metadata: {
          authorName: 'Dayan',
        },
        body,
      })
    }
  }, [threads, createThread])

  const allReviews =
    threads
      ?.map((thread) => {
        const firstComment = thread.comments?.[0]
        if (!firstComment || !firstComment.body) return null

        const metadata = thread.metadata as ThreadMetadata
        const authorName = metadata.authorName || 'Anonymous'
        const img = `https://avatar.vercel.sh/${authorName}`
        const body = getPlainTextFromCommentBody(firstComment.body)

        if (!body) return null

        return {
          id: thread.id,
          name: authorName,
          img: img,
          body: body,
        }
      })
      .filter((review): review is NonNullable<typeof review> => review !== null) ?? []

  const firstRow = allReviews.slice(0, Math.ceil(allReviews.length / 2))
  const secondRow = allReviews.slice(Math.ceil(allReviews.length / 2))

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} img={review.img} name={review.name} body={review.body} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} img={review.img} name={review.name} body={review.body} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
