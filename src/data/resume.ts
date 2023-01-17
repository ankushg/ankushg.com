import type { ImageRef } from '../mytypes'

export type ResumeTime = string | { label: string; dateTime: string }

export interface ResumeTimeAndLabel {
  label: string
  datetime: string
}

export function getTimeAndLabel(resumeTime: ResumeTime) {
  if (typeof resumeTime === 'string') {
    return {
      label: resumeTime,
      datetime: resumeTime,
    }
  } else {
    return {
      label: resumeTime.label,
      datetime: resumeTime.dateTime,
    }
  }
}
export interface ResumeItem {
  company: string
  title?: string
  start: ResumeTime
  end: ResumeTime
  logo: ImageRef
}

export const resume: ResumeItem[] = [
  {
    company: 'Planetaria',
    title: 'CEO',
    logo: './src/images/logos/airbnb.svg',
    start: '2019',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Airbnb',
    title: 'Product Designer',
    logo: './src/images/logos/airbnb.svg',
    start: '2014',
    end: '2019',
  },
  {
    company: 'Facebook',
    title: 'iOS Software Engineer',
    logo: './src/images/logos/airbnb.svg',
    start: '2011',
    end: '2014',
  },
  {
    company: 'Starbucks',
    title: 'Shift Supervisor',
    logo: './src/images/logos/airbnb.svg',
    start: '2008',
    end: '2011',
  },
]
