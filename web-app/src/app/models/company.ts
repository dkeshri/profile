export default interface Company {
    name: string;
    role?: string;
    startDate: string;
    endDate: string;
    logoUrl: string;
    designation:string;
    responsibilities?: string[];
    technologies?: string[];
    points: string[];
}