import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { Type } from 'class-transformer';
import { FavoriteUpdateWithoutUserInput } from './favorite-update-without-user.input';

@InputType()
export class FavoriteUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    @Type(() => FavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>;

    @Field(() => FavoriteUpdateWithoutUserInput, {nullable:false})
    @Type(() => FavoriteUpdateWithoutUserInput)
    data!: FavoriteUpdateWithoutUserInput;
}
