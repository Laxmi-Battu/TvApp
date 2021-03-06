// export interface Tvshow {
//     genres:string;
//     name:string;
//     network:string;
//     language:string;
//     rating:number;
//     title: string
//     image: string
//     description: string
//     id: number
// }
export interface Schedule {
    time: string;
    days: string[];
}

export interface Rating {
    average?: number;
}

export interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface Network {
    id: number;
    name: string;
    country: Country;
}

export interface Country2 {
    name: string;
    code: string;
    timezone: string;
}

export interface WebChannel {
    id: number;
    name: string;
    country: Country2;
}

export interface Externals {
    tvrage: number;
    thetvdb?: number;
    imdb: string;
}

export interface Image {
    medium: string;
    original: string;
}

export interface Self {
    href: string;
}

export interface Previousepisode {
    href: string;
}

export interface Nextepisode {
    href: string;
}

export interface Links {
    self: Self;
    previousepisode: Previousepisode;
    nextepisode: Nextepisode;
}

export interface Tvshow {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime?: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel: WebChannel;
    dvdCountry?: any;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
}

