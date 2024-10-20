import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteCreateManyInput } from './favorite-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFavoriteArgs {

    @Field(() => [FavoriteCreateManyInput], {nullable:false})
    @Type(() => FavoriteCreateManyInput)
    data!: Array<FavoriteCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
