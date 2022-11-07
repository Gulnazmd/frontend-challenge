export type TCatsImages = {
  cats?: TCats
  onClick?: () => void
}

export type TCats = {
  length: number
  map: any
  id: string
  onClick?: () => void
  url: string
  width: number
  height: number
  likes: boolean
}
