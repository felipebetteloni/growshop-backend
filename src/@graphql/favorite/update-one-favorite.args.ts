import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteUpdateInput } from './favorite-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';

@ArgsType()
export class UpdateOneFavoriteArgs {

    @Field(() => FavoriteUpdateInput, {nullable:false})
    @Type(() => FavoriteUpdateInput)
    data!: FavoriteUpdateInput;

    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    @Type(() => FavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>;
}
