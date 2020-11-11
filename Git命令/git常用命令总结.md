[TOC]

# git 常用命令总结

> **问题1:** 
>
> 如果向远程`github` 推送代码时, 你的`github` 每次都提示输入用户名密码, 不能记住你的用户名密码时, 输入一下命令解决该问题.
>
> ```js
> git config --global credential.helper store
> ```
>
> **问题2:**  
>
> ==git 提交时有时候提示 换行符的问题==
>
> ```js
> 
> ```

## git 用户名的查看和设置

### git config 用户名修改命令

> 刚安装完`git` 的时候, 我们通常要配置一下`git` 的用户名和邮箱, 右键`Git Bash Here`,在`Linux` 命令行窗口执行如下相关命令
>
> ```js
> #1. 查看用户名 和 邮箱
> git config user.name    // 查看 git配置的用户名
> git config user.email   // 查看 git配置的邮箱
> 
> #2. 设置git的用户名 和 邮箱
> git config --global user.name 你的用户名
> 
> git config --global user.email 你的邮箱
> 
> ```

## ==git 分支相关==

> **初始化`git`仓库的时候, 默认有一个 `master` 仓库.** 

1.  **查看分支** 

   > ```js
   > #1.查看当前仓库有哪些分支: git branch
   > 	git branch	// 查看当前仓库有哪些分支
   > ```

2. **`git` 创建新分支** 

   > :triangular_flag_on_post:  **注意:**  不要在 `master` 分支没有任何内容的时候创建切换分支, 否则`master` 分支就会丢失, 你再也无法切换回 `master` , 会提示: `error: pathspec 'master' did not match any file(s) known to git.`  
   >
   > ==在执行创建分支的时候, 会自动把当前分支的所有内容,完全拷贝一份到 新的分支里.== 
   >
   > ```js
   > #1. 创建dev新分支的两个命令
   > 	git branch dev	 // 创建dev分支,但不切换, 还在当前分支, 需手动 checkout 到 dev
   > 	git checkout -b dev		// 创建一个dev分支, 并切换到dev分支
   >     
   > #2. 切换分支
   > 	git checkout master	// 切换回master 分支
   >     git checkout dev	// 切换到dev分支
   > ```

3.  **删除分支:** 

   ```js
   #1. 删除分支的命令
   	git branch -d dev
       
   #2. 删除远程分支
   	git remote --delete dev
   ```

4. **合并分支:** 

   ```js
   #1 合并dev 分支到当前 执行命令所在的 分支
   	git merge dev
   ```

## ==git和 github== 

> **克隆远程仓库:** 
>
> ```js
> #1.克隆远程仓库, 自动关联
> 	git clone https://www.xxxxxxx
> #2. 克隆远程仓库, 指定分支
> 	git clone -b dev https://github.com/Genejob93/practice.git
> ```

### 本地已有仓库和远程仓库关联

> ==通常情况下,我们直接`git clone` 远程仓库的时候会自动关联, 所以一般不这样操作本地仓库和远程仓库来关联,因为比较麻烦== 

```js
#1. 将本地仓库和远程仓库关联
	git remote add origin https://xxx你的远程仓库地址.com

#2. 关联远程仓库成功后, 把本地仓库内容推送到远程仓库
	git push origin master	// 把本地内容推送到远程 master 分支.
    
#3. 根据远程 dev分支 创建本地dev分支
	git checkout -b dev origin/dev // 克隆仓库后切换到dev分支

```

### 关联远程仓库可能遇到的问题

> ==可能会遇到的问题:==  
>
> ```js
> #1 注意问题:
>   // 假设你本地已有仓库, 并且仓库里已有了内容, 远程也有仓库, 并且远程仓库里也有了内容, 当你执行将本地仓库和远程仓库关联的时候, 你再 git push origin master 到远程仓库的时候会报错, 
>  # 这是因为 本地仓库和远程仓库有不同的 提交历史, 而冲突了的原因.
>  
> #2. 解决办法
>   -1. 先拉取一下远程分支的内容, 并且加上参数: --allow-unrelated-histories 
> 	 git pull origin master --allow-unrelated-histories
> 	
> 	执行上述命令时, 会弹出一个 vim 编辑框, 提示你输入 合并远程分支的描述.
>     - 按下 Esc 键, 退出插入模式
>     - 输入 :wq   回车保存并退出即可.
>     
>   -2. 然后再向远程推送内容就可以推送成功了
>   	git push origin master
>   	 
> ```

### 远程添加dev分支

> **远程添加dev分支** 
>
> ```js
> 如果你想给远程添加一个 dev 分支, 你可以不必直接在远程添加 dev分支, 然后再和本地dev分支关联.
>  // 你可以直接在本地新建一个 dev分支, 编辑好内容后, 直接执行向远程dev分支推送的命令, 如果远程没有dev分支的话, 远程仓库会自动创建一个 dev分支, 并把本地dev分支内容推送上去.即:
> 	git push origin dev  // 如果远程没有dev分支, 会自动创建
> ```

## ==分支操作的几个问题== 

1. **问题1:** 

   > 不要在刚`init` 的仓库里, 主分支还没有管理任何文件的时候创建其他新的分支, 否则会丢失`master`分支, 导致你再往`master`分支切换的时候报错,无法切换回`master`分支.会提示:   `error: pathspec 'master' did not match any file(s) known to git.` 

2.  **问题2:** 

   > 直接向远程推送 `dev` 分支的时候, 会自动在远程创建一个`dev`分支, 并把`dev` 分支的内容推送上去.

3. **问题3: 新增分支问题**  

   > ```js
   > #1. 问题1:
   > //1.假设远程有 master dev两个分支,你执行 git clone 克隆远程仓库的时候, 然后 git branch 查看克隆的仓库分支, 你只会查看到默认的master分支, 但实际上,你已经克隆下了所有远程分支, 只不过刚克隆下来查看的时候, 默认只会显示 master 分支, 但是你可以直接切换到dev分支, 再查看的时候, 你就可以查看到本地有了 master 分支和 dev分支. 问题如下:
   > #1. 第一步: git clone https://www.github.com.xxx
   > #2. 第二步: git branch 	// 只会显示 master 分支,但实际本地已经克隆下来了远程dev分支, 只不过第一次查看不到.
   > #3. 第三步: git checkout dev	// 手动切换一次到dev分支
   > #4. 第四步: git branch			// 再次查看分支时 master 和 dev 两个分支就都能显示了
   > 
   > # ----------------------------------------------- 
   > #2. 问题2
   > // 假设你已经克隆下来了远程仓库, 但是别人新增的 dev3 分支, 你想要本地获取到别人新增的 dev3 分支, 你只需要执行一下 git pull 命令拉取所有. 但是同样第一次你执行 git branch 你看不到 dev3 分支, 需要你 git checkout dev3 手动切换一下, 然后再git branch的时候, 才会显示 dev3 分支出来
   > #1. 第一步: git pull   拉取所有分支内容
   > #2. 第二步: git checkout dev3  // 手动切换到 dev3 分支
   > ```

## git 仓库相关

### 初始化本地`git`仓库并提交管理

> **初始化一个`git`仓库, 并做管理提交**  
>
> ```js
> #1. 初始化一个 git 仓库: git init
> 	git init     		// 初始化一个git仓库
> #2. 编辑文件, 将文件添加到 暂存区
> 	git add a.txt 		// 指定添加 a.txt 到暂存区
> 	git add .			// 添加所有内容到暂存区
>     git add *			// 添加所有内容到暂存区
>         
> #3. 将内容提交到本地仓库的版本儿区
>     git commit -m '你的提交信息'
> 
> #4. 查看提交日志
> 	git log   :显示从最近到最远的所有提交日志，如一次显示不完整，按下回车键继续查看，直到出现END标识，使用q退出log显示窗口。
> 
> 	git reflog  ：显示每次提交（commit）的commit id
> ```

### git 删除文件

> ```js
> # git 执行删除命令的时候, 前提是该文件已经被git管理,否则无法找到对应内容.
> 
> git rm a.txt    // 删除工作区 a.txt文件
> 
> git rm -r --cached a     // 删除a目录,前提该 a目录已被git管理.
> 
> git rm -r --cached a/2.txt //删除a目录下的2.txt文件   
> 
> git commit -m "删除a目录下的2.txt文件" 
> 
> git push
> 
> git rm  -r  xxxx   // 删除 指定目录/文件夹,前提该文件夹已被管理.
> 
> # Git 不支持删除远程仓库的目录, 所以可以在本地删除想要删除的文件之后, 通过 git add .  git commit -m, 再推送到远程的方式, 对应的把远程的目录删除.
> ```
>
> 

### git仓库三区对比

> ```js
> #1. git status 查看本地内容状态
> 	1. git status 		// 查看仓库内容状态
> #工作区: - 工作区内容未 add之前是 红色的文件显示
> #暂存区: - add 到暂存区之后, 内容是 绿色显示
> #版本区: - commit 到 版本库后, 就不再有任何文件显示
> 
> git diff 				: 比较工作区 与 暂存区
> git diff --cached 		: 比较暂存区 与 版本区
> git diff master 		: 比较版本区 与 工作区
> ```

### git 版本回退,版本穿梭,版本撤销

> ```js
> git reset --hard HEAD^    版本回退（回退一次提交）
> 
> git reset --hard Obfafd    回退到指定Obfafd的commit id版本
> 
> git reset HEAD   		用版本库中的文件去替换暂存区的全部文件。
> 
> git checkout -- x.txt    	用暂存区指定文件去替换工作区的指定文件（危险）
> 
> git checkout HEAD x.txt  用版本库中的文件替换暂存区和工作区的文件（危险）
> 
> git rm --cached x.txt 		从暂存区删除文件
> ```



# 总结命令

> ```js
> * git config --global user.name "username"  //配置用户名
> * git config --global user.email "xx@gmail.com" //配置邮箱
> * git init  //初始化生成一个本地仓库 
> * git add .   //添加到暂存区 
> * git commit –m "message"  //提交到本地仓库 
> 
> * git remote add origin url  //添加远程仓库关联
> * git remote rm  origin url  // 删除远程仓库关联
> 
> * git push origin master  //推送本地master分支到远程master分支 
> * git checkout -b dev  //创建一个dev分支并切换到dev分支 
> * git branch dev	// 创建一个 dev分支, 但不切换
> * git pull origin dev  //从远程dev分支拉取到本地dev分支
> * git push ogigin dev  //推送本地dev分支到远程dev分支
> * git clone url  //将远程仓库克隆下载到本地
> * git clone -b dev https://github.com/Genejob93/practice.git // 克隆指定 dev分支
> * git checkout -b dev origin/dev // 根据远程dev分支创建本地dev分支.
> 
> 
> # 删除远程仓库关联
> * git remote     // 先查看远程关联的仓库是什么
> * git remote rm  远程仓库别名    // 删除远程仓库关联
> ```