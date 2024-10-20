import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutSharesInput } from './product-update-without-shares.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSharesInput } from './product-create-without-shares.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutSharesInput {

    @Field(() => ProductUpdateWithoutSharesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSharesInput)
    update!: ProductUpdateWithoutSharesInput;

    @Field(() => ProductCreateWithoutSharesInput, {nullable:false})
    @Type(() => ProductCreateWithoutSharesInput)
    create!: ProductCreateWithoutSharesInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
