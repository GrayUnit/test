import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { IconsModule } from '../icons/icons.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    IconsModule,
    CoreModule
  ],
  exports: [UiComponent]
})
export class UiModule { }
