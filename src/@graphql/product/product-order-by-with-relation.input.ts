import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';
import { SubCategoryOrderByWithRelationInput } from '../sub-category/sub-category-order-by-with-relation.input';
import { BrandOrderByWithRelationInput } from '../brand/brand-order-by-with-relation.input';
import { ConditionOrderByWithRelationInput } from '../condition/condition-order-by-with-relation.input';
import { CountryOrderByWithRelationInput } from '../country/country-order-by-with-relation.input';
import { StateOrderByWithRelationInput } from '../state/state-order-by-with-relation.input';
import { CityOrderByWithRelationInput } from '../city/city-order-by-with-relation.input';
import { NeighbourhoodOrderByWithRelationInput } from '../neighbourhood/neighbourhood-order-by-with-relation.input';
import { FavoriteOrderByRelationAggregateInput } from '../favorite/favorite-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ProductImgOrderByRelationAggregateInput } from '../product-img/product-img-order-by-relation-aggregate.input';
import { ReportOrderByWithRelationInput } from '../report/report-order-by-with-relation.input';
import { ShareOrderByRelationAggregateInput } from '../share/share-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sub_categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conditionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    countryId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    stateId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    cityId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    neighbourhoodId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    zip_code?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    approvedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPromoted?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    viewCount?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: CategoryOrderByWithRelationInput;

    @Field(() => SubCategoryOrderByWithRelationInput, {nullable:true})
    sub_category?: SubCategoryOrderByWithRelationInput;

    @Field(() => BrandOrderByWithRelationInput, {nullable:true})
    brand?: BrandOrderByWithRelationInput;

    @Field(() => ConditionOrderByWithRelationInput, {nullable:true})
    condition?: ConditionOrderByWithRelationInput;

    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: CountryOrderByWithRelationInput;

    @Field(() => StateOrderByWithRelationInput, {nullable:true})
    state?: StateOrderByWithRelationInput;

    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: CityOrderByWithRelationInput;

    @Field(() => NeighbourhoodOrderByWithRelationInput, {nullable:true})
    neighbourhood?: NeighbourhoodOrderByWithRelationInput;

    @Field(() => FavoriteOrderByRelationAggregateInput, {nullable:true})
    favorites?: FavoriteOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => ProductImgOrderByRelationAggregateInput, {nullable:true})
    img_urls?: ProductImgOrderByRelationAggregateInput;

    @Field(() => ReportOrderByWithRelationInput, {nullable:true})
    report?: ReportOrderByWithRelationInput;

    @Field(() => ShareOrderByRelationAggregateInput, {nullable:true})
    shares?: ShareOrderByRelationAggregateInput;
}
