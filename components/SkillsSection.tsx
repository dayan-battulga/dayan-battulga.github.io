'use client'

import React from 'react'
import SkillCard from '@/components/SkillCard'
import { GitBranch, Github } from 'lucide-react'

const skills = [
  {
    title: 'Typescript',
    icon: '/icons/TypeScript.png',
    colors: ['#3178C6'],
  },
  {
    title: 'Next.js',
    icon: '/icons/Next.js.png',
    colors: ['#d1d5db', '#4b5563'],
  },
  {
    title: 'Python',
    icon: '/icons/Python.png',
    colors: ['#3776AB', '#FFD43B'],
  },
  {
    title: 'Pytorch',
    icon: '/icons/PyTorch.png',
    colors: ['#EE4C2C'],
  },
  {
    title: 'React',
    icon: '/icons/React.png',
    colors: ['#61DAFB'],
  },
  {
    title: 'Tensorflow',
    icon: '/icons/TensorFlow.png',
    colors: ['#FF6F00'],
  },
  {
    title: 'C',
    icon: '/icons/C.png',
    colors: ['#A8B9CC'],
  },
  {
    title: 'Git',
    icon: '/icons/github-mark.png',
    colors: ['#08262C'],
  },
]

export default function SkillsSection() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 border-none sm:grid-cols-4">
      {skills.map((skill) => (
        <SkillCard key={skill.title} title={skill.title} icon={skill.icon} colors={skill.colors} />
      ))}
    </div>
  )
}
