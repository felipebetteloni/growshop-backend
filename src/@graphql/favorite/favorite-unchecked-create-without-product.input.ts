import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FavoriteUncheckedCreateWithoutProductInput {

    @Field(() => String, {nullable:false})
    userId!: string;
}
