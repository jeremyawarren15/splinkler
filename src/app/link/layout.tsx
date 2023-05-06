import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function LinkLayout({children}: Props) {
  return (
    <div className="max-w-7xl mx-auto mt-6">
      {children}
    </div>
  )
}