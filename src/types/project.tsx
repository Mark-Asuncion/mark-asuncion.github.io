export default interface Project {
    name: string,
    description: string,
    link: string,
    demo_link?: string,
    img_sources: string[],
    date_from: Date,
    date_to?: Date
}
