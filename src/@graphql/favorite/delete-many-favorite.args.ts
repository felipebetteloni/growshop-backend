import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteWhereInput } from './favorite-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFavoriteArgs {

    @Field(() => FavoriteWhereInput, {nullable:true})
    @Type(() => FavoriteWhereInput)
    where?: FavoriteWhereInput;
}
