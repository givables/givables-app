
export type piece = {
    id: string;
    name: string;
    image: string;
    description: {
        text: string;
        date: string;
        dimensions: string;
    };
    artist: {
        name: string;
        about: string;
        instagram: string;
        website: string;
    }
}

export type drop = {
    id: string,
    title: string,
    styles: string[],
    artists: string[],
    description: string,
    pieces: piece[]
}