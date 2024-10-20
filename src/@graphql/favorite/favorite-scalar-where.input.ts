import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FavoriteScalarWhereInput {

    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    AND?: Array<FavoriteScalarWhereInput>;

    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    OR?: Array<FavoriteScalarWhereInput>;

    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    NOT?: Array<FavoriteScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;
}
