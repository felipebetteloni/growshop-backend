import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShareCreateManyUserInput {

    @Field(() => String, {nullable:false})
    productId!: string;
}
