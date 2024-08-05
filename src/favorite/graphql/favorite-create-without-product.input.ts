import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFavoritesInput } from '../../user/user-create-nested-one-without-favorites.input';

@InputType()
export class FavoriteCreateWithoutProductInput {

    @Field(() => UserCreateNestedOneWithoutFavoritesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutFavoritesInput;
}
