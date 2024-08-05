import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Category } from '../category/category.model';
import { SubCategory } from '../sub-category/sub-category.model';
import { Brand } from '../brand/brand.model';
import { Condition } from '../condition/condition.model';
import { Country } from '../country/country.model';
import { State } from '../state/state.model';
import { City } from '../city/city.model';
import { Neighbourhood } from '../neighbourhood/neighbourhood.model';
import { Favorite } from '../favorite/favorite.model';
import { Comment } from '../comment/comment.model';
import { ProductImg } from '../product-img/product-img.model';
import { Report } from '../report/report.model';
import { Share } from '../share/share.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    sub_categoryId!: string;

    @Field(() => String, {nullable:false})
    brandId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    conditionId!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:true,defaultValue:'BR'})
    countryId!: string | null;

    @Field(() => String, {nullable:true})
    stateId!: string | null;

    @Field(() => String, {nullable:true})
    cityId!: string | null;

    @Field(() => String, {nullable:true})
    neighbourhoodId!: string | null;

    @Field(() => String, {nullable:true})
    zip_code!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    approvedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPromoted!: boolean;

    @Field(() => Int, {nullable:true,defaultValue:0})
    viewCount!: number | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => SubCategory, {nullable:false})
    sub_category?: SubCategory;

    @Field(() => Brand, {nullable:false})
    brand?: Brand;

    @Field(() => Condition, {nullable:false})
    condition?: Condition;

    @Field(() => Country, {nullable:true})
    country?: Country | null;

    @Field(() => State, {nullable:true})
    state?: State | null;

    @Field(() => City, {nullable:true})
    city?: City | null;

    @Field(() => Neighbourhood, {nullable:true})
    neighbourhood?: Neighbourhood | null;

    @Field(() => [Favorite], {nullable:true})
    favorites?: Array<Favorite>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [ProductImg], {nullable:true})
    img_urls?: Array<ProductImg>;

    @Field(() => Report, {nullable:true})
    report?: Report | null;

    @Field(() => [Share], {nullable:true})
    shares?: Array<Share>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
