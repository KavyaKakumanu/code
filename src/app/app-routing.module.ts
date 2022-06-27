import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { LoginComponent} from './login/login.component';
import { ShareComponent} from './share/share.component';
import { HomeComponent} from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { SucessComponent} from './sucess/sucess.component';
import { MainpageComponent} from './mainpage/mainpage.component';



const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'login',component: LoginComponent},
  {path:'share',component:ShareComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'sucess',component:SucessComponent},
  {path:'mainpage',component:MainpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
