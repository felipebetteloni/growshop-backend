import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareScalarWhereInput } from './share-scalar-where.input';
import { Type } from 'class-transformer';
import { ShareUncheckedUpdateManyWithoutUserInput } from './share-unchecked-update-many-without-user.input';

@InputType()
export class ShareUpdateManyWithWhereWithoutUserInput {

    @Field(() => ShareScalarWhereInput, {nullable:false})
    @Type(() => ShareScalarWhereInput)
    where!: ShareScalarWhereInput;

    @Field(() => ShareUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => ShareUncheckedUpdateManyWithoutUserInput)
    data!: ShareUncheckedUpdateManyWithoutUserInput;
}
