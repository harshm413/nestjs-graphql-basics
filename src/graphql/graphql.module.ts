import { Module } from '@nestjs/common';
import { RootResolver } from './root/root.resolver';
import { UserResolver } from './user/user.resolver';
import { PostResolver } from './post/post.resolver';
import { CommentResolver } from './comment/comment.resolver';

@Module({
  providers: [RootResolver, UserResolver, PostResolver, CommentResolver]
})
export class GraphqlModule {}
