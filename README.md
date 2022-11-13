# 🎮Angular-ionic

El templete es blanco para hacerlo desde cero

## Tips/comandos
```
* Si se clona el proyecto antes intalar node
	npm install
	
* Para instalar ionic desde cero en blanco
	ionic start componentes blank
	
*Levantar la app
	ionic serve
	
*Instalar y levantar con ionic lab 
	ionic serve --lab
	
*Generar paginas pero saber antes que se va a instalar 
	ionic g page pages/inicio --dry-run
	(✔ver antes sin el archivo de prueba: )
	ionic g page pages/inicio --dry-run --spec=false
	(✔para descargar los modulos: )
	ionic g page pages/inicio --spec=false

*para crear servicio
	ionic g service services/photo
	ionic g s services/dataLocalReg --skipTests=true

*Capacitor 
 npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem

*Para SplashScreen y StatusBar, los comandos son
	npm install @ionic-native/splash-screen
 npm install @ionic-native/status-bar

```
##  🔧 Instalaciones

	npm install -g @ionic/cli	
	npm install
		Si da error de npm :
	Debéis lanzar el siguiente comando npm cache clean --force y eliminar la carpeta de node_modules. 
 Hecho esto volvemos a lanzar el npm install 
 y luego el npm start y ya debería funcionar.

## URL/IMP
```
https://ionicframework.com/docs/components

https://ionicframework.com/docs/developing/android
```
## ![androide36](https://user-images.githubusercontent.com/71487857/199188171-195d30ba-e4b6-4f3f-bea1-bbf09369c70a.jpg)🕹 Developer options (Emulador):
```
	1º Abrir emulador e ir a ajustes
	2º System -->bajar Advanced--> Developer Options(si no aparece: ir a abaut emulated device-->build number ...(hacer click  varias veces "already develpers")
     Developer Options-->On --> USB debugging "activado"-->regresar al menu de inicio
	3º $ ionic capacitor add android
		 Si sale error lanzar :
		  $ ionic build
				$ ionic capacitor add android
				$ ionic capacitor copy android
  4º Ir a Android y buscar el proyecto ej(D:\ionic\My-app-ionic-angular-androir-ios\android)y abrirlo	
  5º Para pasar los nuevos cambios de VCode a Android
	   $ ionic capacitor copy android

```
## ![androide36](https://user-images.githubusercontent.com/71487857/199188171-195d30ba-e4b6-4f3f-bea1-bbf09369c70a.jpg) LEVANTAR APP EN ANDROID
```
1º Capacitor
  ionic capacitor add android

2º Para actualizar android
  ionic capacitor copy android

3º Iniciar en android studio
  ionic capacitor build android

```
## ↪️ Live reload Android

```
 $ ionic capacitor run android -l --external
```
## 🔎 Herramientas de desarrollo

```
More tools --> remote deivces
*Si no lo encuentro escribo esto :
chrome://inspect/#devices
*En Port forwarding... poner el puerto (localhost:8100) y darle a done
```

## 🐛 Android Errores

```
 *Necesitamos cambiar las dependecias
	  -Este es el error que sale: 

"Caused by: org.gradle.internal.metaobject.AbstractDynamicObject$CustomMessageMissingMethodException: Could not find method compile() for arguments [{name=barcodescanner-release-2.1.5, ext=aar}] on object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler."
 
	 🔨SOLUCIÓN

	Cambiar las dependencias de "compile" a "implementation"

	-File-->ProyectStructure-->Dependencias->"Las que estan subrayadas"-->Cambiar en "configuration" : compile -> implemention

```

## 👽 Cordova: corre app

1º Mirar las versiones :
	node -v
	 v10.16.3
 npm --version
  8.19.2
 git --version
  git version 2.35.1.windows.2
 nvm ls

	*Para instalar versiones en nvm ir hasta el direcctorio en PowerShell como admin (C:\Users\cinta\AppData\Roaming\nvm):
		*Para ver la path donde esta la variable de entorno
		 Get-ChildItem env:
		*Hago un install en la carpet
    ./nvm.exe install 12.22.10
    
	2º Para arrancar 
	$ ionic cordova prepare android	

	3º Construye
	$ ionic cordova build android


## 🎥 Guardar y Mostrar datos de scanner

| Módulo  | Explicación |
| ------- | ----------- |
| ✔ registroScan.model    | Para manejar la informacion/registro de un scaneo       |               
| ✔ data-local.service    | Donde se importa los registros del modelo(almacena info)|
| ✔ scanner-history.page  | Donde se importa los registros del modelo(almacena info)|
| ✔ scanner.page.ts       |  importo el servicio para mostrarlos en los html        |

## 🔒️ Ionic Storage

   🌏URL 
```
https://github.com/ionic-team/ionic-storage
```

  🔧Instalar:
  
			npm i cordova-sqlite-storage

			npm install @ionic/storage
  
			npm install --save @ionic/storage

		 npm install @ionic/storage-angular 
  
  🚀Importación:
  

	 Angular(app.module.ts):

		import { IonicStorageModule } from '@ionic/storage-angular';

				@NgModule({
						declarations: [AppComponent],
						imports: [
								BrowserModule,
								IonicModule.forRoot(),
								IonicStorageModule.forRoot(),
						],
						providers: [
								BarcodeScanner,
								{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
						],
						bootstrap: [AppComponent],
				})
				export class AppModule { }

	   Servicio(data-local.service.ts)

			import { Storage } from '@ionic/storage';

			guardados: Registro[] = [];

			constructor(private storage: Storage) {
					this.storage.get('registros').then(reg =>{
							this.guardados = reg || [];
					});
				}
			guardarReg(  ){
    this.storage.set('Registros', this.guardados);}

 
## 🌍 Geo localización

### 📌 url mapbox para coger la api


https://github.com/ionic-team/ionic-storage


### 📌 Tenemos que ir a la api y copiar el CDN y pegarlo en el index


	<script src='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js'></script>

	<link href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />

		-(Pegar esto en el html de la pagina mapa)
		<div id='map' style='width: 400px; height: 300px;'></div>
 


**Free Software, Hell Yeah!🤘**
