export interface Tab {
    id: string
    handle?: FileSystemFileHandle
    title?: string
    unsaved: boolean
    content: string
}
