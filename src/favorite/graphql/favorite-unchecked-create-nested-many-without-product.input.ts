import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteCreateWithoutProductInput } from './favorite-create-without-product.input';
import { Type } from 'class-transformer';
import { FavoriteCreateOrConnectWithoutProductInput } from './favorite-create-or-connect-without-product.input';
import { FavoriteCreateManyProductInputEnvelope } from './favorite-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';

@InputType()
export class FavoriteUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [FavoriteCreateWithoutProductInput], {nullable:true})
    @Type(() => FavoriteCreateWithoutProductInput)
    create?: Array<FavoriteCreateWithoutProductInput>;

    @Field(() => [FavoriteCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => FavoriteCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutProductInput>;

    @Field(() => FavoriteCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => FavoriteCreateManyProductInputEnvelope)
    createMany?: FavoriteCreateManyProductInputEnvelope;

    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    @Type(() => FavoriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>>;
}
