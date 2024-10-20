import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutConditionInput } from './product-create-without-condition.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutConditionInput } from './product-create-or-connect-without-condition.input';
import { ProductUpsertWithWhereUniqueWithoutConditionInput } from './product-upsert-with-where-unique-without-condition.input';
import { ProductCreateManyConditionInputEnvelope } from './product-create-many-condition-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutConditionInput } from './product-update-with-where-unique-without-condition.input';
import { ProductUpdateManyWithWhereWithoutConditionInput } from './product-update-many-with-where-without-condition.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutConditionNestedInput {

    @Field(() => [ProductCreateWithoutConditionInput], {nullable:true})
    @Type(() => ProductCreateWithoutConditionInput)
    create?: Array<ProductCreateWithoutConditionInput>;

    @Field(() => [ProductCreateOrConnectWithoutConditionInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutConditionInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutConditionInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutConditionInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutConditionInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutConditionInput>;

    @Field(() => ProductCreateManyConditionInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyConditionInputEnvelope)
    createMany?: ProductCreateManyConditionInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutConditionInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutConditionInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutConditionInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutConditionInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutConditionInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutConditionInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
