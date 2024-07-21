import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  username: string = 'Mihaita';
  email: string = 'mihaita@example.com';
  newPassword: string = '';
  logout() {
    // Implement logout logic
    console.log('Logout clicked');
  }

  changeProfilePicture() {
    // Implement profile picture change logic
    console.log('Change profile picture clicked');
  }

  saveChanges() {
    // Implement save changes logic
    console.log('Save changes clicked', { username: this.username, email: this.email, newPassword: this.newPassword });
  }
}
