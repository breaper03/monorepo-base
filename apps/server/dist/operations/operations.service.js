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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const operations_schema_1 = require("../Schema/operations.schema");
let OperationsService = exports.OperationsService = class OperationsService {
    constructor(operationsModel) {
        this.operationsModel = operationsModel;
    }
    create(createOperationDto) {
        const newOperation = new this.operationsModel(createOperationDto);
        return newOperation.save();
    }
    findAll() {
        return this.operationsModel.find();
    }
    findOne(_id) {
        return this.operationsModel.findById(_id);
    }
    update(_id, updateOperationDto) {
        return this.operationsModel.findByIdAndUpdate(_id, updateOperationDto);
    }
    remove(_id) {
        return this.operationsModel.findByIdAndDelete(_id);
    }
};
exports.OperationsService = OperationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(operations_schema_1.Operations.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OperationsService);
//# sourceMappingURL=operations.service.js.map