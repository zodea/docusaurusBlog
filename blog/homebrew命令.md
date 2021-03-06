---
title: homebrew
author: Zodea
author_url: https://github.com/zodea
tags: ["homebrew", "mac", "git-svn"]
date: 2021-08-15
slug: homebrew
---

# homebrew

## 安装

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

使用上面的命令直接获取homebrew安装macOS的神器

安装时会遇到curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused的错误，可以使用下面的命令关闭本地的代理

```shell
git config --global --unset http.proxy
```

如果还是不行，则保存下面的文件，并执行

> ```ruby
> #!/usr/bin/ruby
>
> STDERR.print <<EOS
> Warning: The Ruby Homebrew installer is now deprecated and has been rewritten in
> Bash. Please migrate to the following command:
>   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
>
> EOS
>
> Kernel.exec "/bin/bash", "-c", '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
> ```

```shell
ruby brew_install.rb
```

<!--truncate-->

## 下载
```shell
# 可以获取当前想下载的工具的信息
brew info <package | software>
# 直接下载一个一个依赖
brew install <package>
# 下载一个软件
brew install --cask <software>
```

https://formulae.brew.sh/ 可以在此查看所有可安装的包

### 更新
使用 brew install mas 安装可更新 `App Store` 的依赖
> echo 'alias dayup="defaults write com.apple.dock ResetLaunchPad -bool true && killall Dock && brew update && brew upgrade && brew cu -a -f -y && mas upgrade"' >> ${ZDOTDIR:-$HOME}/.zshrc

可以使用该命令全局添加一个 `dayup` 的更新命令，每次会将brew和App Store处下载的软件进行更新。但是会**重置app显示的位置**

## 删除

```shell
# 删除一个包
brew uninstall <package>
# 删除所有未使用的依赖
brew autoremove
# 清除旧版本的依赖及其缓存
brew cleanup -s && \rm -rf "$(brew --cache)"
```





## 关于git-svn

1. 首先安装git和svn，不需要安装perl，使用自带的即可

   > brew install git subversion

2. 使用 git svn --version 检查是否可以使用

   如果出现 Can't locate SVN/Core.pm in @INC 的问题，如下

   ```
   Can't locate SVN/Core.pm in @INC (you may need to install the SVN::Core module) (@INC contains: /usr/local/Cellar/git/2.32.0/share/perl5 /Applications/Xcode.app/Contents/Developer/Library/Perl/5.30/darwin-thread-multi-2level /Library/Developer/CommandLineTools/Library/Perl/5.30/darwin-thread-multi-2level /Library/Perl/5.30/darwin-thread-multi-2level /Library/Perl/5.30 /Network/Library/Perl/5.30/darwin-thread-multi-2level /Network/Library/Perl/5.30 /Library/Perl/Updates/5.30.2 /System/Library/Perl/5.30/darwin-thread-multi-2level /System/Library/Perl/5.30 /System/Library/Perl/Extras/5.30/darwin-thread-multi-2level /System/Library/Perl/Extras/5.30) at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN/Utils.pm line 6.
   BEGIN failed--compilation aborted at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN/Utils.pm line 6.
   Compilation failed in require at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN.pm line 25.
   BEGIN failed--compilation aborted at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN.pm line 32.
   Compilation failed in require at /usr/local/Cellar/git/2.32.0/libexec/git-core/git-svn line 23.
   BEGIN failed--compilation aborted at /usr/local/Cellar/git/2.32.0/libexec/git-core/git-svn line 23.
   ```

   可以通过检测各依赖的版本和安装位置做出如下的命令操作

3. 对于Catalina及Big Sur的版本可以通过下面的方式解决问题

   ```
   $ head -1 $(brew --prefix)/opt/git/libexec/git-core/git-svn
   #!/usr/bin/perl
   $ where perl
   /usr/bin/perl
   $ /usr/bin/perl --version

   This is perl 5, version 30, subversion 2 (v5.30.2) built for darwin-thread-multi-2level
   (with 2 registered patches, see perl -V for more detail)

   Copyright 1987-2020, Larry Wall

   Perl may be copied only under the terms of either the Artistic License or the
   GNU General Public License, which may be found in the Perl 5 source kit.

   Complete documentation for Perl, including FAQ lists, should be found on
   this system using "man perl" or "perldoc perl".  If you have access to the
   Internet, point your browser at http://www.perl.org/, the Perl Home Page.

   下面的命令选一个就好，第一行的只可在当前终端中可用，第二个是全局的，写入~/.zshrc中
   $ export PERL5LIB=/usr/local/lib/perl5/site_perl/5.30.2/darwin-thread-multi-2level
   $ echo "export PERL5LIB=/usr/local/lib/perl5/site_perl/5.30.2/darwin-thread-multi-2level" >> ${ZDOTDIR:-$HOME}/.zshrc
   $ git svn --version
   git-svn version 2.32.0 (svn 1.14.1)
   ```
