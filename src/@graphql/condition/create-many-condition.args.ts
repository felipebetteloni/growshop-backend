import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionCreateManyInput } from './condition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyConditionArgs {

    @Field(() => [ConditionCreateManyInput], {nullable:false})
    @Type(() => ConditionCreateManyInput)
    data!: Array<ConditionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
