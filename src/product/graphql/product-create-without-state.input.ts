import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProductsInput } from '../user/user-create-nested-one-without-products.input';
import { CategoryCreateNestedOneWithoutProductInput } from '../category/category-create-nested-one-without-product.input';
import { SubCategoryCreateNestedOneWithoutProductInput } from '../sub-category/sub-category-create-nested-one-without-product.input';
import { BrandCreateNestedOneWithoutProductsInput } from '../brand/brand-create-nested-one-without-products.input';
import { ConditionCreateNestedOneWithoutProductsInput } from '../condition/condition-create-nested-one-without-products.input';
import { CountryCreateNestedOneWithoutProductsInput } from '../country/country-create-nested-one-without-products.input';
import { CityCreateNestedOneWithoutProductsInput } from '../city/city-create-nested-one-without-products.input';
import { NeighbourhoodCreateNestedOneWithoutProductsInput } from '../neighbourhood/neighbourhood-create-nested-one-without-products.input';
import { FavoriteCreateNestedManyWithoutProductInput } from '../favorite/favorite-create-nested-many-without-product.input';
import { CommentCreateNestedManyWithoutProductInput } from '../comment/comment-create-nested-many-without-product.input';
import { ProductImgCreateNestedManyWithoutProductInput } from '../product-img/product-img-create-nested-many-without-product.input';
import { ReportCreateNestedOneWithoutProductInput } from '../report/report-create-nested-one-without-product.input';
import { ShareCreateNestedManyWithoutProductInput } from '../share/share-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutStateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:true})
    zip_code?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPromoted?: boolean;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProductsInput;

    @Field(() => CategoryCreateNestedOneWithoutProductInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutProductInput;

    @Field(() => SubCategoryCreateNestedOneWithoutProductInput, {nullable:false})
    sub_category!: SubCategoryCreateNestedOneWithoutProductInput;

    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: BrandCreateNestedOneWithoutProductsInput;

    @Field(() => ConditionCreateNestedOneWithoutProductsInput, {nullable:false})
    condition!: ConditionCreateNestedOneWithoutProductsInput;

    @Field(() => CountryCreateNestedOneWithoutProductsInput, {nullable:true})
    country?: CountryCreateNestedOneWithoutProductsInput;

    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:true})
    city?: CityCreateNestedOneWithoutProductsInput;

    @Field(() => NeighbourhoodCreateNestedOneWithoutProductsInput, {nullable:true})
    neighbourhood?: NeighbourhoodCreateNestedOneWithoutProductsInput;

    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: FavoriteCreateNestedManyWithoutProductInput;

    @Field(() => CommentCreateNestedManyWithoutProductInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutProductInput;

    @Field(() => ProductImgCreateNestedManyWithoutProductInput, {nullable:true})
    img_urls?: ProductImgCreateNestedManyWithoutProductInput;

    @Field(() => ReportCreateNestedOneWithoutProductInput, {nullable:true})
    report?: ReportCreateNestedOneWithoutProductInput;

    @Field(() => ShareCreateNestedManyWithoutProductInput, {nullable:true})
    shares?: ShareCreateNestedManyWithoutProductInput;
}
