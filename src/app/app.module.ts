// Importaciones desde Angular core
import { LOCALE_ID, NgModule } from '@angular/core';

// Importaciones desde Angular platform-browser
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

// Importación de CommonModule desde Angular common
import { CommonModule } from '@angular/common';

// Importación del módulo de rutas AppRoutingModule
import { AppRoutingModule } from './app-routing.module';

// Importación de componentes
import { AppComponent } from './app.component';
import { GeneracionesComponent } from './componentes/generaciones/generaciones.component';
import { PokemonsComponent } from './componentes/pokemons/pokemons.component';

// Importación de datos de localización
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { PokemonComponent } from './componentes/pokemon/pokemon.component';
registerLocaleData(es);

// Decorador NgModule que define el módulo principal de la aplicación
@NgModule({
  // Declaración de componentes que pertenecen al módulo
  declarations: [AppComponent, GeneracionesComponent, PokemonsComponent, PokemonComponent],

  // Importación de otros módulos que se necesitan en este módulo
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],

  // Configuración de proveedores de servicios
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],

  // Componente principal que inicia la aplicación
  bootstrap: [AppComponent],
})
// Clase del módulo principal de la aplicación
export class AppModule {}
