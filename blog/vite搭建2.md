---
title: vite搭建（二）代码提交前检测
author: Zodea
author_url: https://github.com/zodea
tags: ["Stylelint", "husky", "lint-staged", "pretty-quick", "commitlint", "commitizen"]
date: 2021-09-02
slug: vite2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

再续前缘，这里我们开始介绍和git提交相关的检测，主要会涉及到 **Stylelint**、 **husky**、 **lint-staged**。

## Stylelint
这里主要是负责的样式的检查，我们主要会安装以下几个依赖
- **[stylelint](https://stylelint.io/)**: 是对我们编写的样式进行检查的插件。
- **[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)**: 是stylelint扩展的检查标准库。
- **[stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)**: 是用来解决冲突的（估计又和ESLint冲突了，参考之前的prettier）。
- **[stylelint-order](https://github.com/hudochenkov/stylelint-order)**: 是检查我们样式编写顺序的。

:::note
vscode中我们可以安装 **stylelint.vscode-stylelint** 插件，这个对于样式方面会有很好的检测能力，暂时只支持CSS/Less/SCSS。
:::

安装依赖
<Tabs
  groupId="vite_boilerplate"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
    {label: 'pnpm', value: 'pnpm'},
  ]}>
  <TabItem value="npm">

  ```shell
  npm i -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-order
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-order
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-order
  ```

  </TabItem>
</Tabs>

<!--truncate-->

添加规则
```js title="stylelint.config.js"
module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    // 'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
```

> **[原链接](https://www.kuxiaoxin.com/archives/20)**

<details>
  <summary>带注释版</summary>
  <div>

  ```
  rules: {
    // ↓禁止使用未知的伪类选择器。
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    // ↓禁止使用未知的伪元素。
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // ↓禁止使用未知规则。
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    // ↓禁止空来源。
    'no-empty-source': null,
    // ↓禁止使用无效的命名网格区域。
    'named-grid-areas-no-invalid': null,
    // ↓要求或不允许使用Unicode字节顺序标记。
    'unicode-bom': 'never',
    // ↓禁止较低特异性的选择器在覆盖较高特异性的选择器之后出现。
    'no-descending-specificity': null,
    // ↓禁止在字体系列名称列表中缺少通用系列。
    'font-family-no-missing-generic-family-keyword': null,
    // ↓在声明的冒号后面需要一个空格或禁止空格。
    'declaration-colon-space-after': 'always-single-line',
    // ↓在声明的冒号之前需要一个空格或禁止使用空格。
    'declaration-colon-space-before': 'never',
    // ↓在声明块内要求或不允许尾随分号。
    'declaration-block-trailing-semicolon': 'always',
    // ↓在规则之前要求或禁止使用空行。
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    // ↓禁止使用未知单位。
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // ↓指定声明块中内容的顺序。最后的修复可能会在Less中生效，但不被官方支持。
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    // {
    //   disableFix: true,
    // },
  },
  ```
  </div>
</details>

### 脚本命令
使用stylelint校验：
- `--fix`: 在可能的情况下，自动修复由规则报告的违规行为。<br />
  对于具有标准语法的CSS，stylelint使用postcss-safe-parser来修复语法错误。<br />
  如果一个源代码包含一个:
  - 范围内的禁用注释，例如/*stylelint-disable indentation */，范围内的规则所报告的任何违规行为将不会在源代码的任何地方被自动修复
  - 非范围内的禁用注释，即/* stylelint-disable */，整个源代码将不会被自动修复。
- `--cache`: 存储已处理的文件的结果，以便stylelint只对改变的文件进行操作。默认情况下，缓存被存储在process.cwd()的./.stylelintcache中。 <br />
  启用这个选项可以极大地提高stylelint的速度，因为只有改变过的文件才被缓存。 <br />
  如果你运行了带缓存的stylelint，然后运行不带缓存的stylelint，stylelint会删除.stylelintcache，因为我们必须假设第二个命令使.stylelintcache失效。
- `--cache-location`: 缓存位置的文件或目录的路径。 <br/>
  如果指定了一个目录，stylelint会在指定的文件夹中创建一个缓存文件。文件的名字是基于process.cwd()的哈希值（例如：.cache_hashOfCWD），这样stylelint就可以为不同项目的各种缓存重复使用一个位置。 <br />
  如果cacheLocation的目录不存在，请确保在\*nix系统上添加尾部的 **`/`**，或在Windows上添加 **`\`**。否则，stylelint会认为该路径是一个文件。

```json
"lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/"
```

> [查看更多配置](https://stylelint.io/user-guide/usage/options/)

:::info
使用stylelint格式化任何子目录内已修改的以`.vue`,`.less`,`.postcss`,`.css`,`.scss`为后缀的文件，并将缓存文件制定存放在 **node_modules/.cache/stylelint/**文件夹内
:::


## PostCSS

出于对不同浏览器的样式适配，我们需要对样式加上前缀。为了便于开发，我们使用PostCSS，它可以接收一个 CSS 文件并提供了一个 API 来分析、修改它的规则（通过把 CSS 规则转换成一个 **[抽象语法树](https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E8%AA%9E%E6%B3%95%E6%A8%B9)** 的方式）。在这之后，这个 API 便可被许多 **[插件](https://github.com/postcss/postcss/blob/main/README-cn.md#%E6%8F%92%E4%BB%B6)** 利用来做有用的事情，比如寻错或自动添加 CSS vendor 前缀。

此时再结合 **[autoprefixer](https://github.com/postcss/autoprefixer)**，添加 vendor 浏览器前缀，它使用 [Can I Use](https://caniuse.com/) 上面的数据。

就实现了大部分浏览器可展现的样式支持。现在我们查看 **[vite下的PostCSS的配置](https://cn.vitejs.dev/guide/features.html#postcss)** ，按照官方说明，我们可以这样简单的配置：

```javascript title="postcss.config.js"
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

:::note
想查看更多的工具支持，可以查看 **[中文文档](https://github.com/postcss/postcss/blob/main/docs/README-cn.md)**
:::

## rimraf
在开发中，偶尔会有依赖冲突或者其他突发事件，对项目的依赖可能要做重新安装的步骤。而每次要手动删除node_module包，会很麻烦，因此通过脚本来删除是一个很好的选择。
对于不同的操作系统，删除的命令也各不相同，为了简单的实现这些脚本，我们可以通过下载rimraf来实现：

<Tabs
  groupId="vite_boilerplate"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
    {label: 'pnpm', value: 'pnpm'},
  ]}>
  <TabItem value="npm">

  ```shell
  npm i -D rimraf
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D rimraf
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D rimraf
  ```

  </TabItem>
</Tabs>

### 脚本命令

```json
"clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
"clean:lib": "rimraf node_modules",
"reinstall": "rimraf yarn.lock && rimraf package.lock.json && rimraf node_modules && npm run bootstrap",
"reinstall:pnpm": "rimraf yarn.lock && rimraf package.lock.json && rimraf pnpm-lock.yaml && rimraf node_modules && bootstrap:pnpm"
```

:::note
  `clean:cache`: 删除缓存，删除 **node_modules/.cache/** 和 **node_modules/.vite** 下的文件。<br />
  `clean:lib`: 清除依赖，删除node_modules文件夹。<br />
  `reinstall`: 重新安装依赖，该命令会先删除 **node_modules**、 **yarn.lock**、 **package.lock.json**后在进行依赖重新安装，速度会明显变慢。<br />
  `reinstall:pnpm`: 同上，不过是用pnpm进行安装
:::

## husky

首先安装依赖，并在根目录下新增 `.husky/`的 **git钩子文件夹**:
<Tabs
  groupId="vite_boilerplate"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
    {label: 'pnpm', value: 'pnpm'},
  ]}>
  <TabItem value="npm">

  ```shell
  npm i -D husky && npx husky install
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D husky && yarn husky install
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D husky && pnx husky install
  ```

  </TabItem>
</Tabs>

然后就需要在配置依赖时也添加响应的钩子检测，yarn有点不一样，[详情可见](https://typicode.github.io/husky/#/?id=yarn-2)。对于npm、yarn1、pnpm可以在脚本命令中添加上：

```json title="package.json"
"prepare": "husky install"
```

或者也可以使用命令生成

```shell
npm set-script prepare "husky install"
```

根据最新版的husky文档，[不建议在package.json中配置hooks](https://blog.typicode.com/husky-git-hooks-javascript-config/)，于是使用官方推荐的写法即 `husky install` 命令创建.husky文件夹，在里面配置各githook的操作检测。

使用npx husky add .husky/pre-commit 新增提交前检测，并将文件修改成下面的样子

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"

[ -n "$CI" ] && exit 0

# Format and submit code according to lintstagedrc.js configuration
npm run lint:lint-staged

npm run lint:pretty
```

:::tip
`[ -n "$CI" ] && exit 0`是避免在CI（持续集成）环境下运行githooks，也可以通过 [is-ci](https://www.npmjs.com/package/is-ci) 的依赖在package.json的钩子中避免代码检测
:::

```json
"scripts": {
	"prepare": "is-ci || npm run husky:install",
	"husky:install": "husky install",
}
```

### lint-staged
可以根据官方文档使用 `npx mrm@2 lint-staged` 直接添加，此时会直接在package.json文件中添加相关的代码检测，并在pre-commit中会有新增一行npx lint-staged

:::caution
使用`npx mrm lint-staged`会有下面的报错问题：
```shell
Preset “default” not found.
We’ve tried to load “mrm-preset-default” and “default” npm packages.
```

问题出在mrm上，它目前的版本3似乎与lint-staged不兼容，要解决这个问题，你必须通过运行npx mrm@2 lint-staged指定mrm的版本2。
:::

同样在v3.1的版本后，可以使用以下几种方式选择你想要的文件类型

> - `lint-staged` object in your `package.json`
> - `.lintstagedrc` file in JSON or YML format, or you can be explicit with the file extension:
>   - `.lintstagedrc.json`
>   - `.lintstagedrc.yaml`
>   - `.lintstagedrc.yml`
> - `lint-staged.config.js`, `.lintstagedrc.js`, or `.lintstagedrc.cjs` file in JS format
> - Pass a configuration file using the `--config` or `-c` flag

在pre-commit中有俩个npm run的命令，就是我们自定义的lintstagedrc.js文件内的执行内容了

```js title=".husky/lintstagedrc.js"
module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --config .eslintrc.js", "prettier --config .prettierrc --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc,!.eslintrc.js}": ["prettier --write json"],
  "package.json": ["prettier --write"],
  "*.{scss,less,styl,html}": ["stylelint --config stylelint.config.js"],
  "*.md": ["prettier --write"],
};
```
:::tip
自10.0.0版本开始，修改后的文件回自动的git add，所以不需要处理更改后文件的上传
:::

### pretty-quick
此依赖主要是更新git的暂存文件
<Tabs
  groupId="vite_boilerplate"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
    {label: 'pnpm', value: 'pnpm'},
  ]}>
  <TabItem value="npm">

  ```shell
  npm i -D pretty-quick
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D pretty-quick
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D pretty-quick
  ```

  </TabItem>
</Tabs>


:::danger
如果在使用 `git commit` 进行本地暂存时出现下面的问题，是由于你的文件权限不够，`chmod ug+x .husky/pre-commit`可以解决

```shell
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
```
:::

在 Windows 上通过 Git Bash ( `stdin is not a tty`)使用 Yarn 时，Git 钩子可能会失败。如果您有 Windows 用户，强烈建议添加以下解决方法。此时新建一个common.sh放置到.husky文件夹下

```sh
#!/bin/sh
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi

```

可以通过`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`命令行创建提交信息的检测

```sh
#!/bin/sh

# shellcheck source=./_/husky.sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

### commitlint

此时需要commitlint的依赖

<Tabs
  groupId="vite_boilerplate"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
    {label: 'pnpm', value: 'pnpm'},
  ]}>
  <TabItem value="npm">

  ```shell
  npm i -D @commitlint/cli @commitlint/config-conventional
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D @commitlint/cli @commitlint/config-conventional
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D @commitlint/cli @commitlint/config-conventional
  ```

  </TabItem>
</Tabs>

创建commitlint的基本配置文件

```shell
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

此时会生成相关的commitlint.config.js文件，在内部写上相关的提交检测

```js
module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[(（](.*)[)）])?[:：] (.*)/,
      headerCorrespondence: ["type", "scope", "subject"],
      referenceActions: [
        "close",
        "closes",
        "closed",
        "fix",
        "fixes",
        "fixed",
        "resolve",
        "resolves",
        "resolved",
      ],
      issuePrefixes: ["#"],
      noteKeywords: ["BREAKING CHANGE"],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ["header", "hash"],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release",
      ],
    ],
  },
};
```

> **[原链接](https://www.kuxiaoxin.com/archives/28#32%E5%B8%A6%E6%B3%A8%E9%87%8A%E7%9A%84%E4%BB%A3%E7%A0%81)**

<details>
  <summary>带注释版</summary>
  <div>

```javascript
module.exports = {
  // ↓忽略包含init的提交消息
  ignores: [(commit) => commit.includes('init')],
  // ↓按照传统消息格式来验证
  extends: ['@commitlint/config-conventional'],
  // ↓这里是自定义解析器，看不太懂，直接搬代码吧，
  // ↓https://commitlint.js.org/#/reference-configuration?id=parser-presets
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved',
      ],
      issuePrefixes: ['#'],
      noteKeywords: ['BREAKING CHANGE', '不兼容变更'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  // ↓自定义提交消息规则
  rules: {
    // ↓body以空白行开头
    'body-leading-blank': [2, 'always'],
    // ↓footer以空白行开头
    'footer-leading-blank': [1, 'always'],
    // ↓header的最大长度
    'header-max-length': [2, 'always', 108],
    // ↓subject为空
    'subject-empty': [2, 'never'],
    // ↓type为空
    'type-empty': [2, 'never'],
    // ↓type的类型
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
      ],
    ],
  },
};
```
  </div>
</details>

当进行到这一步时，我们可以开始进行一次初步的提交，此时的提交已经有了钩子函数判断是否规范了。
- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `perf` 优化/性能提升
  - `style` 代码风格相关无影响运行结果的
  - `docs` 文档/注释
  - `test` 测试相关
  - `refactor` 重构
  - `ci` 持续集成
  - `chore` 依赖更新/脚手架配置修改等
  - `revert` 撤销修改
  - `wip` 开发中
  - `workflow` 工作流改进
  - `types` 类型定义文件更改
  - `release` 发布

- 现结合 commitizen 使用，使用 git cz 规范化提交代码

### commitizen

首先安装 commitizen 工具

```bash
npm install commitizen -g
```

接下来，初始化你的项目以使用 cz-conventional-changelog 适配器，方法是键入:

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```

如果你正在使用 Yarn:

```bash
commitizen init cz-conventional-changelog --yarn --dev --exact
```

到这我们就可以通过git cz来将代码提交一次了

```sh
git add -A
git cz
cz-cli@4.2.4, cz-conventional-changelog@3.3.0

? Select the type of change that you're committing:
❯ build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
  ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
  chore:    Other changes that don't modify src or test files
  revert:   Reverts a previous commit
  feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
(Move up and down to reveal more choices)
? What is the scope of this change (e.g. component or file name): (press enter to skip)
? Write a short, imperative tense description of the change (max 93 chars):
 (8) 搭建代码检测环境
? Provide a longer description of the change: (press enter to skip)

? Are there any breaking changes? No
? Does this change affect any open issues? (y/N) No

> vite_boilerplate@0.0.0 lint:lint-staged
> lint-staged -c ./.husky/lintstagedrc.js

✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...

> vite_boilerplate@0.0.0 lint:pretty
> pretty-quick --staged

🔍  Finding changed files since git revision 2aaa5c0.
🎯  Found 2 changed files.
✍️  Fixing up pnpm-lock.yaml.
✅  Everything is awesome!
[master 46eda62] build: 搭建代码检测环境
```

大致的简单流程就是这样，代码检测环境就到此结束，后续我们会开始做其他插件的导入及基本的使用。
