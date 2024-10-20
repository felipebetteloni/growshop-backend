import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutConditionInput } from './product-create-without-condition.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutConditionInput } from './product-create-or-connect-without-condition.input';
import { ProductCreateManyConditionInputEnvelope } from './product-create-many-condition-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutConditionInput {

    @Field(() => [ProductCreateWithoutConditionInput], {nullable:true})
    @Type(() => ProductCreateWithoutConditionInput)
    create?: Array<ProductCreateWithoutConditionInput>;

    @Field(() => [ProductCreateOrConnectWithoutConditionInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutConditionInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutConditionInput>;

    @Field(() => ProductCreateManyConditionInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyConditionInputEnvelope)
    createMany?: ProductCreateManyConditionInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
