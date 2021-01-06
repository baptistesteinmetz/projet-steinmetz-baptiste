import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DelUser, LogOffUser, AddUser } from './../../../shared/actions/user-action';
import { UserService } from './../../user.service';
import { tap } from 'rxjs/operators';
import { UserState } from './../../../shared/states/user-state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { User } from '../../../shared/models/User';
import { ComparePassword } from 'src/app/customvalidators.validator';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(rawNum) {
    rawNum = rawNum.charAt(0) !== 0 ? rawNum.substring(1) : '' + rawNum.substring(1);
    let newStr = '';
    let i = 0;
    for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
      newStr = newStr + rawNum.substr(i * 2, 2) + '-';
    }

    return newStr + rawNum.substr(i * 2);
  }
}

@Pipe({
  name: 'callcode'
})
export class CodePipe implements PipeTransform {
  transform(country) {
    switch(country) {
      case 'fr' :
        return '+33';
        break;
      case 'en' :
        return '+44';
        break;
      case 'gr' :
        return '+49';
        break;
      case 'us' :
        return '+1';
        break;
    }
  }
}

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})

export class RecapComponent implements OnInit {
  user: User = new User();

  form: FormGroup;

  @Input () formValidate: boolean = false;
  @Input () formModify: boolean = false;

  user$: Observable<User>;

  constructor(private store: Store, private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if(this.formValidate)
    {
      this.store.select(UserState.getUser).subscribe(
        (data) => {this.user = data;}
      );
    }
  }
  // @Input () userName: string;

  onDelete(user: User): void {
    this.userService.deleteUser(user).subscribe((response) => {
      if(response.success) {
        this.store.dispatch(new DelUser(user));
        this.formValidate = false;
      }
    })
  }

  onLogOff(user: User): void {
    this.userService.logOffUser(user).subscribe((response) => {
      if(response.success) {
        this.store.dispatch(new LogOffUser(user));
        this.formValidate = false;
      }
    })
  }
  onModifyAccount(user: User): void {
       this.initForm();
      this.formModify = true;
    // this.userService.logOffUser(user).subscribe((response) => {
    //   if(response.success) {
    //     this.store.dispatch(new LogOffUser(user));
    //     this.formValidate = false;
    //   }
    // })
  }

  initForm(): void {
    this.form = this.fb.group(
      {
      firstname: [null, [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')]],
      lastname: [null, [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')
      ]],
      city: [null, Validators.required],
      zipcode: [null, [
        Validators.pattern('^[0-9]+$'),
        Validators.required,
      ]
    ],
      phone: [null, [
        Validators.pattern('^[0-9]+$'),
        Validators.required,
      ]],
      address: [null, Validators.required],
      login: [null, Validators.required],
      mail: [null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
        ]
      ],
      gender: [null, Validators.required],
      country: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    },
    {
      validator: ComparePassword('password', 'confirmPassword')
    }
    );
  }

  get f() {
    return this.form.controls;
  }


  isValidInput(fieldName): boolean {
    return this.form.controls[fieldName].invalid &&
      (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
  }

  modifyUser(event) {
    event.preventDefault();
    this.user.firstname = this.form.value.firstname;
    if (this.form.valid) {
      this.userService.updateUser(this.user).subscribe((response) => {
        console.log(response);
        if(response.success)
        {
          this.store.dispatch(new AddUser(response.data));
          this.formValidate=true;
          this.formModify=false;
        }
        else {
        }
      });

    }
  }
}
