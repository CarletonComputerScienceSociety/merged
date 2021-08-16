export interface Event {
    id: string;
    title: string;
    body: string;
    startTime: string;
    endTime: string;
    category: string;
    poster: string;
}

export interface Organization {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    backgroundUrl: string;
    slug: string;
}

export interface OrganizationDetailed {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    backgroundUrl: string;
    slug: string;
    newsItems: Array<any>
}

export interface Error {
    message: string;
}
