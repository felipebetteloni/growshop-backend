import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyConditionInput } from './product-create-many-condition.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyConditionInputEnvelope {

    @Field(() => [ProductCreateManyConditionInput], {nullable:false})
    @Type(() => ProductCreateManyConditionInput)
    data!: Array<ProductCreateManyConditionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
