export type DrawerProps = {
    isVisible: boolean;
    changeVisible: (isDrawerClosed: boolean) => void
}
export type MenuItemProps = {
    text: string;
    translate: 'left' | 'right';
}

