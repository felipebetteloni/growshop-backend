import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCount {

    @Field(() => Int, {nullable:false})
    favorites?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    img_urls?: number;

    @Field(() => Int, {nullable:false})
    shares?: number;
}
