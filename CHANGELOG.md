## <1.1.0> - <2024-04-30>

### Sprint learnings
- Sobre métodos, paginación y filtros en prisma
- La importancia de prisma client para hacer las consultas a la base de datos
- Sobre cuando usar query y params y de su importancia al hacer solicitudes, ej: en postman
- Establecer relación entre tablas desde pgAdmin
- Diferencias y posibilidades con npx prisma db pull y npx prisma db push (para no usar opciones con migrate)
- El flujo entre npx tsc, npm start y postman

### Added
- Esquemas relacionados e importados de pgAdmin
- Controller para taxis y trajectories, compilados como js
- Para taxis se agregó el 1er endpoint, con su función listaTaxis (cursor pagination)
- Para trajectories se agregó el 2do endpoint, con su función histrialTaxi (offset pagination)
- Para trajectories se agregó el 3er endpoint, con su función lastLocation (offset pagination)
- Routes de taxis y trajectories, compilados como js

### Changed
- Se modidicó la iniciación de la app

### Fixed
- N/A

### Removed
- N/A

## <1.0.0> - <2024-04-24>

### Sprint learnings
- Configurar el inicio de una aplicación NodeJS con Express y TypeScript. Entender la necesidad del compilado
- Conectar una base de datos con Vercel Postgres
- Cargar base de datos y crear tablas con pgAdmin y con conexión a través de Prisma

### Added

-Boilerplate base de la aplicación:

- C:.
  - build
    - app.js
  - docs
  - node_modules
  - prisma
    - migrations
    - schema prisma
  - src
    - app.ts
  - env
  - .gitignore
  - explaindev.json
  - package-lock.json
  - package.json
  - tsconfig.json
  - README.md
  - CHANGELOG.md

  *En el readme agregué una tabla en la que voy haciendo check mientras avanzo en la [arquitectura de la Api.](https://github.com/olicrea/DEV013-fleet-management-api?tab=readme-ov-file#9-comprender-para-implementar) 


### Changed

- N/A

### Fixed

- N/A

### Removed

- N/A



<!-- // git log --all --since='7 days ago' --oneline --format="* %h %s (%an) %as" -->

<!-- Dado un número de versión MAYOR.MENOR.PARCHES, incrementa lo siguiente:

MAYOR versión cuando realizas cambios incompatibles en la API

MENOR versión cuando agregas funcionalidad de manera compatible hacia atrás

PARCHES versión cuando realizas correcciones de errores compatibles hacia atrás -->

[Versiones semánticas 2.0.0](https://semver.org/)