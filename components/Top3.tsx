import React from 'react'

import { formatMinutes } from '../utils'

interface Props {
  items: Item[]
}

interface Item {
  name: string
  minutes: number
  instagram?: string
}

const rankEmojis = ['🥇', '🥈', '🥉']

const canvasWidth = 300

const barPadding = 10
const barHeight = 48
const gutter = 24

const barMinWidth = barHeight

export function Top3(props: Props) {
  const firstItem = props.items[0]
  const lastItem = props.items.slice(-1)[0]

  const canvasHeight = (barHeight + gutter) * props.items.length - gutter

  return (
    <svg
      width={canvasWidth}
      height={canvasHeight}
      viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
    >
      <g className="fill-blue-200 dark:fill-slate-600">
        {props.items.map((item, i) => {
          const width =
            ((item.minutes - lastItem.minutes) /
              (firstItem.minutes - lastItem.minutes)) *
            canvasWidth

          return (
            <>
              <rect
                key={i}
                x={barMinWidth}
                y={(barHeight + gutter) * i}
                width={width}
                height={barHeight}
              />
              <rect
                x="0"
                y={(barHeight + gutter) * i}
                width={barMinWidth}
                height={barHeight}
              />
            </>
          )
        })}
      </g>
      <g>
        {rankEmojis.map((emoji, i) => (
          <text
            x={barPadding}
            y={barHeight / 2 + (barHeight + gutter) * i}
            alignmentBaseline="middle"
            textAnchor="start"
            key={i}
          >
            {emoji}
          </text>
        ))}
      </g>
      {props.items.map((item, i) => {
        const text = (
          <text
            x={canvasWidth - barPadding}
            y={barPadding + (barHeight + gutter) * i}
            alignmentBaseline="hanging"
            textAnchor="end"
            className="fill-current dark:fill-white"
            key={i}
          >
            {item.instagram ? `@${item.instagram}` : item.name}
          </text>
        )

        if (item.instagram) {
          return (
            <a
              href={`https://instagram.com/${item.instagram}`}
              target="_newtab"
            >
              {text}
            </a>
          )
        }

        return text
      })}
      <g className="fill-slate-600 dark:fill-slate-300 text-sm">
        {props.items.map((item, i) => {
          return (
            <text
              x="290"
              y={barHeight - barPadding + (barHeight + gutter) * i}
              alignmentBaseline="baseline"
              textAnchor="end"
              key={i}
            >
              {formatMinutes(item.minutes)}
            </text>
          )
        })}
      </g>
    </svg>
  )
}
