import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteWhereInput } from './favorite-where.input';

@InputType()
export class FavoriteListRelationFilter {

    @Field(() => FavoriteWhereInput, {nullable:true})
    every?: FavoriteWhereInput;

    @Field(() => FavoriteWhereInput, {nullable:true})
    some?: FavoriteWhereInput;

    @Field(() => FavoriteWhereInput, {nullable:true})
    none?: FavoriteWhereInput;
}
