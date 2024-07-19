import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ChartComponent } from './components/chart/chart.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { ViewnoticeComponent } from './components/viewnotice/viewnotice.component';
import { MaterialComponent } from './components/material/material.component';
import { NewnoticeComponent } from './components/newnotice/newnotice.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { AddPublisherComponent } from './components/publisher/add-publisher/add-publisher.component';
import { AddcategoryComponent } from './components/category/addcategory/addcategory.component';
// import { PublisherComponent } from './components/publisher/publisher.component';
import { PublishersComponent } from './components/publisher/publishers/publishers.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'chart',component:ChartComponent},
    {path:'xyz',component:XyzComponent},
    {path:'ViewNotice',component:ViewnoticeComponent},
    {path:'material',component:MaterialComponent},
    {path:'newnotice',component:NewnoticeComponent},
    {path:'newproduct',component:NewproductComponent},
    {path:'singleproduct',component:SingleproductComponent},
    {path:'addpublisher',component:AddPublisherComponent},
    {path:'publishers',component:PublishersComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'category',component:CategoryComponent},
    {path:'**',component:HomeComponent},
];
