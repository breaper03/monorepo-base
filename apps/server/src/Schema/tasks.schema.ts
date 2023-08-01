import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
    timestamps: true
})
export class Tasks {
    @Prop({trim: true, unique: true, required: true})
    name: string;

    @Prop({trim: true, required: true})
    description: string;
    
    @Prop({trim: true, required: true})
    type: string;

    @Prop({trim: true, required: true})
    price?: number;

    @Prop({trim: true, required: true})
    currency: string;

    @Prop({trim: true, required: true})
    dateFrom: Date;
    
    @Prop({trim: true, required: true})
    dateTo: Date;

    @Prop({trim: true, required: true})
    userId: string;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks)