import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteWhereInput } from './favorite-where.input';
import { Type } from 'class-transformer';
import { FavoriteOrderByWithRelationInput } from './favorite-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FavoriteScalarFieldEnum } from './favorite-scalar-field.enum';

@ArgsType()
export class FindManyFavoriteArgs {

    @Field(() => FavoriteWhereInput, {nullable:true})
    @Type(() => FavoriteWhereInput)
    where?: FavoriteWhereInput;

    @Field(() => [FavoriteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FavoriteOrderByWithRelationInput>;

    @Field(() => FavoriteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FavoriteScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FavoriteScalarFieldEnum>;
}
