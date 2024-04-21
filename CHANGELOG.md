## <1.0.0> - <2024-03-27>

### Sprint learnings
- Configurar el inicio de una aplicación NodeJS con Express y TypeScript
- Conectar una base de datos con Vercel Postgres
- Cargar base de datos y crear tablas con Prisma y visualización en pgAdmin
- Editar y exportar el archivo YAML en editor online de swagger como documentación de la API

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