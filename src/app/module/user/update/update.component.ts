import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/core/_services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-update',
    templateUrl: '../create/create.component.html',
    styleUrls: ['../create/create.component.sass']
})
export class UpdateComponent implements OnInit, OnDestroy {

    detail = JSON.parse(localStorage.getItem('userD'));
    userForm: FormGroup;
    skillsets: FormArray;
    hobbys: FormArray;
    private skillId = 0;
    private hobbyId = 0;
    submitted = false;
    private subs: Subscription[] = [];
    constructor(
        private fb: FormBuilder,
        private _userService: UserService,
        private router: Router) { }

    ngOnInit(): void {
        this.initialForm();
    }
    ngOnDestroy(): void {
        this.subs.forEach(s => s.unsubscribe());
    }

    initialForm = () => {
        this.userForm = this.fb.group({
            username: [
                this.detail.username,
                [Validators.required, Validators.minLength(5)]],
            email: [this.detail.email, [Validators.required, Validators.email]],
            phone: [this.detail.phone, [Validators.required,
            Validators.minLength(5),
            Validators.min(0),
            Validators.pattern('[0-9]*')]],
            skillsets: this.fb.array([

            ]),
            hobbys: this.fb.array([

            ]),
        });
        // Initial the data into array form
        this.skillsets = this.f.skillsets as FormArray;
        this.detail.skillset.map((res: any) => {
            this.skillsets.push(this.readSkill(res.type, res.version, res.formId));
        });

        this.hobbys = this.f.hobbys as FormArray;
        this.detail.hobby.map((res: any) => {
            this.hobbys.push(this.readHobby(res.type, res.formId));
        });
    }

    get f() { return this.userForm.controls; }

    // Get the data from the ori source
    readSkill(type: any, version: any, id: any): FormGroup {
        return this.fb.group({
            type,
            version,
            skillId: id
        });
    }
    readHobby(type: any, id: any): FormGroup {
        return this.fb.group({
            type,
            hobbyId: id
        });
    }

    createSkill(): FormGroup {

        return this.fb.group({
            type: '',
            version: '',
            skillId: ++this.skillId
        });
    }
    createHobby(): FormGroup {
        return this.fb.group({
            type: '',
            hobbyId: ++this.hobbyId
        });
    }

    addNewSkill = () => {
        this.skillsets = this.f.skillsets as FormArray;
        this.skillsets.push(this.createSkill());
    }

    addNewHobby = () => {
        this.hobbys = this.f.hobbys as FormArray;
        this.hobbys.push(this.createHobby());
    }

    // End of edit part
    trackByFn(index: number, item: any): void {
        return item.formId;
    }

    onSubmit = () => {
        this.submitted = true;
        if (this.userForm.invalid) { return; }

        const form = {
            id: this.detail._id,
            username: this.f.username.value,
            email: this.f.email.value,
            phone: this.f.phone.value,
            skillset: this.f.skillsets.value,
            hobby: this.f.hobbys.value
        };
        this.subs.push(
            this._userService.onUpdateUser(form).subscribe(res => {
                alert(res.message);
                this.router.navigate(['home']);
            }, error => {
                alert(error.error.message);
            })
        );

    }
}
