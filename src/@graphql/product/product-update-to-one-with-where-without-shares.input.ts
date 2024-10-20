import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSharesInput } from './product-update-without-shares.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutSharesInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutSharesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSharesInput)
    data!: ProductUpdateWithoutSharesInput;
}
