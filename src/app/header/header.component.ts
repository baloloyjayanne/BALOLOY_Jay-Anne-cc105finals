import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { PostService } from '../post-service'; // Import PostService
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listOfPosts: any;
  searchKeyword: string;
  user$ = this.authService.user$;


  constructor(
    private backEndService: BackEndService,
    private postService: PostService, // Inject PostService
    private authService: AuthService, 
    private router: Router
  ) {
    this.searchKeyword = '';
  }

  ngOnInit(): void {
  }

  onSave() {
    this.backEndService.saveData();
  }

  onFetch() {
    this.backEndService.fetchData().subscribe(() => {
        this.listOfPosts = this.postService.getPost(); // Access data through PostService
    });
}

searchPosts() {
  this.postService.searchPosts(this.searchKeyword);
}

logout() {
  this.authService.signOut().then(() => {
    
    this.router.navigate(['/login']);
  });
}
}
