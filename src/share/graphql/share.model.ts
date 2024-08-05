import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Product } from '../product/product.model';

@ObjectType()
export class Share {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Product, {nullable:false})
    product?: Product;
}
