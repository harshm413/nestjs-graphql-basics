import { Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from '../entity/user.entity';
import { PostEntity } from '../entity/post.entity';
import { CommentEntity } from '../entity/comment.entity';
import { users, posts, comments } from '../db';

@Resolver()
export class RootResolver {
    @Query(() => [UserEntity])
    users() {
        return users;
    }
    @Query(() => [PostEntity])
    posts() {
        return posts;
    }
    @Query(() => [CommentEntity])
    comments() {
        return comments;
    }
}
