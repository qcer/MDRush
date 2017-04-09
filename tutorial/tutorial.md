## **Markdown语法教程**
### **一、斜体和粗体**
md语法：

	*斜体*或_斜体_
	**粗体**
	***加粗斜体***
	~~删除线~~

渲染效果：

*斜体*或_斜体_

**粗体**

***加粗斜体***

~~删除线~~

### **二、标题**
Markdown 支持两种标题的语法，类 Setext 和类 atx 形式。
类 Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题）。

#### **1、类 Setext 形式**
md语法：
	一级标题
	==

	二级标题
	--
渲染效果：
一级标题
==

二级标题
--
#### **2、类 Atx 形式**
行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶。
md语法：
	# markdown
	## markdown
	### markdown
	#### markdown
	##### markdown
	###### markdown
渲染效果：
# markdown
## markdown
### markdown
#### markdown
##### markdown
###### markdown

### **三、区块引用 Blockquotes**
md语法：
	> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
	> 
	>> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse

	> ## 这是一个标题。
	> 
	> 1.   这是第一行列表项。
	> 2.   这是第二行列表项。
	> 
	> 给出一些例子代码：
	> 
	>     return shell_exec("echo $input | $markdown_script");
渲染效果：
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> 
>> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse

> ## 这是一个标题。
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");

### **四、列表**
#### **1、无序列表**
无序列表使用星号、加号或是减号作为列表标记。
md语法：
	*   Red
	+  Green
	-   Blue
渲染效果：
*   Red
+  Green
-   Blue

#### **2、有序列表**
md语法：
	1.  Bird
	2.  McHale
	3.  Parish
渲染效果：
1.  Bird
2.  McHale
3.  Parish

### **五、代码区块**
建立代码区块只要简单地缩进 4 个空格或是 1 个制表符就可以。

md语法：

		module.exports = function (app) {
		  app.use('/', router);
		};

渲染效果：

	module.exports = function (app) {
	  app.use('/', router);
	};

### **六、分隔线**
用三个以上的星号、减号、底线来建立一个分隔线。
md语法：
	* * *

	***


	*****

	- - -

	---------------------------------------
渲染效果：
* * *

***

*****

- - -

------------------------------------

### **七、链接**
md语法实例：

	这是[知乎](https://www.zhihu.com/)的链接
渲染实例：

这是[知乎](https://www.zhihu.com/)的链接


### **八、代码高亮**
md语法：

	show me you `code`
渲染效果：


show me you `code`

### **九、插入图片**
md语法：

	![Alt text](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png "百度logo")

渲染效果：
![Alt text](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png "百度logo")