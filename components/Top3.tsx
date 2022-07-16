import React from 'react'

interface Props {
  items: Item[]
}

interface Item {
  name: string
  minutes: number
}

function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const modulo = Math.floor(minutes % 60)

  return `${hours} h ${modulo} min`
}

const rankEmojis = ['🥇', '🥈', '🥉']

const canvasWidth = 300

const barHeight = 50
const gutter = 25

const barMinWidth = barHeight

export function Top3(props: Props) {
  const firstItem = props.items[0]
  const lastItem = props.items.slice(-1)[0]

  return (
    <svg width="300" height="200" viewBox="0 0 300 200">
      <g className="fill-blue-200 dark:fill-slate-600">
        {props.items.map((item, i) => {
          const width =
            ((item.minutes - lastItem.minutes) /
              (firstItem.minutes - lastItem.minutes)) *
              canvasWidth -
            barMinWidth

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
