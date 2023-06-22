/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Tasks } from 'src/Schema/tasks.schema';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/tasks.dto';
export declare class TasksService {
    private tasksModel;
    constructor(tasksModel: Model<Tasks>);
    findAllTasks(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Tasks, "find">;
    findTaskByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findOneTasks(_id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Tasks, "findOne">;
    createTasks(createTaskDto: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateTasks(_id: string, task: UpdateTaskDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Tasks, "findOneAndUpdate">;
    removeTasks(_id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Tasks> & Omit<Tasks & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Tasks, "findOneAndDelete">;
}
