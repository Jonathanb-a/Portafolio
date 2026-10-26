import type { IconType } from 'react-icons'
import {
  SiAlpinedotjs,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiRailway,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

export type Tech = {
  name: string
  /** Icono de react-icons/si */
  icon: IconType
  /** Color oficial de la marca (hex). */
  color: string
}

// Para editar: agrega, quita o reordena. Iconos en https://react-icons.github.io/react-icons/icons/si/
// GitHub y Railway usan blanco porque su color oficial es negro y no se vería sobre el fondo oscuro.
export const stack: Tech[] = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#663399' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Alpine.js', icon: SiAlpinedotjs, color: '#8BC0D0' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Railway', icon: SiRailway, color: '#FFFFFF' },
]
