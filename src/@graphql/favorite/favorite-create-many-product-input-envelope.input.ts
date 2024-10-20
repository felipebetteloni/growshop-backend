import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteCreateManyProductInput } from './favorite-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class FavoriteCreateManyProductInputEnvelope {

    @Field(() => [FavoriteCreateManyProductInput], {nullable:false})
    @Type(() => FavoriteCreateManyProductInput)
    data!: Array<FavoriteCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
