import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShareUserIdProductIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;
}
