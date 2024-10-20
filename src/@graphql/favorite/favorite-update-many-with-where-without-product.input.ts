import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteScalarWhereInput } from './favorite-scalar-where.input';
import { Type } from 'class-transformer';
import { FavoriteUncheckedUpdateManyWithoutProductInput } from './favorite-unchecked-update-many-without-product.input';

@InputType()
export class FavoriteUpdateManyWithWhereWithoutProductInput {

    @Field(() => FavoriteScalarWhereInput, {nullable:false})
    @Type(() => FavoriteScalarWhereInput)
    where!: FavoriteScalarWhereInput;

    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:false})
    @Type(() => FavoriteUncheckedUpdateManyWithoutProductInput)
    data!: FavoriteUncheckedUpdateManyWithoutProductInput;
}
