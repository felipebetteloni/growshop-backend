import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { BrandCount } from './brand-count.output';

@ObjectType()
export class Brand {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => BrandCount, {nullable:false})
    _count?: BrandCount;
}
