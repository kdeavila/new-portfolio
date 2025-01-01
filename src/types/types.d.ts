declare global {
    interface CardProps {
        image: ImageMetadata;
        title: string;
        desc: string;
        tags: string[];
        github: string;
        demo: string;
        timer: number;
    }
}

export {};
