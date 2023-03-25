import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [],
  imports: [CarouselModule.forRoot()],
  exports: [CarouselModule],
})
export class SharedModule {}
