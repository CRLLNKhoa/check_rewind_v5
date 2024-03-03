import React from 'react'
import CardBlog from './components/CardBlog'

export default function page() {
  return (
    <main className="flex flex-col items-center justify-between overflow-y-auto space-y-6">
      <CardBlog />
      <CardBlog />
      <CardBlog />
      <CardBlog />
      <CardBlog />
      <CardBlog />
    </main>
  )
}
