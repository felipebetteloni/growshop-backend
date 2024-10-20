import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyStateInput } from './product-create-many-state.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyStateInputEnvelope {

    @Field(() => [ProductCreateManyStateInput], {nullable:false})
    @Type(() => ProductCreateManyStateInput)
    data!: Array<ProductCreateManyStateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
