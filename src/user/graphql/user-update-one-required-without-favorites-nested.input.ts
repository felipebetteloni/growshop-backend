import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFavoritesInput } from './user-create-without-favorites.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFavoritesInput } from './user-create-or-connect-without-favorites.input';
import { UserUpsertWithoutFavoritesInput } from './user-upsert-without-favorites.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFavoritesInput } from './user-update-to-one-with-where-without-favorites.input';

@InputType()
export class UserUpdateOneRequiredWithoutFavoritesNestedInput {

    @Field(() => UserCreateWithoutFavoritesInput, {nullable:true})
    @Type(() => UserCreateWithoutFavoritesInput)
    create?: UserCreateWithoutFavoritesInput;

    @Field(() => UserCreateOrConnectWithoutFavoritesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFavoritesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput;

    @Field(() => UserUpsertWithoutFavoritesInput, {nullable:true})
    @Type(() => UserUpsertWithoutFavoritesInput)
    upsert?: UserUpsertWithoutFavoritesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFavoritesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFavoritesInput)
    update?: UserUpdateToOneWithWhereWithoutFavoritesInput;
}
