import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFavoritesInput } from './user-update-without-favorites.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFavoritesInput } from './user-create-without-favorites.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFavoritesInput {

    @Field(() => UserUpdateWithoutFavoritesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFavoritesInput)
    update!: UserUpdateWithoutFavoritesInput;

    @Field(() => UserCreateWithoutFavoritesInput, {nullable:false})
    @Type(() => UserCreateWithoutFavoritesInput)
    create!: UserCreateWithoutFavoritesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
