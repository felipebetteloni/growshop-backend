import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShareCreateManyInput } from './share-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShareArgs {

    @Field(() => [ShareCreateManyInput], {nullable:false})
    @Type(() => ShareCreateManyInput)
    data!: Array<ShareCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
