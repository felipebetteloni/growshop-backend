import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteCreateWithoutUserInput } from './favorite-create-without-user.input';
import { Type } from 'class-transformer';
import { FavoriteCreateOrConnectWithoutUserInput } from './favorite-create-or-connect-without-user.input';
import { FavoriteCreateManyUserInputEnvelope } from './favorite-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';

@InputType()
export class FavoriteCreateNestedManyWithoutUserInput {

    @Field(() => [FavoriteCreateWithoutUserInput], {nullable:true})
    @Type(() => FavoriteCreateWithoutUserInput)
    create?: Array<FavoriteCreateWithoutUserInput>;

    @Field(() => [FavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FavoriteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutUserInput>;

    @Field(() => FavoriteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FavoriteCreateManyUserInputEnvelope)
    createMany?: FavoriteCreateManyUserInputEnvelope;

    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    @Type(() => FavoriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>>;
}
