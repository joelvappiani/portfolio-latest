export type CardProps = {
    name: string,
    src: string,
    desc: string,
    type: string,
    platform: string
}

export type FilterProps = {
    handleFilter: (type: string) => void
}