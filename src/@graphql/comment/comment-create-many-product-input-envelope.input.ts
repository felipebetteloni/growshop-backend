import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyProductInput } from './comment-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyProductInputEnvelope {

    @Field(() => [CommentCreateManyProductInput], {nullable:false})
    @Type(() => CommentCreateManyProductInput)
    data!: Array<CommentCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
