import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { TwoWayBindingsComponent } from "./components/two-way-bindings/two-way-bindings.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'two-way', component: TwoWayBindingsComponent},
    {path: 'list/:id', component: ItemDetailComponent}
] 

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}