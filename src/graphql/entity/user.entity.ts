import { ObjectType, Field } from '@nestjs/graphql';
import { PostEntity } from './post.entity';

@ObjectType('User')
export class UserEntity {
    id: string;
    name: string;
    email: string;
    posts: PostEntity[];
}
