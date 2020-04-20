import { NgModule } from '@angular/core';
import { UserRouting } from './user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { LightComponent } from 'src/app/core/_header/light/light.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LightComponent,
    ListComponent,
    CreateComponent,
    DetailComponent,
    UpdateComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UserRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [

  ]
})

export class UserModule { }
