"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[866],{352:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var l=r(7462),a=r(3366),n=(r(7294),r(3905)),i=["components"],o={id:"homebrew",title:"homebrew",author:"Zodea",author_url:"https://github.com/zodea",tags:["homebrew","mac","git-svn"]},s="homebrew",p={permalink:"/2021/08/15/homebrew\u547d\u4ee4",source:"@site/blog/2021-08-15-homebrew\u547d\u4ee4.md",title:"homebrew",description:"\u5b89\u88c5",date:"2021-08-15T00:00:00.000Z",formattedDate:"August 15, 2021",tags:[{label:"homebrew",permalink:"/tags/homebrew"},{label:"mac",permalink:"/tags/mac"},{label:"git-svn",permalink:"/tags/git-svn"}],readingTime:1.97,truncated:!1},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[{value:"\u66f4\u65b0",id:"\u66f4\u65b0",children:[]}]},{value:"\u5220\u9664",id:"\u5220\u9664",children:[]},{value:"\u5173\u4e8egit-svn",id:"\u5173\u4e8egit-svn",children:[]}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,n.kt)("p",null,"\u4f7f\u7528\u4e0a\u9762\u7684\u547d\u4ee4\u76f4\u63a5\u83b7\u53d6homebrew\u5b89\u88c5macOS\u7684\u795e\u5668"),(0,n.kt)("p",null,"\u5b89\u88c5\u65f6\u4f1a\u9047\u5230curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5173\u95ed\u672c\u5730\u7684\u4ee3\u7406"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global --unset http.proxy\n")),(0,n.kt)("p",null,"\u5982\u679c\u8fd8\u662f\u4e0d\u884c\uff0c\u5219\u4fdd\u5b58\u4e0b\u9762\u7684\u6587\u4ef6\uff0c\u5e76\u6267\u884c"),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'#!/usr/bin/ruby\n\nSTDERR.print <<EOS\nWarning: The Ruby Homebrew installer is now deprecated and has been rewritten in\nBash. Please migrate to the following command:\n  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\nEOS\n\nKernel.exec "/bin/bash", "-c", \'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\'\n'))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"ruby brew_install.rb\n")),(0,n.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u53ef\u4ee5\u83b7\u53d6\u5f53\u524d\u60f3\u4e0b\u8f7d\u7684\u5de5\u5177\u7684\u4fe1\u606f\nbrew info <package | software>\n# \u76f4\u63a5\u4e0b\u8f7d\u4e00\u4e2a\u4e00\u4e2a\u4f9d\u8d56\nbrew install <package>\n# \u4e0b\u8f7d\u4e00\u4e2a\u8f6f\u4ef6\nbrew install --cask <software>\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/"},"https://formulae.brew.sh/")," \u53ef\u4ee5\u5728\u6b64\u67e5\u770b\u6240\u6709\u53ef\u5b89\u88c5\u7684\u5305"),(0,n.kt)("h3",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,n.kt)("p",null,"\u4f7f\u7528 brew install mas \u5b89\u88c5\u53ef\u66f4\u65b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"App Store")," \u7684\u4f9d\u8d56"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"echo 'alias dayup=\"defaults write com.apple.dock ResetLaunchPad -bool true && killall Dock && brew update && brew upgrade && brew cu -a -f -y && mas upgrade\"' >> ${ZDOTDIR:-$HOME}/.zshrc")),(0,n.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u8be5\u547d\u4ee4\u5168\u5c40\u6dfb\u52a0\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"dayup")," \u7684\u66f4\u65b0\u547d\u4ee4\uff0c\u6bcf\u6b21\u4f1a\u5c06brew\u548cApp Store\u5904\u4e0b\u8f7d\u7684\u8f6f\u4ef6\u8fdb\u884c\u66f4\u65b0\u3002\u4f46\u662f\u4f1a",(0,n.kt)("strong",{parentName:"p"},"\u91cd\u7f6eapp\u663e\u793a\u7684\u4f4d\u7f6e")),(0,n.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5220\u9664\u4e00\u4e2a\u5305\nbrew uninstall <package>\n# \u5220\u9664\u6240\u6709\u672a\u4f7f\u7528\u7684\u4f9d\u8d56\nbrew autoremove\n# \u6e05\u9664\u65e7\u7248\u672c\u7684\u4f9d\u8d56\u53ca\u5176\u7f13\u5b58\nbrew cleanup -s && \\rm -rf "$(brew --cache)"\n')),(0,n.kt)("h2",{id:"\u5173\u4e8egit-svn"},"\u5173\u4e8egit-svn"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9996\u5148\u5b89\u88c5git\u548csvn\uff0c\u4e0d\u9700\u8981\u5b89\u88c5perl\uff0c\u4f7f\u7528\u81ea\u5e26\u7684\u5373\u53ef"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"brew install git subversion"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 git svn --version \u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u4f7f\u7528"),(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0 Can't locate SVN/Core.pm in @INC \u7684\u95ee\u9898\uff0c\u5982\u4e0b"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Can't locate SVN/Core.pm in @INC (you may need to install the SVN::Core module) (@INC contains: /usr/local/Cellar/git/2.32.0/share/perl5 /Applications/Xcode.app/Contents/Developer/Library/Perl/5.30/darwin-thread-multi-2level /Library/Developer/CommandLineTools/Library/Perl/5.30/darwin-thread-multi-2level /Library/Perl/5.30/darwin-thread-multi-2level /Library/Perl/5.30 /Network/Library/Perl/5.30/darwin-thread-multi-2level /Network/Library/Perl/5.30 /Library/Perl/Updates/5.30.2 /System/Library/Perl/5.30/darwin-thread-multi-2level /System/Library/Perl/5.30 /System/Library/Perl/Extras/5.30/darwin-thread-multi-2level /System/Library/Perl/Extras/5.30) at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN/Utils.pm line 6.\nBEGIN failed--compilation aborted at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN/Utils.pm line 6.\nCompilation failed in require at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN.pm line 25.\nBEGIN failed--compilation aborted at /usr/local/Cellar/git/2.32.0/share/perl5/Git/SVN.pm line 32.\nCompilation failed in require at /usr/local/Cellar/git/2.32.0/libexec/git-core/git-svn line 23.\nBEGIN failed--compilation aborted at /usr/local/Cellar/git/2.32.0/libexec/git-core/git-svn line 23.\n")),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u68c0\u6d4b\u5404\u4f9d\u8d56\u7684\u7248\u672c\u548c\u5b89\u88c5\u4f4d\u7f6e\u505a\u51fa\u5982\u4e0b\u7684\u547d\u4ee4\u64cd\u4f5c")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bf9\u4e8eCatalina\u53caBig Sur\u7684\u7248\u672c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u89e3\u51b3\u95ee\u9898"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'$ head -1 $(brew --prefix)/opt/git/libexec/git-core/git-svn\n#!/usr/bin/perl\n$ where perl\n/usr/bin/perl\n$ /usr/bin/perl --version\n\nThis is perl 5, version 30, subversion 2 (v5.30.2) built for darwin-thread-multi-2level\n(with 2 registered patches, see perl -V for more detail)\n\nCopyright 1987-2020, Larry Wall\n\nPerl may be copied only under the terms of either the Artistic License or the\nGNU General Public License, which may be found in the Perl 5 source kit.\n\nComplete documentation for Perl, including FAQ lists, should be found on\nthis system using "man perl" or "perldoc perl".  If you have access to the\nInternet, point your browser at http://www.perl.org/, the Perl Home Page.\n\n\u4e0b\u9762\u7684\u547d\u4ee4\u9009\u4e00\u4e2a\u5c31\u597d\uff0c\u7b2c\u4e00\u884c\u7684\u53ea\u53ef\u5728\u5f53\u524d\u7ec8\u7aef\u4e2d\u53ef\u7528\uff0c\u7b2c\u4e8c\u4e2a\u662f\u5168\u5c40\u7684\uff0c\u5199\u5165~/.zshrc\u4e2d\n$ export PERL5LIB=/usr/local/lib/perl5/site_perl/5.30.2/darwin-thread-multi-2level\n$ echo "export PERL5LIB=/usr/local/lib/perl5/site_perl/5.30.2/darwin-thread-multi-2level" >> ${ZDOTDIR:-$HOME}/.zshrc\n$ git svn --version\ngit-svn version 2.32.0 (svn 1.14.1)\n')))))}m.isMDXComponent=!0}}]);