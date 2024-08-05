import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareWhereInput } from './share-where.input';

@InputType()
export class ShareListRelationFilter {

    @Field(() => ShareWhereInput, {nullable:true})
    every?: ShareWhereInput;

    @Field(() => ShareWhereInput, {nullable:true})
    some?: ShareWhereInput;

    @Field(() => ShareWhereInput, {nullable:true})
    none?: ShareWhereInput;
}
