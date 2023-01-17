import type { ImageRef } from '../mytypes'

export interface ToolSectionData {
  title: string
  tools: ToolData[]
}

// TODO: use mdx?
export interface ToolData {
  name: string
  href?: string
  description: string
  image?: ImageRef
}

export const toolsContent: ToolSectionData[] = [
  {
    title: 'Workstation',
    tools: [
      {
        name: '16” MacBook Pro, M1 Max, 64GB RAM (2021)',
        description:
          'I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.',
      },
      {
        name: 'Apple Pro Display XDR (Standard Glass)',
        description:
          'The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.',
      },
      {
        name: 'IBM Model M SSK Industrial Keyboard',
        description:
          'They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.',
      },
      {
        name: 'Apple Magic Trackpad',
        description:
          'Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.',
      },
      {
        name: 'Herman Miller Aeron Chair',
        description:
          'If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.',
      },
    ],
  },
  {
    title: 'Software Development Tools',
    tools: [],
  },
  {
    title: 'Productivity',
    tools: [
      {
        name: 'Alfred',
        description:
          'It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.',
      },
      {
        name: 'Reflect',
        description:
          'Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.',
      },
      {
        name: 'SavvyCal',
        description:
          'Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.',
      },
      {
        name: 'Focus',
        description:
          'Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.',
      },
    ],
  },
]
