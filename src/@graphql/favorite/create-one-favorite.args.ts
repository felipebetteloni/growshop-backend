import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteCreateInput } from './favorite-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFavoriteArgs {

    @Field(() => FavoriteCreateInput, {nullable:false})
    @Type(() => FavoriteCreateInput)
    data!: FavoriteCreateInput;
}
