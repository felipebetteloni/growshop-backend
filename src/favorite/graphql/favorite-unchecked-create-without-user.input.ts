import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FavoriteUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    productId!: string;
}
