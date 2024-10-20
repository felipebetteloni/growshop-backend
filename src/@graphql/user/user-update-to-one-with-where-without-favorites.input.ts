import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFavoritesInput } from './user-update-without-favorites.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFavoritesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFavoritesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFavoritesInput)
    data!: UserUpdateWithoutFavoritesInput;
}
