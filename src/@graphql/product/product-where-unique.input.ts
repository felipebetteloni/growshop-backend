import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
import { SubCategoryRelationFilter } from '../sub-category/sub-category-relation-filter.input';
import { BrandRelationFilter } from '../brand/brand-relation-filter.input';
import { ConditionRelationFilter } from '../condition/condition-relation-filter.input';
import { CountryNullableRelationFilter } from '../country/country-nullable-relation-filter.input';
import { StateNullableRelationFilter } from '../state/state-nullable-relation-filter.input';
import { CityNullableRelationFilter } from '../city/city-nullable-relation-filter.input';
import { NeighbourhoodNullableRelationFilter } from '../neighbourhood/neighbourhood-nullable-relation-filter.input';
import { FavoriteListRelationFilter } from '../favorite/favorite-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { ProductImgListRelationFilter } from '../product-img/product-img-list-relation-filter.input';
import { ReportNullableRelationFilter } from '../report/report-nullable-relation-filter.input';
import { ShareListRelationFilter } from '../share/share-list-relation-filter.input';

@InputType()
export class ProductWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sub_categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brandId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    conditionId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    stateId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cityId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    neighbourhoodId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zip_code?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    approvedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPromoted?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    viewCount?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;

    @Field(() => SubCategoryRelationFilter, {nullable:true})
    sub_category?: SubCategoryRelationFilter;

    @Field(() => BrandRelationFilter, {nullable:true})
    brand?: BrandRelationFilter;

    @Field(() => ConditionRelationFilter, {nullable:true})
    condition?: ConditionRelationFilter;

    @Field(() => CountryNullableRelationFilter, {nullable:true})
    country?: CountryNullableRelationFilter;

    @Field(() => StateNullableRelationFilter, {nullable:true})
    state?: StateNullableRelationFilter;

    @Field(() => CityNullableRelationFilter, {nullable:true})
    city?: CityNullableRelationFilter;

    @Field(() => NeighbourhoodNullableRelationFilter, {nullable:true})
    neighbourhood?: NeighbourhoodNullableRelationFilter;

    @Field(() => FavoriteListRelationFilter, {nullable:true})
    favorites?: FavoriteListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => ProductImgListRelationFilter, {nullable:true})
    img_urls?: ProductImgListRelationFilter;

    @Field(() => ReportNullableRelationFilter, {nullable:true})
    report?: ReportNullableRelationFilter;

    @Field(() => ShareListRelationFilter, {nullable:true})
    shares?: ShareListRelationFilter;
}
