import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'auth', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {}