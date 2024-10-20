import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareCreateManyUserInput } from './share-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ShareCreateManyUserInputEnvelope {

    @Field(() => [ShareCreateManyUserInput], {nullable:false})
    @Type(() => ShareCreateManyUserInput)
    data!: Array<ShareCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
