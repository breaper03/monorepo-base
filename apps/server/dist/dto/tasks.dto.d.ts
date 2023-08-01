export declare class CreateTaskDto {
    name: string;
    description: string;
    type: string;
    price: number;
    currency: string;
    dateFrom: Date;
    dateTo: Date;
    userId: string;
}
export declare class UpdateTaskDto {
    name?: string;
    description?: string;
    type: string;
    price?: number;
    currency?: string;
    dateFrom?: Date;
    dateTo?: Date;
    userId?: string;
}
