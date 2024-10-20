import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShareUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    productId!: string;
}
