import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { Photo } from 'src/app/_models/photo';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css'],
})
export class PhotoEditorComponent {
  @Input() member: Member | undefined;
  uploadedFileUrl: string | undefined = undefined;
  user: User | undefined;
  constructor(
    private memberService: MembersService,
    private accountService: AccountService,
    private http: HttpClient
  ) {
    accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        if (user) this.user = user;
      },
    });
  }

  uploader = Uploader({ apiKey: 'public_kW15b5kBwMdtUZ7X5V177S7pzuov' }); // Replace "free" with your API key.
  options: UploadWidgetConfig = {
    multi: false,
  };
  onComplete = (files: UploadWidgetResult[]) => {
    var body = {
      photoUrl: (this.uploadedFileUrl = files[0]?.fileUrl),
      filePath: files[0]?.filePath,
    };

    this.memberService.uploadPhoto(body).subscribe({
      next: (photo) => {
        this.member?.photos.push(photo);

        if (photo.isMain && this.user && this.member) {
          this.user.photoUrl = photo.url;
          this.member.photoUrl = photo.url;
          this.accountService.setCurrentUser(this.user);
        }
      },
    });
  };

  setMainPhoto(photo: Photo) {
    this.memberService.setMainPhoto(photo.id).subscribe({
      next: () => {
        if (this.user && this.member) {
          this.user.photoUrl = photo.url;
          this.accountService.setCurrentUser(this.user);

          this.member.photoUrl = photo.url;

          this.member.photos.forEach((p) => {
            if (p.isMain) p.isMain = false;

            if (p.id == photo.id) p.isMain = true;
          });
        }
      },
    });
  }

  deletePhoto(photo: Photo) {
    this.memberService.deletePhoto(photo.id).subscribe({
      next: () => {
        this.http
          .delete(
            `https://api.upload.io/v2/accounts/kW15b5k/files?filePath=${photo.filePath}`,
            {
              headers: {
                Authorization: 'Bearer secret_kW15b5k5xVSQsU3PXAGHDPxGUYvj',
              },
            }
          )
          .subscribe({
            next: () => {
              console.log('delete from upload');
            },
          });
        if (this.member) {
          this.member.photos = this.member.photos.filter(
            (x) => x.id !== photo.id
          );
        }
      },
    });
  }
}
