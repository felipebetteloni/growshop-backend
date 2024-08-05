import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyCityInput } from './product-create-many-city.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyCityInputEnvelope {

    @Field(() => [ProductCreateManyCityInput], {nullable:false})
    @Type(() => ProductCreateManyCityInput)
    data!: Array<ProductCreateManyCityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
