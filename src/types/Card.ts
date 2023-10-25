export type CardProps = {
    name: string,
    src: string,
    desc: string,
    type: string,
    platform: string,
    link: string
}

export type FilterProps = {
    handleFilter: (type: string) => void
}

export type ModalProps = {
    isOpen: boolean,
    src: string,
    handleOpenCloseModal: () => void
}

export type ProjectsProps = {
    sticky: boolean;
}