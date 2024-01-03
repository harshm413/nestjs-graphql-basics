import { ObjectType } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { PostEntity } from './post.entity';

@ObjectType('Comment')
export class CommentEntity {
    id: string;
    text: string;
    author: UserEntity;
    post: PostEntity;
}
