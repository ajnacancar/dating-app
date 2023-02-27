import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  galeryOptions: NgxGalleryOptions[] = [];
  galeryImages: NgxGalleryImage[] = [];

  constructor(
    private memberService: MembersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMember();

    this.galeryOptions = [
      {
        width: '250px',
        height: '250px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      },
    ];
  }
  
  getImages() {
    if (!this.member) return [];

    const imagesUrl = [];

    for (const photo of this.member.photos) {
      imagesUrl.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
      });
    }

    return imagesUrl;
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');

    if (!username) return;
    this.memberService.getMemberByUsername(username).subscribe({
      next: (member) => {
        this.member = member;
        this.galeryImages = this.getImages();
      },
    });
  }
}
