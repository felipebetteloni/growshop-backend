import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutFavoritesNestedInput } from '../user/user-update-one-required-without-favorites-nested.input';

@InputType()
export class FavoriteUpdateWithoutProductInput {

    @Field(() => UserUpdateOneRequiredWithoutFavoritesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput;
}
