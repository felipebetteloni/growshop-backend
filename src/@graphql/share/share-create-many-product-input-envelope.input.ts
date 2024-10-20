import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareCreateManyProductInput } from './share-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ShareCreateManyProductInputEnvelope {

    @Field(() => [ShareCreateManyProductInput], {nullable:false})
    @Type(() => ShareCreateManyProductInput)
    data!: Array<ShareCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
