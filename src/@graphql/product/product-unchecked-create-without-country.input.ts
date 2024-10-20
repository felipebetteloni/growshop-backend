import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FavoriteUncheckedCreateNestedManyWithoutProductInput } from '../favorite/favorite-unchecked-create-nested-many-without-product.input';
import { CommentUncheckedCreateNestedManyWithoutProductInput } from '../comment/comment-unchecked-create-nested-many-without-product.input';
import { ProductImgUncheckedCreateNestedManyWithoutProductInput } from '../product-img/product-img-unchecked-create-nested-many-without-product.input';
import { ReportUncheckedCreateNestedOneWithoutProductInput } from '../report/report-unchecked-create-nested-one-without-product.input';
import { ShareUncheckedCreateNestedManyWithoutProductInput } from '../share/share-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutCountryInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => String, {nullable:true})
    stateId?: string;

    @Field(() => String, {nullable:true})
    cityId?: string;

    @Field(() => String, {nullable:true})
    neighbourhoodId?: string;

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

    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: FavoriteUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductImgUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    img_urls?: ProductImgUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ReportUncheckedCreateNestedOneWithoutProductInput, {nullable:true})
    report?: ReportUncheckedCreateNestedOneWithoutProductInput;

    @Field(() => ShareUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    shares?: ShareUncheckedCreateNestedManyWithoutProductInput;
}
