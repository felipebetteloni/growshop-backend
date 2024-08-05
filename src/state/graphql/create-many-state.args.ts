import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StateCreateManyInput } from './state-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStateArgs {

    @Field(() => [StateCreateManyInput], {nullable:false})
    @Type(() => StateCreateManyInput)
    data!: Array<StateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
