import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { Type } from 'class-transformer';
import { FavoriteCreateWithoutProductInput } from './favorite-create-without-product.input';

@InputType()
export class FavoriteCreateOrConnectWithoutProductInput {

    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    @Type(() => FavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>;

    @Field(() => FavoriteCreateWithoutProductInput, {nullable:false})
    @Type(() => FavoriteCreateWithoutProductInput)
    create!: FavoriteCreateWithoutProductInput;
}
