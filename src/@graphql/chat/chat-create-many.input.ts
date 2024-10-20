import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChatCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userFromId!: string;

    @Field(() => String, {nullable:false})
    userToId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;
}
