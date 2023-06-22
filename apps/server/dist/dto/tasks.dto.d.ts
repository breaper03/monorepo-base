export declare class CreateTaskDto {
    name: string;
    description: string;
    type: string;
    price: number;
    place?: string;
    userId: string;
}
export declare class UpdateTaskDto {
    name?: string;
    description?: string;
    type: string;
    price?: number;
    place?: string;
    userId?: string;
}
