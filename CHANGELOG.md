## <1.1.0> - <2024-04-30>

### Sprint learnings
- Sobre métodos de prisma
- Sobre paginación en prisma
- La importancia de prisma client para hacer las consultas a la base de datos
- Establecer relación entre tablas desde pgAdmin
- Diferencias y posibilidades con npx prisma db pull y npx prisma db push (para no usar opciones con migrate)

### Added

- Controller para taxis y trajectories.
- Especificamente para taxis se agreg+o el primer endpoint, con su función listaTaxis (con paginación).
- Routes de taxis y trajectories.


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