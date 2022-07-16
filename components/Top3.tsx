import React from 'react'

import { formatMinutes } from '../utils'

interface Props {
  items: Item[]
}

interface Item {
  name: string
  minutes: number
}

const rankEmojis = ['🥇', '🥈', '🥉']

const canvasWidth = 300

const barHeight = 50
const gutter = 25

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
            x="10"
            y={barHeight / 2 + (barHeight + gutter) * i}
            alignmentBaseline="middle"
            textAnchor="start"
            key={i}
          >
            {emoji}
          </text>
        ))}
      </g>
      <g className="fill-current dark:fill-white">
        {props.items.map((item, i) => {
          return (
            <text
              x={canvasWidth - 10}
              y={10 + (barHeight + gutter) * i}
              alignmentBaseline="hanging"
              textAnchor="end"
              key={i}
            >
              {item.name}
            </text>
          )
        })}
      </g>
      <g className="fill-slate-600 dark:fill-slate-300 text-sm">
        {props.items.map((item, i) => {
          return (
            <text
              x="290"
              y={barHeight - 10 + (barHeight + gutter) * i}
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
