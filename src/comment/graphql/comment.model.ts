import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../../user/user.model';
import { Product } from '../product/product.model';
import { Reply } from '../../reply/reply.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => [Reply], {nullable:true})
    replies?: Array<Reply>;

    @Field(() => CommentCount, {nullable:false})
    _count?: CommentCount;
}
