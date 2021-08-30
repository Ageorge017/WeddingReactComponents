export interface CommonWeddingProps {
    brideFullname: string,
    groomFullname: string,
    weddingDate: Date,
}

export interface NavbarProps extends CommonWeddingProps {
    navbarSections: string[]
}

export interface DateUtils {
    month: string,
    day: string,
    year: string,
    dayOfWeek: string,
}