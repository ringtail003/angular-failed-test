import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SomeComponent } from './some/some.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    SomeComponent,
    OtherComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    SomeComponent,
    OtherComponent,
  ],
})
export class SomeModule {}