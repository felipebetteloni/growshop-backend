import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutUserInput } from './review-update-without-user.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'chatId'>;

    @Field(() => ReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserInput)
    data!: ReviewUpdateWithoutUserInput;
}
