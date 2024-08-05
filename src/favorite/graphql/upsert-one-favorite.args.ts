import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { Type } from 'class-transformer';
import { FavoriteCreateInput } from './favorite-create.input';
import { FavoriteUpdateInput } from './favorite-update.input';

@ArgsType()
export class UpsertOneFavoriteArgs {

    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    @Type(() => FavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>;

    @Field(() => FavoriteCreateInput, {nullable:false})
    @Type(() => FavoriteCreateInput)
    create!: FavoriteCreateInput;

    @Field(() => FavoriteUpdateInput, {nullable:false})
    @Type(() => FavoriteUpdateInput)
    update!: FavoriteUpdateInput;
}
