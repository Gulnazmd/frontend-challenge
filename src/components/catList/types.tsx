export type TCatsImages = {
  cats?: TCats
  onClick?: () => void
}

export type TCats = {
  className?: string
  map?: any
  length?: number
  id: string
  onClick?: () => void
  url: string
  likes?: boolean
}
