import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShareWhereInput } from './share-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShareArgs {

    @Field(() => ShareWhereInput, {nullable:true})
    @Type(() => ShareWhereInput)
    where?: ShareWhereInput;
}
