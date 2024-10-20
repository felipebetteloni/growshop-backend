import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerActiveSortingCompoundUniqueInput } from './banner-active-sorting-compound-unique.input';
import { BannerWhereInput } from './banner-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BannerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => BannerActiveSortingCompoundUniqueInput, {nullable:true})
    activeSorting?: BannerActiveSortingCompoundUniqueInput;

    @Field(() => [BannerWhereInput], {nullable:true})
    AND?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    OR?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    NOT?: Array<BannerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imgUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    link?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    sorting?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    viewCount?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    clickCount?: IntNullableFilter;
}
