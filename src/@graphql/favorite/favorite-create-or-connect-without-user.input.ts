import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { Type } from 'class-transformer';
import { FavoriteCreateWithoutUserInput } from './favorite-create-without-user.input';

@InputType()
export class FavoriteCreateOrConnectWithoutUserInput {

    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    @Type(() => FavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>;

    @Field(() => FavoriteCreateWithoutUserInput, {nullable:false})
    @Type(() => FavoriteCreateWithoutUserInput)
    create!: FavoriteCreateWithoutUserInput;
}
