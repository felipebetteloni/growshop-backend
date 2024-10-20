import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShareUncheckedUpdateManyInput } from './share-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ShareWhereInput } from './share-where.input';

@ArgsType()
export class UpdateManyShareArgs {

    @Field(() => ShareUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ShareUncheckedUpdateManyInput)
    data!: ShareUncheckedUpdateManyInput;

    @Field(() => ShareWhereInput, {nullable:true})
    @Type(() => ShareWhereInput)
    where?: ShareWhereInput;
}
