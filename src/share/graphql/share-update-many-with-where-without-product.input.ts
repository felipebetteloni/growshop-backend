import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareScalarWhereInput } from './share-scalar-where.input';
import { Type } from 'class-transformer';
import { ShareUncheckedUpdateManyWithoutProductInput } from './share-unchecked-update-many-without-product.input';

@InputType()
export class ShareUpdateManyWithWhereWithoutProductInput {

    @Field(() => ShareScalarWhereInput, {nullable:false})
    @Type(() => ShareScalarWhereInput)
    where!: ShareScalarWhereInput;

    @Field(() => ShareUncheckedUpdateManyWithoutProductInput, {nullable:false})
    @Type(() => ShareUncheckedUpdateManyWithoutProductInput)
    data!: ShareUncheckedUpdateManyWithoutProductInput;
}
