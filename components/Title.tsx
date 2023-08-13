import React from 'react'

interface Props {
  children: React.ReactNode
}

export function Title(props: Props) {
  return <h1 {...props} className="font-bold text-2xl" />
}
