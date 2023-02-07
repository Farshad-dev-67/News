export interface INews {
    id: number;
    title: string;
    lead: string;
    body: string;
    publishDate: string;
    hasReporter: boolean;
    services: number[];
    reporters: number[];
}
