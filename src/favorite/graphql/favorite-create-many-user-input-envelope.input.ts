import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteCreateManyUserInput } from './favorite-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FavoriteCreateManyUserInputEnvelope {

    @Field(() => [FavoriteCreateManyUserInput], {nullable:false})
    @Type(() => FavoriteCreateManyUserInput)
    data!: Array<FavoriteCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
