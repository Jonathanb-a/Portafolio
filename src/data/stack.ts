import { createElement } from 'react'
import type { IconType } from 'react-icons'
import {
  SiAlpinedotjs,
  SiAstro,
  SiClaude,
  SiClaudecode,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiRailway,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

// Insignia de texto para marcas sin icono en react-icons (no se inventan logos).
function textBadge(initials: string): IconType {
  const Badge: IconType = ({ className, ...rest }) =>
    createElement(
      'svg',
      { viewBox: '0 0 24 24', fill: 'none', className, ...rest },
      createElement('rect', {
        x: 2, y: 2, width: 20, height: 20, rx: 5,
        stroke: 'currentColor', strokeWidth: 1.6,
      }),
      createElement(
        'text',
        {
          x: 12, y: 15.6, textAnchor: 'middle', fontSize: 9.5, fontWeight: 700,
          fontFamily: 'Arial, Helvetica, sans-serif', fill: 'currentColor',
        },
        initials,
      ),
    )
  return Badge
}

export type Tech = {
  name: string
  /** Icono de react-icons/si */
  icon: IconType
  /** Color oficial de la marca (hex). */
  color: string
  /** Texto opcional bajo el nombre, p. ej. el nivel. */
  note?: string
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
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', note: 'básico' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Alpine.js', icon: SiAlpinedotjs, color: '#8BC0D0' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB', note: 'aprendiendo' },
  { name: 'Astro', icon: SiAstro, color: '#BC52EE' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Railway', icon: SiRailway, color: '#FFFFFF' },
  { name: 'Claude', icon: SiClaude, color: '#D97757' },
  { name: 'Gemini', icon: SiGooglegemini, color: '#8E75B2' },
  // react-icons no trae el logo de OpenAI: insignia con iniciales.
  { name: 'OpenAI (ChatGPT)', icon: textBadge('OA'), color: '#FFFFFF' },
  { name: 'Claude Code', icon: SiClaudecode, color: '#D97757' },
]
