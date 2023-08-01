"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOperationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_operation_dto_1 = require("./create-operation.dto");
class UpdateOperationDto extends (0, swagger_1.PartialType)(create_operation_dto_1.CreateOperationDto) {
}
exports.UpdateOperationDto = UpdateOperationDto;
//# sourceMappingURL=update-operation.dto.js.map