import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteCreateWithoutUserInput } from './favorite-create-without-user.input';
import { Type } from 'class-transformer';
import { FavoriteCreateOrConnectWithoutUserInput } from './favorite-create-or-connect-without-user.input';
import { FavoriteUpsertWithWhereUniqueWithoutUserInput } from './favorite-upsert-with-where-unique-without-user.input';
import { FavoriteCreateManyUserInputEnvelope } from './favorite-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { FavoriteUpdateWithWhereUniqueWithoutUserInput } from './favorite-update-with-where-unique-without-user.input';
import { FavoriteUpdateManyWithWhereWithoutUserInput } from './favorite-update-many-with-where-without-user.input';
import { FavoriteScalarWhereInput } from './favorite-scalar-where.input';

@InputType()
export class FavoriteUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [FavoriteCreateWithoutUserInput], {nullable:true})
    @Type(() => FavoriteCreateWithoutUserInput)
    create?: Array<FavoriteCreateWithoutUserInput>;

    @Field(() => [FavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FavoriteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutUserInput>;

    @Field(() => [FavoriteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FavoriteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FavoriteUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FavoriteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FavoriteCreateManyUserInputEnvelope)
    createMany?: FavoriteCreateManyUserInputEnvelope;

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

    @Field(() => [FavoriteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FavoriteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FavoriteUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FavoriteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FavoriteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FavoriteUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    @Type(() => FavoriteScalarWhereInput)
    deleteMany?: Array<FavoriteScalarWhereInput>;
}
