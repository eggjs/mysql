# Changelog

## [6.0.0](https://github.com/eggjs/mysql/compare/v5.0.0...v6.0.0) (2025-03-23)

### ⚠ BREAKING CHANGES

- drop Node.js < 18.19.0 support and only support egg>=4

part of https://github.com/eggjs/egg/issues/3644

https://github.com/eggjs/egg/issues/5257

<!-- This is an auto-generated comment: release notes by coderabbit.ai
-->

## Summary by CodeRabbit

- **New Features**
- Refined MySQL plugin integration with improved lifecycle management
  and simplified singleton access.
- Added a ready-to-use Docker Compose setup for local MySQL development.

- **Documentation**
- Updated all documentation with the new package name (@eggjs/mysql) and
  revised usage examples for clarity.

- **Chores**
  - Enhanced package metadata and dependency management.
  - Updated CI configuration to support Node.js versions 18, 20, and 22.

<!-- end of auto-generated comment: release notes by coderabbit.ai -->

### Features

- support cjs and esm both by tshy ([#33](https://github.com/eggjs/mysql/issues/33)) ([dfdaa74](https://github.com/eggjs/mysql/commit/dfdaa746641ce31a0fe1e4add167c7483e742bef))

## [5.0.0](https://github.com/eggjs/egg-mysql/compare/v4.1.0...v5.0.0) (2025-03-08)

### ⚠ BREAKING CHANGES

- drop Node.js < 18 support
- use mysql2 instead of mysql

closes https://github.com/eggjs/egg-mysql/issues/31

<!-- This is an auto-generated comment: release notes by coderabbit.ai
-->

## Summary by CodeRabbit

- **Documentation**
- Updated usage instructions and contributor displays with corrected
  typographical errors.
- **Chores**
  - Removed outdated contributor templates and automation workflows.
- **Dependencies**
- Migrated to a new database client package and raised the minimum
  Node.js version requirement.
- **Tests**
- Refined error validations in database operations for improved error
reporting.
<!-- end of auto-generated comment: release notes by coderabbit.ai -->

### Features

- use @eggjs/rds instead of ali-rds ([#32](https://github.com/eggjs/egg-mysql/issues/32)) ([3093528](https://github.com/eggjs/egg-mysql/commit/30935285268b1c674f9a70b4cb77501f89276467))

## [4.1.0](https://github.com/eggjs/egg-mysql/compare/v4.0.0...v4.1.0) (2025-03-08)

### Features

- update ali-rds@6.4.0 ([#30](https://github.com/eggjs/egg-mysql/issues/30)) ([31ed369](https://github.com/eggjs/egg-mysql/commit/31ed369d954ce4bded89469907f81dcbde3060df))

## [4.0.0](https://github.com/eggjs/egg-mysql/compare/v3.4.0...v4.0.0) (2023-03-06)

### ⚠ BREAKING CHANGES

- drop Node.js < 16 support

### Features

- refactor with TypeScript ([#27](https://github.com/eggjs/egg-mysql/issues/27)) ([4b7311d](https://github.com/eggjs/egg-mysql/commit/4b7311d2beb43a0338337c7128e016690ea04c9e))

## [3.4.0](https://github.com/eggjs/egg-mysql/compare/v3.3.0...v3.4.0) (2023-02-15)

### Features

- **type:** add type definition for mysql.count method ([#26](https://github.com/eggjs/egg-mysql/issues/26)) ([7aef13e](https://github.com/eggjs/egg-mysql/commit/7aef13eb861b41c538d3b3d561c92a666a61110b))

## [3.3.0](https://github.com/eggjs/egg-mysql/compare/v3.2.0...v3.3.0) (2022-12-18)

### Features

- upgrade ali-rds v4 ([#24](https://github.com/eggjs/egg-mysql/issues/24)) ([1b129e8](https://github.com/eggjs/egg-mysql/commit/1b129e8f94b0739a5515d5704be301df85f97b30))

---

# 3.2.0 / 2022-12-03

**features**

- [[`4cf93ce`](http://github.com/eggjs/egg-mysql/commit/4cf93ce5fbeeb3fc734a8e7ba708b27994adad88)] - feat: add more type definition for mysql.get method (#20) (Xin(Khalil) Zhang <<starandtina@users.noreply.github.com>>)

**fixes**

- [[`d3c8a31`](http://github.com/eggjs/egg-mysql/commit/d3c8a31e02beccc8823820340bda89fe307a34ea)] - fix: remove reckless assertion (#15) (WangJie <<abbr.wj+gh@gmail.com>>)

**others**

- [[`ed419d6`](http://github.com/eggjs/egg-mysql/commit/ed419d6c51e25fa3ea2a4b91628375d4d4dcb77d)] - 🤖 TEST: Add tsd test (#22) (fengmk2 <<fengmk2@gmail.com>>)
- [[`4137cfc`](http://github.com/eggjs/egg-mysql/commit/4137cfc46e0db04f6122b065516055a99765eb19)] - 📖 DOC: Use async/await isntead of yield (fengmk2 <<fengmk2@gmail.com>>)
- [[`b103400`](http://github.com/eggjs/egg-mysql/commit/b103400c153176bd9c38e35d72aa3a791999ec27)] - 📖 DOC: Update contributors (fengmk2 <<fengmk2@gmail.com>>)
- [[`a67989c`](http://github.com/eggjs/egg-mysql/commit/a67989c4e6c55604d8d61d1af7af9bc5df35df2e)] - 🤖 TEST: Run test on GitHub Action (#19) (fengmk2 <<fengmk2@gmail.com>>)
- [[`3d04360`](http://github.com/eggjs/egg-mysql/commit/3d04360fd7745ef45d32e8e27c5691878d0cd3bf)] - Create codeql-analysis.yml (fengmk2 <<fengmk2@gmail.com>>)

# 3.1.1 / 2022-06-03

**fixes**

- [[`bb7856b`](http://github.com/eggjs/egg-mysql/commit/bb7856bbf8e363f2ee0ce9410204fd227c2ccd08)] - fix: mysql.update missing condition define (#18) (shangwenhe <<shangwenhe@users.noreply.github.com>>)

# 3.1.0 / 2022-02-11

**features**

- [[`aade70b`](http://github.com/eggjs/egg-mysql/commit/aade70bce78afb39e8e9b3201261bbb8bcf26847)] - feat: add complete typescript typings (#17) (AntiMoron <<anti2moron@gmail.com>>)

**others**

- [[`2e02e40`](http://github.com/eggjs/egg-mysql/commit/2e02e402d6d23740f68ae26c28633303d4d9e206)] - chore: update travis (#16) (TZ | 天猪 <<atian25@qq.com>>)
- [[`89910f6`](http://github.com/eggjs/egg-mysql/commit/89910f6ef17be38b59bc066d754793cc65a84624)] - test: add null query test case (#13) (Century Guo <<648772021@qq.com>>)
- [[`b0dd988`](http://github.com/eggjs/egg-mysql/commit/b0dd988d51b95d576c852d54d26014a845ac2f3d)] - deps: autod (#12) (TZ | 天猪 <<atian25@qq.com>>)
- [[`18b67fd`](http://github.com/eggjs/egg-mysql/commit/18b67fd3e43627ad420ed3df8e8a6e305f5202f6)] - deps: upgrade dependencies (#10) (Haoliang Gao <<sakura9515@gmail.com>>)

# 3.0.0 / 2017-04-03

- deps: ali-rds@3 (#9)

# 2.0.0 / 2017-02-09

- feat: remove app.instrument and fix test (#5)

# 1.0.1 / 2016-12-30

- docs: add app.js and agent.js extend intro (#3)
- docs: add English translation doc (#2)
