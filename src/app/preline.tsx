'use client'
import { useEffect } from 'react'

export default function Preline() {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  })
  return (<></>)
}