import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteScalarWhereInput } from './favorite-scalar-where.input';
import { Type } from 'class-transformer';
import { FavoriteUncheckedUpdateManyWithoutUserInput } from './favorite-unchecked-update-many-without-user.input';

@InputType()
export class FavoriteUpdateManyWithWhereWithoutUserInput {

    @Field(() => FavoriteScalarWhereInput, {nullable:false})
    @Type(() => FavoriteScalarWhereInput)
    where!: FavoriteScalarWhereInput;

    @Field(() => FavoriteUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => FavoriteUncheckedUpdateManyWithoutUserInput)
    data!: FavoriteUncheckedUpdateManyWithoutUserInput;
}
