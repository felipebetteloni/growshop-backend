import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShareUncheckedCreateWithoutProductInput {

    @Field(() => String, {nullable:false})
    userId!: string;
}
