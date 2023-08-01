import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
    timestamps: true
})
export class Operations {

    @Prop({trim: true, required: true})
    initialMount: number;

    @Prop({trim: true, required: true})
    date: Date;

    @Prop({trim: true, required: true})
    gainLose: number;

    @Prop({trim: true, required: true})
    lote: number;
}

export const OperationsSchema = SchemaFactory.createForClass(Operations)