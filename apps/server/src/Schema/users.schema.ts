import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Users {
    @Prop({trim: true, unique: true, required: true})
    name: string;

    @Prop({trim: true, required: true})
    password: string;

    @Prop({default: ''})
    signed?: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users)