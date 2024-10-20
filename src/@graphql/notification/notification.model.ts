import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Notification {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imgUrl!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isRead!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;
}
