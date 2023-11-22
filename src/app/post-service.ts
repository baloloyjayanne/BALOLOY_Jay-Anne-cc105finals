import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService{
  listChangeEvent: EventEmitter<Post[]>  = new EventEmitter();
  searchResults = new Subject<Post[]>();
    listOfPosts: Post[] = [
        // new Post(
        //   'Blog',
        //   'Jay-ar Baloloy',
        //   'A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos.',
        //   new Date(),
        //   'https://images.alphacoders.com/132/1328866.png',  
        //    0
        // )
          ];
          
          addPost(post: Post) {
            if (this.listOfPosts === null) {
              this.listOfPosts = []; // Initialize the array if it's null
            }
            this.listOfPosts.push(post);
            this.listChangeEvent.emit(this.listOfPosts);
          }

          getPost(){
            return this.listOfPosts;
          }
          deleteButton(index: number){
            this.listOfPosts.splice(index, 1)
          }
          
          updatePost(index: number, post: Post){
            this.listOfPosts[index] = post;
          }
          getSpecPost(index: number){
          return this.listOfPosts[index];
}
LikePost(index: number){
this.listOfPosts[index].numberOfLikes += 1;
}

setPosts(newlistofPost: Post[]) {
  this.listOfPosts = newlistofPost;
  this.listChangeEvent.emit(newlistofPost);
}

addComment(index: number, comment: string) {
  if (!this.listOfPosts[index].comments) {
      this.listOfPosts[index].comments = [];
  }
  this.listOfPosts[index].comments.push(comment);
}

searchPosts(keyword: string): void {
  const results = this.listOfPosts.filter(post => post.title.includes(keyword) || post.description.includes(keyword));
  this.searchResults.next(results);
}

}
