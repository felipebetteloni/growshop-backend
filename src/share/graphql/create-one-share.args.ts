import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShareCreateInput } from './share-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShareArgs {

    @Field(() => ShareCreateInput, {nullable:false})
    @Type(() => ShareCreateInput)
    data!: ShareCreateInput;
}
