import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductImgCountAggregate } from './product-img-count-aggregate.output';
import { ProductImgMinAggregate } from './product-img-min-aggregate.output';
import { ProductImgMaxAggregate } from './product-img-max-aggregate.output';

@ObjectType()
export class ProductImgGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    imgUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => ProductImgCountAggregate, {nullable:true})
    _count?: ProductImgCountAggregate;

    @Field(() => ProductImgMinAggregate, {nullable:true})
    _min?: ProductImgMinAggregate;

    @Field(() => ProductImgMaxAggregate, {nullable:true})
    _max?: ProductImgMaxAggregate;
}
