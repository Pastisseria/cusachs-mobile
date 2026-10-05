# Cusachs Mobile — Android

Aplicación móvil de Cusachs Hub basada en React + Vite + Capacitor.

## Preparar Android por primera vez

Requisitos en el ordenador:

- Node.js 20 o superior
- Android Studio instalado
- SDK de Android instalado desde Android Studio

Después de descargar o clonar este repositorio:

```bash
npm install
npm run android:add
npm run android:prepare
npm run android:open
```

El primer comando instala las dependencias. `android:add` crea la carpeta nativa `android/`. `android:prepare` compila la aplicación web y sincroniza Capacitor. `android:open` abre el proyecto directamente en Android Studio.

Una vez creada la carpeta `android/`, para cambios posteriores normalmente basta con:

```bash
npm run android:prepare
npm run android:open
```

## Identidad Android

- Nombre: Cusachs
- App ID: `com.cusachs.mobile`
- Web compilada: `dist`

## Datos y acceso

La aplicación mantiene la conexión existente mediante `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`. Las claves privadas no deben guardarse en GitHub.

## Probar en móvil virtual

En Android Studio, espera a que termine la sincronización de Gradle. Después abre **Device Manager**, crea un teléfono virtual (por ejemplo Pixel), arráncalo y pulsa **Run ▶**.

## Desarrollo web

```bash
npm run dev
```
