"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UsersController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const users_dto_1 = require("../dto/users.dto");
let UsersController = exports.UsersController = UsersController_1 = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
        this.logger = new common_1.Logger(UsersController_1.name);
    }
    getUsers() {
        return this.usersService.getUser();
    }
    getUserById(_id) {
        return this.usersService.getUserById(_id);
    }
    createUser(user, ip) {
        return this.usersService.createUser(Object.assign(Object.assign({}, user), { signed: ip }));
    }
    async update(id, user, ip) {
        this.logger.log(`El ip del usuario es (${ip}).`);
        const userAuth = await this.usersService.updateUser(id, Object.assign(Object.assign({}, user), { signed: ip }));
        if (!userAuth) {
            throw new common_1.NotFoundException('User Not Found');
        }
        else {
            return userAuth;
        }
    }
    async deleteUser(id) {
        const user = await this.usersService.deleteUser(id);
        if (!user) {
            throw new common_1.NotFoundException('User Not Found');
        }
        else {
            return user;
        }
    }
    async login(ip, user) {
        this.logger.log(`El ip del usuario es (${ip}).`);
        const { name, password, _id } = (await this.getUsers()).find(res => res.name === user.name);
        const obj = { name: name, password: password, signed: ip, token: (_id + Math.random().toString()) };
        const auth = [(await this.getUsers()).some(res => res.name == obj.name), (await this.getUsers()).some(res => res.password == obj.password)];
        if (auth[0] === true && auth[1] === true) {
            const userAuth = await this.usersService.logInOut(_id, obj);
            return userAuth;
        }
        else {
            throw new common_1.NotFoundException('User Not Found');
        }
    }
    async logOut(user) {
        const obj = { name: user.name, password: user.password, signed: '' };
        const auth = [(await this.getUsers()).some(res => res.name == obj.name), (await this.getUsers()).some(res => res.password == obj.password)];
        if (auth[0] === true && auth[1] === true) {
            const currentUser = (await this.getUsers()).find(res => res.name === obj.name);
            const userAuth = await this.usersService.logInOut(currentUser._id, currentUser);
            return userAuth;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create User' }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.createUserDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update User' }),
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.updateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete User' }),
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'login user with validation' }),
    (0, common_1.Put)('/login'),
    __param(0, (0, common_1.Ip)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, users_dto_1.updateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'login user with validation' }),
    (0, common_1.Put)('/logOut'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.updateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logOut", null);
exports.UsersController = UsersController = UsersController_1 = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map