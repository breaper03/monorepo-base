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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksSchema = exports.Tasks = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Tasks = exports.Tasks = class Tasks {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, unique: true, required: true }),
    __metadata("design:type", String)
], Tasks.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], Tasks.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], Tasks.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], Tasks.prototype, "place", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", Number)
], Tasks.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], Tasks.prototype, "userId", void 0);
exports.Tasks = Tasks = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Tasks);
exports.TasksSchema = mongoose_1.SchemaFactory.createForClass(Tasks);
//# sourceMappingURL=tasks.schema.js.map