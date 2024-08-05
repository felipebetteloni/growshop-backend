import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StateWhereInput } from './state-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStateArgs {

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;
}
