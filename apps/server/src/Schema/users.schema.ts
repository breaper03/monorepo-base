import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Users {
    @Prop({trim: true, unique: true, required: true})
    userName: string;

    @Prop({trim: true, required: true})
    password: string;

    @Prop({trim: true, required: true})
    email: string;
    
    @Prop({trim: true, required: true})
    phone: string;

    @Prop({trim: true, required: true})
    name: string;

    @Prop({trim: true, required: true})
    lastname: string;

    @Prop({default: ''})
    signed?: string;

    @Prop({default: ''})
    token?: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users)