import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteUncheckedUpdateManyInput } from './favorite-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { FavoriteWhereInput } from './favorite-where.input';

@ArgsType()
export class UpdateManyFavoriteArgs {

    @Field(() => FavoriteUncheckedUpdateManyInput, {nullable:false})
    @Type(() => FavoriteUncheckedUpdateManyInput)
    data!: FavoriteUncheckedUpdateManyInput;

    @Field(() => FavoriteWhereInput, {nullable:true})
    @Type(() => FavoriteWhereInput)
    where?: FavoriteWhereInput;
}
