import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ShareScalarWhereInput {

    @Field(() => [ShareScalarWhereInput], {nullable:true})
    AND?: Array<ShareScalarWhereInput>;

    @Field(() => [ShareScalarWhereInput], {nullable:true})
    OR?: Array<ShareScalarWhereInput>;

    @Field(() => [ShareScalarWhereInput], {nullable:true})
    NOT?: Array<ShareScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;
}
