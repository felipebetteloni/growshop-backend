import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteCreateWithoutProductInput } from './favorite-create-without-product.input';
import { Type } from 'class-transformer';
import { FavoriteCreateOrConnectWithoutProductInput } from './favorite-create-or-connect-without-product.input';
import { FavoriteUpsertWithWhereUniqueWithoutProductInput } from './favorite-upsert-with-where-unique-without-product.input';
import { FavoriteCreateManyProductInputEnvelope } from './favorite-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { FavoriteUpdateWithWhereUniqueWithoutProductInput } from './favorite-update-with-where-unique-without-product.input';
import { FavoriteUpdateManyWithWhereWithoutProductInput } from './favorite-update-many-with-where-without-product.input';
import { FavoriteScalarWhereInput } from './favorite-scalar-where.input';

@InputType()
export class FavoriteUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [FavoriteCreateWithoutProductInput], {nullable:true})
    @Type(() => FavoriteCreateWithoutProductInput)
    create?: Array<FavoriteCreateWithoutProductInput>;

    @Field(() => [FavoriteCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => FavoriteCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutProductInput>;

    @Field(() => [FavoriteUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => FavoriteUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<FavoriteUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => FavoriteCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => FavoriteCreateManyProductInputEnvelope)
    createMany?: FavoriteCreateManyProductInputEnvelope;

    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    @Type(() => FavoriteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    @Type(() => FavoriteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    @Type(() => FavoriteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    @Type(() => FavoriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [FavoriteUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => FavoriteUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<FavoriteUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [FavoriteUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => FavoriteUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<FavoriteUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    @Type(() => FavoriteScalarWhereInput)
    deleteMany?: Array<FavoriteScalarWhereInput>;
}
