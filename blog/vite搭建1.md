---
title: vite搭建（一）CLI搭建及dotFile的配置
author: Zodea
author_url: https://github.com/zodea
tags: ["vite", "vue3", "ESLint", "prettier", "TypeScript"]
date: 2021-08-30
slug: vite1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## pnpm
相较 [npm](https://www.npmjs.com/) 、 [yarn](https://yarnpkg.com/) 使用 [pnpm](https://www.pnpm.cn/) 的一个优势是，节省磁盘空间并提升安装速度，详情可点击官网查看。相对部分旧项目，pnpm可能在依赖结构上有所问题，所以尽可能在新项目中使用。

<Tabs
  groupId="pnpm"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'npx', value: 'npx'},
  ]}>
  <TabItem value="npm">

  ```shell
  npm install -g pnpm
  ```

  </TabItem>
  <TabItem value="npx">

  ```shell
  npx pnpm add -g pnpm
  ```

  </TabItem>
</Tabs>

为了减少内存的使用，pnpm在更新插件的时候会自动清理掉低版本的依赖，当然你也可以使用 `pnpm store prune` 对未引用的依赖进行删除。当你在切换分支时，如果依赖有不同，且被清理掉了，则需要安装缺少的依赖才可继续运行。

## vite
[Vite](https://cn.vitejs.dev/) 相较 [webpack](https://webpack.docschina.org/) 依旧是快，而且这个也是基于Vite2搭建，所以如果想使用webpack系列的，可以查看[Vue CLI](https://cli.vuejs.org/zh/) 的教程进行安装。

下面是搭建方法

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
  npm init vite@latest
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn create vite
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpx create-vite
  ```

  </TabItem>
</Tabs>

<!--truncate-->


然后按照提示操作即可！

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

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
  # npm 6.x
  npm init vite@latest my-vue-app --template vue-ts

  # npm 7+, 需要额外的双横线：
  npm init vite@latest my-vue-app -- --template vue-ts
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn create vite my-vue-app --template vue-ts
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpx create-vite my-vue-app --template vue-ts
  ```

  </TabItem>
</Tabs>

## gitignore
在项目构建之初，我们就需要提前先配置好git的相关信息及其需要忽略的提交文件
首先在命令行执行下面的命令初始化项目

```shell
git init
```

然后再创建git忽略文件，使用下面的简单配置：

```text title=".gitignore"
node_modules
.DS_Store
dist
dist-ssr
*.local

# other
.npmrc
.cache
test/upload-server/static

.local
# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
# .vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

:::note
这里我推荐使用vscode的 **codezombiech.gitignore** 插件，由他可以通过操作生成相关的忽略配置
:::

## EditorConfig
不同的IDE都支持该插件，能告诉你的IDE这么去约束你的项目文件

```editorconfig title=".editorconfig"
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100

[*.{yml,yaml,json}]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab

```

<details>
  <summary>带注释版</summary>
  <div>

    # ↓告诉EditorConfig插件，这是根文件，不用继续往上查找。
    root = true

    # ↓匹配全部文件。
    [*]
    # ↓使用`utf-8`字符集。
    charset=utf-8
    # ↓结尾换行符，可选`lf`、`cr`、`crlf`。
    end_of_line=lf
    # ↓在文件结尾插入新行。
    insert_final_newline=true
    # ↓缩进的样式为空格。
    indent_style=space
    # ↓缩进为2。
    indent_size=2
    # ↓行最大长度为100。
    max_line_length = 100

    # ↓匹配以`.yml`、`.yaml`、`.json`结尾的文件。
    [*.{yml,yaml,json}]
    indent_style = space
    indent_size = 2

    # ↓匹配以`.md`结尾的文件。
    [*.md]
    # ↓修剪尾部的空白
    trim_trailing_whitespace = false

    [Makefile]
    indent_style = tab
  </div>
</details>

:::note
在vscode中可以安装 **editorconfig.editorconfig** 该插件，然后在vscode的资源管理器右键可以通过Generate .editorconfig生成一份默认的约束文件。
:::

## ESLint
安装代码检测工具，并在vite中启用自动更新

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
  npm i -D eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
  npx eslint --init
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
  yarn run eslint --init
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
  pnpx eslint --init
  ```

  </TabItem>
</Tabs>

### eslint-define-config
再安装`eslint-define-config`，通过其提示的eslint对象属性的功能，更便于样式的管理
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
  npm i -D eslint-define-config
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D eslint-define-config
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D eslint-define-config
  ```

  </TabItem>
</Tabs>

然后我们可以在根目录下新增以下配置
```javascript title=".eslintrc.js"
// @ts-check
const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
});
```

解释一下重要的部分
- `parser: '@typescript-eslint/parser'`告诉ESLint使用你安装的解析器包（[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/fa35e22702207baf07acb3eec11d3383721bf6b6/packages/parser)）。
  - 这使得ESLint能够理解TypeScript的语法。
  - 这是必须的，否则ESLint会在试图解析TypeScript代码时抛出错误，就像它是普通的JavaScript一样。
- `plugins: ['@typescript-eslint']` 告诉ESLint加载你安装的插件包（[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/fa35e22702207baf07acb3eec11d3383721bf6b6/packages/eslint-plugin)）。
  - 这允许你在你的代码库中使用这些规则。
- `extends: [ ... ] `告诉ESLint，你的配置扩展了给定的配置
  - `eslint:recommended`是ESLint内置的 "推荐 "配置--它打开了一个小的、合理的规则集，为众所周知的最佳实践提供了提示。
  - `plugin:@typescript-eslint/recommended`是我们的 "推荐 "配置--它就像`eslint:recommended`一样，只是它只开启我们TypeScript专用插件的规则。

:::caution
由于vue有特殊的template语法，所以对于代码检测的部分，需要更换为[elint-pluign-vue](https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error)插件，根据里面的教程，我们对当前的代码检测进行替换修改。
:::

```javascript {5,6,8} title=".eslintrc.js"
// @ts-check
const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  // ...
- "parser": "@typescript-eslint/parser",
+ "parser": "vue-eslint-parser",
  "parserOptions": {
+     "parser": "@typescript-eslint/parser",
      "ecmaVersion": 2020,
      "sourceType": "module"
  }
  // ...
});

```
目前在`eslint`的配置部分暂告一段落，我们现在来添加运行时代码检测，这样就能实现统一的提交规范，不需要对每个电脑的不同代码格式化配置进行处理。
### vite-plugin-eslint
官方文档[vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)

我们可以通过添加 `vite-plugin-eslint` 实现对 **非根目录下** 的文件进行自动格式化
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
  npm i -D vite-plugin-eslint
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D vite-plugin-eslint
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D vite-plugin-eslint
  ```

  </TabItem>
</Tabs>

```javascript title="vite.config.ts"
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin({
      fix: true,
    })],
});
```

## prettier
:::info
此时我们再添加格式化代码的插件，使用[prettier](https://prettier.io/)，也可以结合 `vscode` 的 `esbenp.prettier-vscode` 插件来格式化。
:::

我们需要安装
- `prettier`: 提供 `eslint-plugin-prettier` 的格式化依赖
- `eslint-plugin-prettier`: 项目的唯一格式化插件
- `eslint-config-prettier`: 解决`ESLint`和`prettier`的规则冲突

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
  npm i -D eslint-config-prettier eslint-plugin-prettier prettier
  ```

  </TabItem>
  <TabItem value="yarn">

  ```shell
  yarn add -D eslint-config-prettier eslint-plugin-prettier prettier
  ```

  </TabItem>
  <TabItem value="pnpm">

  ```shell
  pnpm i -D eslint-config-prettier eslint-plugin-prettier prettier
  ```

  </TabItem>
</Tabs>

然后就配置prettier

```javascript title="prettier.config.js"
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'es5',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  rangeStart: 0,
};
```

配置忽略文件

``` title=".prettierignore"
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

再把prettier配置进ESLint

```javascript {5,6} title=".eslintrc.js"
// ...
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
// ...
```

### 代码检测规则
之前说了`ESLint`是用来检查代码的。又安装了那么多的插件。但是官方默认的方案有时不一样符合我们的要求。我们需要自定义自己的规则。

修改规则主要是修改根目录下.eslintrc.js文件的**rules**字段。

```javascript title=".eslintrc.js"
// ...
  rules: {
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',

    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
// ...
```

<details>
  <summary>带注释版</summary>
  <div>

    module.exports = {
      // ...
      rules: {
        // ↓禁止在setup内使用var定义变量
        'vue/script-setup-uses-vars': 'error',
        // ↓禁止使用@ts-ignore来消除ESLint检查
        '@typescript-eslint/ban-ts-ignore': 'off',
        // ↓在函数和类方法上需要显式的返回类型
        '@typescript-eslint/explicit-function-return-type': 'off',
        // ↓禁止使用any类型
        '@typescript-eslint/no-explicit-any': 'off',
        // ↓除导入语句外，禁止使用require语句
        '@typescript-eslint/no-var-requires': 'off',
        // ↓禁止使用空函数
        '@typescript-eslint/no-empty-function': 'off',
        // ↓对自定义事件名称强制使用特定的大小写
        'vue/custom-event-name-casing': 'off',
        // ↓禁止定义前使用
        'no-use-before-define': 'off',
        // ↓在定义变量之前不允许使用变量
        '@typescript-eslint/no-use-before-define': 'off',
        // ↓禁止使用@ts-注解
        '@typescript-eslint/ban-ts-comment': 'off',
        // ↓禁止使用特定类型
        '@typescript-eslint/ban-types': 'off',
        // ↓禁止使用!后缀运算符进行非null断言
        '@typescript-eslint/no-non-null-assertion': 'off',
        // ↓在导出的函数和类的公共类方法上需要显式的返回值和参数类型
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // ↓禁止使用未使用的变量
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^h$',
            varsIgnorePattern: '^h$',
          },
        ],
        // ↓禁止使用未使用的变量
        'no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^h$',
            varsIgnorePattern: '^h$',
          },
        ],
        // ↓在函数括号前需要或不允许有空格
        'space-before-function-paren': 'off',

        // ↓强制属性顺序
        'vue/attributes-order': 'off',
        // ↓强制每个组件应位于其自己的文件中
        'vue/one-component-per-file': 'off',
        // ↓在标签的右括号之前要求或不允许换行
        'vue/html-closing-bracket-newline': 'off',
        // ↓强制每行的最大属性数
        'vue/max-attributes-per-line': 'off',
        // ↓在多行元素的内容之前和之后需要换行
        'vue/multiline-html-element-content-newline': 'off',
        // ↓在单行元素的内容之前和之后需要换行
        'vue/singleline-html-element-content-newline': 'off',
        // ↓在模板中的自定义组件上实施属性命名样式
        'vue/attribute-hyphenation': 'off',
        // ↓需要道具的默认值
        'vue/require-default-prop': 'off',
        // ↓实施自我封闭的风格
        // 'vue/html-self-closing': 'off',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'never',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
      },
    };

  </div>
</details>

:::danger
目前基本的dotFile代码风格配置就在此告一段落，关于git提交检测及文件命名判断的相关检测会在下个章节进行介绍，对于.env的多环境配置会在之后的文章看情况更新。
:::
