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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UsersService } from './users.service';
import { createUserDto, updateUserDto } from 'src/dto/users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    private readonly logger;
    getUsers(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, import("../Schema/users.schema").Users, "find">;
    getUserById(_id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, import("../Schema/users.schema").Users, "findOne">;
    createUser(user: createUserDto, ip: any): Promise<import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: any, user: updateUserDto, ip: any): Promise<import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteUser(id: any): Promise<import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    login(ip: string, user: updateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    logOut(user: updateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../Schema/users.schema").Users> & Omit<import("../Schema/users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
