# GO初学者

### 5.11 初步规划 重点是语言 其他的可以先涉猎
- 计划本周熟悉go全部语法 
- 一个月+攒代码 2W行+
- 两到三周（不求甚解）熟悉数据结构和算法、操作系统、计算机网络、数据库;网络编程、系统编程
- 考虑程序员面试宝典，以及评估是否刷题

1. 程序结构
```go{4}
package main
import "fmt"
func main() {
    fmt.Println("Hello world!!")
}
```
2. 注释
    单行注释：//
    多行注释：/* 内容 */
3. go会清除没有使用的包 包被清除时 一定注意函数名是否正确
4. Printf Println  /* 后加两个空格才能换行 */  
    Println :只可以打印出字符串和变量 并换行（print的区别仅在于不换行）  
    Printf : 只可以打印出格式化的字符串或字符串类型的变量

### 5.14
1. 普通变量定义与自动变量定义 
```
    var name type = value（可以不指定类型）  
    name := value
```
2. 匿名变量  
    _   //即单一下划线 在返回多个变量中可用来表示不需要的变量  
3. 多重赋值与变量置换 
```
    a, b := 10, 20  
    a, b = b, a    //利用多重赋值交换变量  
    a = a + b  
    b = a - b  
    a = a - b   //方法2 利用加减  
```
4. 输入  
```
    Scan(&name)  
    Scanf("", &name)    //即格式化输入
```
5. 变量命名
    以字母或者下划线开头 后续跟字母 数字 下划线 不能将关键词用作变量名  
    命名法 大驼峰 小驼峰 下划线 匈牙利
6. 基础数据类型  
```
    int uint(根据编译器决定32或64位)  
    int8 int16 int32 int64  
    uint8(byte)..
    float32(精确到7位小数) float64(精确到15位小数)  
    bool string
```
7. 格式化
```    
    %d 十进制整数  
    %x, %o, %b 十六进制，八进制，二进制整数。  
    %f, %g, %e 浮点数： 3.141593 自动选择一种紧凑的方式 3.141593e+00   
    %t 布尔：true或false  
    %c 字符（rune） (Unicode码点)  
    %s 字符串  
    %q 带双引号的字符串"abc"或带单引号的字符'c'  
    %v 变量的自然形式（natural format）  
    %T 变量的类型   
    %% 字面上的百分号标志（无操作数）  
```
### 5.15
1. 字符（byte uint8 %c ''）和字符串（%s ""）
    使用Println打印变量（'a'） 只打印ASCII码 建议日常使用Printf
2. 常见转义字符 \n \t \\" \\\\（表示斜线 常用于表示硬盘地址）  
3. 'a'和"a"的区别 前者为字符常量 占一个字节 后者为字符串常量 以\0结尾 占两个字节 字符串长度为1(go中不一样 字符串占16个字节 8字节指针 8字节长度 字符占4个字节 int32)
4. =和:=  
    前者为赋值 后者为声明变量并赋值 定义变量时可以不指定类型  
5. iota(0) 常量生成器（注意若将Monday另外赋值 则再次出现itoa前 Monday后的值都会和Monday值相等）  
```go
const ( 
    Sunday = iota   //即从0开始
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday 
)
```
6. 硬编码  
    将变量用固定值替代的方法 例如var temp string = "CAN1"  
    将会导致维护的时候 不好直接修改变量 可以使用类似宏定义的方法 易于修改维护
7. 运算符(go没有前自增/自减 a++ 等同于a+=1)
```
* / % << >> & &^（按位置零 即先将右边按位取反再和左边与运算）
+ - | ^ 
== != < <= > >=
&&
||
```
8. 类型转换
    Go语言中不允许隐式转换，所有类型转换必须==显式声明（强制转换==），而且转换只能发生在两种相互兼容的类型之间  
### 5.16
1. Channels（可以理解为管道）   //TODO 后续重点  
    用于goroutine（并发核心单元）间的通信  
    创建channel  
        ch := make(chan int)    //可以发送int类型  
    <-(箭头操作符)  //表示数据流向 若流向chan则是发送 从chan流出则是从chan接收  
2. 流程控制
    一般程序都分为顺序结构 选择结构 循环结构
3. switch  
    默认自带break（如果想要继续执行下面的case 可以使用fallthrough）  
4. 循环结构 go只有for  
```
for 表达式1;表达式2;表达式3 {  
    循环体   
}  
    
```
    表达式1中不能包含var 可以使用:=定义变量  
    可以只含有表达式2或啥也不含（死循环，类似于while（1），可用break退出） 其他表达式若省略 分号不能省略
    课时1结束
5.  if a := 1; a > 0    //分号前面是初始化临时变量 和for类似
### 5.18
1. break与continue  
    break跳出循环 continue结束本次循环
2. 冗余代码
    冗余代码带来的问题是 当需求发生了变化后 需要进行多次的修改  
3. 形参格式 name type(不需var)
4. 不定参数(固定参数和不定参数同时存在时 不定参数放最后)  
    (args ...int) 格式为name ...type 可用args[i]取参数 可用len(args)得到长度 亦可使用range 返回两个字 第一个为索引 第二个为值  
5. 不定参数函数调用  
```go
func test1(args ...int) {
    test2(args[2:]...)  //只传递索引>=2的参数 反之则是<2的
} 
```
6. 带返回值函数
```go
func add(args ...int) (int, int) {
    return a, b //即参数后为返回值类型 可以为多个 调用函数时可使用匿名变量 _ 筛除不需要的返回值
}  

fun add(args ...int) (a int, b int) {
    return a, b //亦可预先给返回值命名(建议使用这种方法)
    return      //则返回值名可省略
}
```
7. 函数类型(类似于函数指针)  
```
 type name func(a int, b int) (c int, d int)    //此处name即是一个类型为形参(a int, b int) 返回值(c int, d int)的函数类型
```
8. 变量作用域  
    局部变量 全局变量 (表达式中的变量仅在表达式中有效 函数内变量仅在函数内且定义处之后有效 全局变量在定义处或声明处之后有效 C++)  
    golang 全局变量在任何地方都是能够使用的 go没有声明
9. 匿名函数(一般在内部使用)  
```
name := func() () {
    //DO 通过name去调用 此处name是函数类型        
}
```
10. 递归函数 即函数调用本身 但是一定要有一个出口 不然函数就出不来了
11. go工程管理  
    三个文件夹 src pkg bin   
    src下定义文件夹 用于存放不同的程序 即不同的包  
    ==src下一级的同一文件夹下只能定义一个包==
    一个包内可放置多个文件 同一包内函数可以互相调用  
    不同包之间调用必须导入包 注意要==导出的函数名首字母必须大==写 不导出的小写  
    import的路径是src(先浏览GOROOT 再GOPATH)下 导入src的下两级目录时 需加上路径
12. 导包格式
```go
import (
    //"包名" 或者依次import
)
```
13. 数据格式(数组 指针 切片)  
    13.1 数组var a [10]int  
    对于数组 如果定义时初始化 左边的类型可以省略
```
        初始化 定义后使用for循环初始化 定义时初始化 var a [3]int = [3]int{1, 2, 3}(亦可使用 :=)  
            可指定初始化某个 var a = [3]int{0: 1, 2:3}   //未初始化的默认为0  
            可用[...]代替具体数组个数  
            var b = [...]int{1, 2, 3} //此时左边不能再加类型
            一般直接定义成切片更好
        多维数组初始化时 每一个数组都需要用 {}  //相当之规范
```
    13.2 切片(slice) 即不指定长度 可理解为动态数组  
            可用append追加元素(append()函数，第一个参数表示向哪个切片追加数据，后面表示具体追加的数据，当追加元素后容量不足时会自动扩容，容量小于1024时 2倍扩容)  
```
        定义方法一 var a []int  //空切片  
        定义方法二 a := []int{1, 2, 3}  //定义并初始化
        定义方法三 a := make([]int, 5, 10)  //make(切片类型, 长度(已初始化的 len()计算), 容量(cap()计算)) 不指定cap时 cap()等于len()
```
```
        切片截取  
            s = a[low:high:max] //low为开始下标 high为结束下标(不包含high) max为截取的最大容量 实际可用容量为max - low(low之前的没有截取)
            注意截取操作只是将指针指向原切片 可以理解为浅拷贝 即修改截取会改变原切片值
```
```
        copy(dstSlice, srcSlice)  //切片拷贝 即将dst切片对应位置替换为src切片对应位置的值 dst长度不变
```
        ！==切片作为参数传递是引用传递== 对参数操作会改变原切片值
        
    13.3 ==字符串 package "strings"==
    
```
        Contains
        func Contains(s,substrstring) bool
        功能：字符串s中是否包含substr，返回bool值
        
        Join
        func Join (a[]string,sep string) string
        功能：字符串链接，把slice a通过sep链接起来
        
        Index
        func Index(s string, sep string) int
        功能：在字符串s中查找sep所在的位置，返回位置值，找不到返回-1
        
        Repeat
        func Repeat(s string, count int) string
        功能：重复s字符串count次，最后返回重复的字符串
        
        Replace
        func Replace(s, old, new string, n int) string
        功能：在s字符串中，把old字符串替换为new字符串，n表示替换的次数，小于0表示全部替换
        
        Split
        func Split(s string, sep string) []string
        功能：把s字符串按照sep分割，返回slice
        
        Trim
        func Trim(s string,cutset string) string
        功能：在s字符串的头部和尾部去除cutset指定的字符串
        
        Fields
        func Fields(s string) []string
        功能：去除s字符串的空格符，并且按照空格分割返回slice
```
    13.4 ==字符串转换 ”strconv” == 
```
    Format 系列函数把其他类型的转换为字符串
    FormatBool(false)	//bool转字符串
    Itoa(333)		//整型转字符串
    FormatFloat(3.14, 'f', 3, 64)	//浮点数转字符串 'f'值小数方式 3指小数位数 64指float64
    
    Parse 系列函数把字符串转换为其他类型
    ParseBool("true")		//字符串转bool
    Atoi("567")		//字符串转整型
    ParseFloat("3.14", 64)	//字符串转浮点数
    
    AppendBool(slice, true)	//bool转字符串并添加到slice中
    AppendInt(slice, 1234, 10)	//第二个数为操作数 第三个是按10进制
    AppendQuote(slice, "hellogo")	//字符串 会包含""
    
```
    13.5 Map 定义 map[keyType]valueType
```
    注意 键的类型，必须是支持==和!=操作符的类型，切片、函数以及包含切片的结构类型不行

    var mTest map[int]string
	fmt.Println(mTest) //打印结果为nil 表示空指针
	//任何类型在未初始化时都对应一个零值：布尔类型是 false ，整型是 0 ，字符串是 "" ，而指针，函数，interface，slice，channel和map的零值都是 nil  
	
	定义 map[keyType]valueType
    亦可使用make(map[int]string)定义 可以在定义时初始化 {1: "mike"}
    
    可以指定容量 但是没有意义 容量不足时会自动扩容
    map只能使用len() 返回键值对数量 不能使用cap()
    
    如果遍历输出 是无序的
    删除某个元素 delete(mapName, index)
    map和slice一样 作为参数传递时是引用传递
```
### 5.19
1. ==结构体==  
    定义  
```go
    type Student struct {
    	id int          //注意结构体成员没有var
    	name string
    	sex byte
    	age int
    	addr string
    }
```
    结构体初始化
```go
    var s1 Student = Student{1, "mike", 'm', 18, "hz"}	//顺序初始化则每个成员都需初始化
 或 s2 := Student{name: "mike", addr: "hz"}	            //指定初始化 未初始化的为0
    var s3 Student				                        //亦可定义完 不初始化 使用时再赋值
    s3.id = 123
```
    两个结构体可以使用 == 或 != 运算符进行比较，但不支持 > 或 <  
    同类型的结构体变量可以互相赋值  
    结构体是一种类型 则可以结合数组 切片 map等  
2. 指针变量  
```go
    var p *int  //定义指针变量 p 未初始化的指针是nil(表示无值)
    var i int   
    p = &i      //将i的地址赋给p
    *p          //通过指针变量p 操作内存
    
    p := new(int)   //可用new申请内存 返回地址 不需要手动释放
```
    指针作为函数参数实质依然是值传递 不会改变指针本身 但是可改变指针指向内容  
3. 结构体变量和结构体指针
```go
    p := test{3}
	q := &test{4} 		//指针和结构体变量访问结构体元素的方式一样
	fmt.Println(p.a)	//但需注意作为参数时 结构体变量是值传递 指针能修改原结构体中的元素
	fmt.Println(q.a)
```
4. go语言面向对象(封装 继承 多态)  
    GO语言中没有类概念 可将结构体比作为类 因为在结构体中可以添加属性（成员），方法（函数）  
    4.1 通过==匿名组合==实现(元素)继承 可将一个结构体类型的类型名(不设变量名)放在另一个结构体中 称为匿名字段  ==匿名字段可以是结构体指针== 但注意使用时要初始化
    初始化方式
```go
    type Person struct {
    	id int
    	name string
    	age int 
    }
    
    type Student struct {
    	Person
    	score float64
    }
    
    var s1 Student = Student{Person{101, "mike", 18}, 98.5}
    若访问id 可通过s1.id 或者s1.Person.id 若父类与子类出现同名元素 直接元素会就近访问子类本身元素
```
    4.2 可多重继承  
    4.3 基本方法创建(方法 即是可以给一个类型创建函数 类似于类中的函数)  
        即通过方法与属性来描述一个对象的操作
        方法声明类似于函数声明，但它有一个额外的参数声明部分。  
        额外部分能包含并且仅能包含一个这个方法的接受者类型的参数。  //接收者 可理解为对象
        这个唯一的接受者参数被称为方法声明的接受者参数。  
        接受者参数必须被()括住，并且声明在func和函数名称之间。 
    
    ！接收者为指针时 才能修改原变量的值
```
    给类型T和*T(指针)声明一个方法:
        T必须是定义的类型
        T的定义必须跟方法定义的在同一个包中。//所以只能给内置类型的别名声明方法 效果一样
        T不能是指针类型 //即不能给多重指针声明
        T不能是interface类型    //接口
    
    type Integer int
    func (a Integer) Test(b Integer) Integer {
	    return a + b    //调用方法 a := 3
    }                   //         a.Test(4)
```
    4.4 go不存在方法重载 不同对象的同名方法不影响  
    4.5 一个结构体变量或结构体指针 可互相(自动转化)调用方法(即指针可调用变量的方法 反之亦然)  
        即一个结构体指针(或变量)可访问结构体的元素 方法 或该结构体指针的方法  
    4.6 方法继承  
        ！子类能够使用父类的方法 重写后想调用父类的同名方法则需要 子类.父类.方法名
        ！子类能够重写父类的方法(即重新定义同名方法)
    4.7 可将方法赋值给函数指针(方法值)  //funcPoint = 对象.方法名 不推荐使用  
        方法表达式  //funcPoint = 类或类指针(接收者类型).方法名 调用时需传接收者变量名
5. 接口(可实现多态)  
### 5.20  
1. 接口  
    接口 类似==虚函数==(virtual) 把具体类型变量赋值给接口类型 则可通过接口变量调用具体类型的方法 类似于c++通过父类指针调用子类函数  
    此外空接口是任何类型的接口  
   1.1 ==多态== 通过把参数设置为接口类型 则不同的"子类"作为参数时 表现不同  
```go
type Tester interface {
	doit(a Integer) Integer //此处是接口中方法的声明 方法名(参数) 返回值
}

type Integer int

func (a Integer) doit(b Integer) Integer {  //定义方法
	return a + b
}

func whoDoIt(a Tester) Integer {    //通过接口传参以达到多态 即参数决定函数具体作用
	var temp Integer = 2            //类似于虚函数重写
	return a.doit(temp)
}
func main() {
	var a Integer = 1
	b := whoDoIt(a) //符合接口方法的类型可以作为参数 本例中a具有doit方法
	fmt.Println(b)
}
```
    1.2 面向对象  
    一定要先==分析==，定义哪些==类==，哪些==接口==，哪些==方法==  
    要有低耦合思想 功能之间尽量互不干涉  
    1.3 接口继承与转换(了解)  
    接口可以继承 像结构体一样 通过匿名字段  
    接口继承之后 子接口变量可以赋值给父接口变量(即转换 类似c++中 子类指针赋值给父类)
    1.4 空接口 类型名 interface{}  
    因为空接口没有任何实现 所以可以理解为所以类型都实现了空接口  
    即空接口类型变量可以保存任意类型(fmt.Printf的第二个参数类型即为空接口)  
2. 类型断言  
    插播一条消息 c++ ==右值引用==&&是解决临时变量作为参数传递时 提前被释放的问题 比起拷贝成本更低  
    const& 确保此引用变量在函数中使用时不能被改变(比起直接加形参 引用的成本更低一些 但是又要避免修改 则加上const)  

```go
    var c interface{} = 2   //对于空接口类型变量 可以使用类型断言判断是不是某类型
	value, ok := c.(int)    //返回值1为值 2为bool类型
```
3. 异常处理  
    3.1 error接口(适用于一般错误)  
```go
    type error interface {
        Error() string 
    }
    
    var err error = errors.New("this is a normal error")    //定义一个error接口变量
    
    func (e *errorString) Error() string {  //Error方法 实质为打印字符串
	    return e.text
    }
```
    3.2 用法举例  
```go
func Test(a, b int) (result int, err error) {
	err = nil
	if b == 0 {
		err = errors.New("it is a error")   //在出错情况下 记录错误
	} else {
		result = a / b
	}
	return
}

result, err := Test(3, 0)   //调试时可打印err值 查看错误情况
```
    3.3 panic()函数 //程序存在越界 空指针引用等致命错误时 系统调用此函数 程序崩溃并打印日志  
    3.4 延迟调用defer   //保证程序在任何情况都会调用defer后面的函数 多个defer则先进后出  
    3.5 defer配合匿名函数  
```go
    defer func() {
    	fmt.Println("匿名函数")
    } ()	
```
    3.6 defer结合recover  
```go
    defer结合recover	//适用于拦截panic 从程序崩溃情况中恢复
    
    defer func() {
    	fmt.Println(recover())	//可打印panic崩溃信息 如果程序不崩溃则返回<nil>
    }
    
    改进
    if err := recover(); err != nil {	//崩溃时才打印
    	fmt.Println(err)
    }
```
    3.7 文本文件处理  
    创建文件  
```go
    import "os"
    
    func CreateFile (path string) {
    	f, err := os.Create(path)	//返回值1为文件 2为错误信息
    	if err != nil {
    		fmt.Println("err=", err)
    		return
    	}
    	defer f.Close	//退出程序时 关闭文件
    }
    func main() {
    	var filePath = "a.txt"
    	CreateFile(filepath)
    }
```
    写入数据  
```go
    紧跟上述文件类型变量 
    n, err := f.WriteString("Hello")	//实际中可以结合fmt.Sprintf()使用
    				//返回值1为写入数据长度 2为错误信息
    Write方法
    n, err := f.Write(buf)		    	//参数为字节切片 可通过类型转化
    
    WriteAt方法(在指定位置写入数据)
    n, _ := f.Seek(0, os.SEEK_END)		//查找文末偏移量
    a, err = f.WriteAt(buf, n)	    	//从末尾偏移量开始写入内容(参数1 字节切片)
```
    打开文件  
```go
    f, err := os.OpenFile(path, os.O_APPEND, 6)
    
    OpenFile( )这个函数有三个参数
    第一个参数表示打开文件的路径
    
    第二个参数表示模式 常见的模式有
    O_RDONLY(只读模式)，O_WRONLY(只写模式),O_RDWR( 可读可写模式)，O_APPEND(追加模式)。
    
    第三个参数，表示权限，取值范围（0-7）
    0：没有任何权限
    1：执行权限(如果是可执行文件，是可以运行的)
    2：写权限
    3:写权限与执行权限
    4：读权限
    5:读权限与执行权限
    6:读权限与写权限
    7:读权限，写权限，执行权限
```
    读取文件  
```go
    读取文件的基本流程如下：
    （1）打开要读取的文件
    （2）对文件进行读取
    （3）关闭文件
    
    f, err := os.open(filePath)	//open只有读权限 区别于openFile
    if err != nil {
    	//Do
    }
    defer f.close()
    buf := make([]byte, 1024)	//new 只分配内存，而 make 只能用于 slice、map 和 channel 的初始化
    n, err1 := f.Read(buf)
    if err1 != nil {
    	//Do
    }
```
    行读取  
```go
    首先打开文件 但是为了缓和CPU和磁盘设备之间速度不匹配的问题 先将文件读到缓冲区 使用bufio包中的NewReader() ReadBytes()函数
    
    f, err := os.open(path)
    if err != nil {
    	//Do
    }
    
    r := bufio.NewReader(f)	//读到缓冲区
    //循环读取文件中的内容 直到文件末尾
    for {
    	buf, err := r.ReadByte('\n')	//遇到'n'结束 可利用此特性
    	if err == nil {
    		if err == io.EOF {	//文件结束 跳出循环
    			break
    		}
    	}
    	fmt.Println("err = ", err)
    	fmt.Printf("%s", string(buf))	//读取的值为字节切片 转化为字符串
    }
    defer f.close
```
### 5.23 file操作再探 + GoRoutine(协程)--并发编程  
1. file操作  
    文件创建
```go
    fileName := "../a.txt"  //..为上一层目录 工程中一般使用相对路径
	file, err := os.Create(fileName)    //Create默认为666权限
	if err != nil {
		fmt.Println("err :", err)
		return
	}
	fmt.Println(file)
```
    目录创建  
```go
    fmt.Println(time.Now().Format("20060102150405"))    //时间的格式很多
    
    t := time.Now().Format("20060102150405")    //尽量使用这个时间来定义格式 否则可能出错
	dirName := "../b_"
	dirName += t
	err := os.Mkdir(dirName, os.ModePerm) //ModePerm 0777
	if err != nil {
		fmt.Println("err :", err)
		return
	}
```
    删除文件 目录
```go
    os.Remove()，删除文件和空目录
	os.RemoveAll()，删除目录及目录下的文件
```
    文件拷贝(io包下Copy() 或者分别调用read write接口函数 或者ioutil.WriteFile ReadFile)  
```go
    func copyFile2(srcFile, destFile string)(int64,error) {
	file1,err:=os.Open(srcFile)
	if err != nil{
		return 0,err
	}
	file2,err:=os.OpenFile(destFile,os.O_WRONLY|os.O_CREATE,os.ModePerm)
	if err !=nil{
		return 0,err
	}
	defer file1.Close()
	defer file2.Close()

	return io.Copy(file2,file1)
}
```  
### 5.25
1. GoRoutine  
    并发与并行  
```
并发: 分时复用(多线程一般就是分时复用)
并行: 同时发生
```

   进程与线程  

```
进程: 可以理解为正在执行的程序
      CPU资源分配和调度的独立单位
      程序、数据集、进程控制块三部分组成
线程: 一个基本的CPU执行单元，也是程序执行过程中的最小单元   //轻量级进程  
      由线程ID、程序计数器、寄存器集合和堆栈共同组成  
      一个进程可以包含多个线程
```

   协程(Coroutine)  //轻量级线程  

```
协程: 通常将协程和子程序(函数)比较着理解    //子程序调用一个入口 一次返回  
优势: 协程的执行效率极高。因为子程序切换不是线程切换，而是由程序自身控制  
      因此，没有线程切换的开销，和多线程比，线程数量越多，协程的性能优势就越明显
```
2. 线程模型  
    用户级线程模型、内核级线程模型和两级线程模型
    用户级线程模型: 多个用户线程对应一个内核调度实体( Kernel Scheduling Entity,简称KSE)  
    内核级线程模型: 一个用户线程对应一个内核调度实体  
      两级线程模型: 动态对应
3. Go并发调度: G-P-M模型  
    - M结构是Machine，系统线程，它由操作系统管理的，goroutine就是跑在M之上的；M是一个很大的结构，里面维护小对象内存cache（mcache）、当前执行的goroutine、随机数发生器等等非常多的信息。
    - P结构是Processor，处理器，它的主要用途就是用来执行goroutine的，它维护了一个goroutine队列，即runqueue。Processor是让我们从N:1调度到M:N调度的重要部分。
    - G是goroutine实现的核心结构，它包含了栈，指令指针，以及其他对调度goroutine很重要的信息，例如其阻塞的channel。
4. 常用函数  
```
    - **NumCPU**：返回当前系统的 `CPU` 核数量
    - **GOMAXPROCS**：设置最大的可同时使用的 `CPU` 核数
    - **Gosched**：让当前线程让出 `cpu` 以让其它线程运行,它不会挂起当前线程，因此当前线程未来会继续执行
    - **Goexit**：退出当前 `goroutine`(但是`defer`语句会照常执行)
    - **NumGoroutine**：返回正在执行和排队的任务总数
    - **GOOS**：目标操作系统
    - **runtime.GC**:会让运行时系统进行一次强制性的垃圾收集
```
5. **临界资源:** 指并发环境中多个进程/线程/协程共享的资源  
    临界资源安全问题的解决  
    在Go语言中并不鼓励用锁保护共享状态的方式在不同的Goroutine中分享信息(以共享内存的方式去通信)。而是鼓励通过**channel**将共享状态或共享状态的变化在各个Goroutine之间传递（以通信的方式去共享内存），这样同样能像用锁一样保证在同一的时间只有一个Goroutine访问共享状态。  
6. sync包  
```
WaitGroup
一个WaitGroup的用途是等待一个goroutine的集合执行完成。
主goroutine调用了Add()方法来设置要等待的goroutine的数量。
然后，每个goroutine都会执行并且执行完成后调用Done()这个方法。
与此同时，可以使用Wait()方法来阻塞，直到所有的goroutine都执行完成。

Add()方法
用来设置到WaitGroup的计数器的值。我们可以理解为每个waitgroup中都有一个计数器
用来表示这个同步等待组中要执行的goroutin的数量。
如果计数器的数值变为0，那么就表示等待时被阻塞的goroutine都被释放(不能为负 会报错)

Done()方法
就是当WaitGroup同步等待组中的某个goroutine执行完毕后，设置这个WaitGroup的counter数值减1。

Wait()方法  
表示让当前的goroutine等待，进入阻塞状态。一直到WaitGroup的计数器为零。才能解除阻塞，
这个goroutine才能继续执行。
```
7. Mutex(互斥锁)
```
在使用互斥锁时，一定要注意：对资源操作完成后，一定要解锁，否则会出现流程执行异常，死锁等问题。
通常借助defer。锁定后，立即使用defer语句保证互斥锁及时解锁。

Lock()这个方法，锁定m。如果该锁已在使用中，则调用goroutine将阻塞，直到互斥体可用。
Unlock()方法，解锁解锁m。如果m未在要解锁的条目上解锁，则为运行时错误。
```
8. RWMutex(读写互斥锁)(提供一种读写场景下的互斥锁)
```
1. 同时只能有一个 goroutine 能够获得写锁定。
2. 同时可以有任意多个 gorouinte 获得读锁定。
3. 同时只能存在写锁定或读锁定（读和写互斥）。

RLock()方法
读锁，当有写锁时，无法加载读锁，当只有读锁或者没有锁时，可以加载读锁，读锁可以加载多个，所以适用于“读多写少”的场景。

RUnlock()方法
读锁解锁，RUnlock 撤销单次RLock调用，它对于其它同时存在的读取器则没有效果。若rw并没有为读取而锁定，调用RUnlock就会引发一个运行时错误。

Lock()方法
写锁，如果在添加写锁之前已经有其他的读锁和写锁，则Lock就会阻塞直到该锁可用，为确保该锁最终可用，已阻塞的Lock调用会从获得的锁中排除新的读取锁，即写锁权限高于读锁，有写锁时优先进行写锁定。

Unlock()方法
写锁解锁，如果没有进行写锁定，则就会引起一个运行时错误。
```
9. go关键词 创建协程(主协程结束 子协程会被回收)  
```
func hello() {
	fmt.Println("hello goroutine")

}

// 程序入口 main函数
func main() {
	go hello()
	fmt.Println("main goroutine done")
	time.Sleep(time.Second)
}
```
10. 使用sync包启动多个goroutine
```
func hello(i int) {
	defer wg.Done() // goroutine结束就登记-1
	fmt.Println("Hello Goroutine!", i)
}
func main() {

	for i := 0; i < 10; i++ {
		wg.Add(1) // 启动一个goroutine就登记+1
		go hello(i)
	}
	wg.Wait() // 等待所有登记的goroutine都结束
}
```
11. Channel通道  
    Go语言强烈建议的是使用Channel通道来实现Goroutines之间的通信(传统的方式为共享内存)  
    Go从语言层面保证同一个时间只有一个goroutine能够访问channel里面的数据，Go的做法就是使用channel来通信，通过通信来传递内存数据，使得内存数据在不同的goroutine中传递，而不是使用共享内存来通信。  
    声明与创建通道
```
//声明通道
var 通道名 chan 数据类型
//创建通道：如果通道为nil(就是不存在)，就需要先创建通道
通道名 = make(chan 数据类型)

a := make(chan int) //亦可简短声明
```
    通道使用的注意点
    对于单向通道 一般用作形参 在特定函数只需要读 或者 写 用于限制
```
Channel通道在使用的时候，有以下几个注意点：

- 1.用于goroutine，传递消息的。
- 2.通道，每个都有相关联的数据类型,
  nil chan，不能使用，类似于nil map，不能直接存储键值对
- 3.使用通道传递数据：<-
  	   chan <- data,发送数据到通道。向通道中写数据
     data <- chan,从通道中获取数据。从通道中读数据
- 4.阻塞：
  	   发送数据：chan <- data,阻塞的，直到另一条goroutine，读取数据来解除阻塞
     读取数据：data <- chan,也是阻塞的。直到另一条goroutine，写出数据解除阻塞。

- 5.本身channel就是同步的，意味着同一时间，只能有一条goroutine来操作。
- 6.channel 必须同时具有发送方和接收方 否则会造成死锁 报错
最后：通道是goroutine之间的连接，所以通道的发送和接收必须处在不同的goroutine中。
```
    通道接收 发送语法  
```
data := <- a // read from channel a  
a <- data // write to channel a

v, ok := <- a //从一个channel中读取 如果该通道打开ok为true 反之为false 此时v值为channel对应类型的零值
```
    可利用for range从一个通道获取数据
```
func main()  {
	ch1 :=make(chan int)
	go sendData(ch1)
	// for循环的for range形式可用于从通道接收值，直到它关闭为止。
	for v := range ch1{
		fmt.Println("读取数据：",v)
	}
	fmt.Println("main..over.....")
}
func sendData(ch1 chan int)  {
	for i:=0;i<10 ; i++ {
		time.Sleep(1*time.Second)
		ch1 <- i
	}
	close(ch1)//通知对方，通道关闭
}
```
    缓冲通道(带缓冲可以理解为异步模式 无缓冲则是同步)
```
ch := make(chan type, capacity) //可给通道指定容量 只有当容量满了才会阻塞
                                //需注意接收和发送对应 否则会死锁
```
    单向通道
```
单向：定向
		chan <- T,
			只支持写，
		<- chan T,
			只读

		用于参数传递(将双向通道作为参数传递给只处理通道读或写的函数)
```
    time包中的通道相关函数
```
t:= time.NewTimer(d)   //返回值是一个*timer 但是需要通过通道获取时间 <-t.C
t:= time.AfterFunc(d, f)
c:= time.After(d)

定时时间：就是那个d
触发动作：就是那个func
时间channel： 也就是t.C //定时结束后发送channel

time.NewTimer()
创建一个新的计时器，该计时器将在其通道上至少持续d之后发送当前时间

timer.Stop  //停止定时器

time.After()
func After(d Duration) <-chan Time
			返回一个通道：chan，存储的是d时间间隔后的当前时间
```
    select语句  
```
select {
    case communication clause  :
       statement(s);      
    case communication clause  :
       statement(s); 
    /* 你可以定义任意数量的 case */
    default : /* 可选 */
       statement(s);
}

说明:
- 每个case都必须是一个通信

- 所有channel表达式都会被求值

- 所有被发送的表达式都会被求值

- 如果有多个case都可以运行，select会随机公平地选出一个执行。其他不会执行。 

- 否则：

  如果有default子句，则执行该语句。

  如果没有default字句，select将阻塞，直到某个通信可以运行；Go不会重新对channel或值进行求值。
```
    Go语言的CSP模型  
    CSP 是 Communicating Sequential Process 的简称，中文可以叫做通信顺序进程  
    Golang，其实只用到了 CSP 的很小一部分，即理论中的 Process/Channel（对应到语言中的 goroutine/channel）：这两个并发原语之间没有从属关系， Process 可以订阅任意个 Channel，Channel 也并不关心是哪个 Process 在利用它进行通信；Process 围绕 Channel 进行读写，形成一套有序阻塞和可预测的并发模型。
    
    有了 channel 和 goroutine 之后，Go 的并发编程变得异常容易和安全，得以让程序员把注意力留到业务上去，实现开发效率的提升
    
    技术并不是最重要的，它只是实现业务的工具。一门高效的开发语言让你把节省下来的时间，留着去做更有意义的事情，比如写写文章
12. 反射  
    在计算机科学中，反射是指计算机程序在运行时（Run time）可以访问、检测和修改它本身状态或行为的一种能力  
    常见场景:  
        a. 函数参数类型不确定时  
        b. 根据某些条件决定调用哪个函数  
    反射弊端:  
        a. 影响代码可读性
        b. 影响运行效率  
        c. 编译器可能无法识别反射代码的错误  

    反射就是用来检测存储在接口变量内部(值value；类型concrete type) pair对的一种机制  
```
    func ValueOf(i interface{}) Value {...}
    func TypeOf(i interface{}) Type {...}
    reflect.TypeOf()是获取pair中的type，reflect.ValueOf()获取pair中的value
```
    反射 API 的分类总结如下:  
```
从实例到 Value
func ValueOf(i interface {}) Value

从实例到 Type
func TypeOf(i interface{}) Type

从 Type 到 Value(这个Type必须是通过reflect得到的)
//New 返回的是一个 Value，该 Value 的 type 为 PtrTo(typ)，即 Value 的 Type 是指向 typ 的指针类型
func New(typ Type) Value
//Zero 返回的是一个 typ 类型的零值，注意返回的 Value 不能寻址，位不可改变
func Zero(typ Type) Value

从 Value 到 Type
func (v Value) Type() Type

从Value 到 实例  
//该方法最通用，用来将 Value 转换为空接口，该空接口内部存放具体类型实例
//可以使用接口类型查询(一种是断言 一种是switch结合.(type))去还原为具体的类型
func (v Value) Interface() （i interface{})

//Value 自身也提供丰富的方法，直接将 Value 转换为简单类型实例，如果类型不匹配，则直接引起 panic
func (v Value) Bool () bool
func (v Value) Float() float64
func (v Value) Int() int64
func (v Value) Uint() uint64

从 Value 的指针到值
//如果 v 类型是接口，则 Elem() 返回接口绑定的实例的 Value，如果 v 类型是指针，则返回指针指向的值的 Value，否则引起 panic
func (v Value) Elem() Value
//如果 v 是指针，则返回指针指向的值的 Value，否则返回 v 自身，该函数不会引起 panic
func Indirect(v Value) Value

Type 指针和值的相互转换(就是从*Type到Type)
//t 必须是 Array、Chan、Map、Ptr、Slice，否则会引起 panic
//Elem 返回的是其内部元素的 Type
t.Elem() Type

//PtrTo 返回的是指向 t 的指针类型 Type(就是从Type到*Type)
func PtrTo(t Type) Type

 Value 值的可修改性
 //通过 CanSet 判断是否能修改
func (v Value ) CanSet() bool
//通过 Set 进行修改
func (v Value ) Set(x Value)
 
反射三大定律  
1. Reflection goes from interface value to reflection object.
2. Reflection goes from reflection object to interface value.
3. To modify a reflection object, the value must be settable.   //即想要修改一个反射对象 其对应的值必须是可修改的 因为反射对象本身存储了原变量本身
 

获取未知类型的interface的具体变量及其类型的步骤为：
1. 先获取interface的reflect.Type，然后通过NumField进行遍历
2. 再通过reflect.Type的Field获取其Field
3. 最后通过Field的Interface()得到对应的value

获取未知类型的interface的所属方法（函数）的步骤为：
先获取interface的reflect.Type，然后通过NumMethod进行遍历
2. 再分别通过reflect.Type的Method获取对应的真实的方法（函数）
3. 最后对结果取其Name和Type得知具体的方法名
4. 也就是说反射可以将“反射类型对象”再重新转换为“接口类型变量”
5. struct 或者 struct 的嵌套都是一样的判断处理方式

空接口是没有任何方法的 如果函数参数为空接口类型 即可接收任意类型参数
通过反射可以获取变量的方法并调用    //通过反射调用方法或者函数 参数是reflect.Value的切片 如果是无参则传nil或者空切片
1. 要通过反射来调用起对应的方法，必须要先通过reflect.ValueOf(interface)来获取到reflect.Value，得到“反射类型对象”后才能做下一步处理
2. reflect.Value.MethodByName这个MethodByName，需要指定准确真实的方法名字，如果错误将直接panic，MethodByName返回一个函数值对应的reflect.Value方法的名字。
3. []reflect.Value，这个是最终需要调用的方法的参数，可以没有或者一个或者多个，根据实际参数来定。
4. reflect.Value的 Call 这个方法，这个方法将最终调用真实的方法，参数务必保持一致，如果reflect.Value.Kind不是一个方法，那么将直接panic。
5. 本来可以用对象访问方法直接调用的，但是如果要通过反射，那么首先要将方法注册，也就是MethodByName，然后通过反射调用methodValue.Call

通过反射 调用函数
可通过ValueOf()来获取函数的反射对象，可以判断它的Kind，是一个func，那么就可以执行Call()进行函数的调用
```
### 5.26 
1. 网络编程  
    OSI七层模型(4层 5层)  
    a.应用层:  应用层  
               表示层  
               会话层  
    b.传输层:  传输层  
    c.网络层:  网络层  
    d.网络接口层: 数据链路层    
    	          物理层  
    
    物理层：将电脑连接起来的物理手段 双绞线 光纤 无线电波等 负责传输 0 1 的电信号(比特 bit)  
    数据链路层：确定了物理层传输的0和1的分组方式及代表的意义 组装成帧(Frame 帧头 + 数据 Ethernet协议)  
    网络层：负责数据包从源到目标的传递和网际互连(点到点 包Packet IP协议 标头 数据 MAC地址是网卡地址)  
    传输层：提供端口到端口的传输（端到端 port 主要协议 UDP TCP(可靠性好))  
    会话层：建立、管理和终止会话（会话协议数据单元SPDU）  
    表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）  
    应用层：允许访问OSI环境的手段（应用协议数据单元APDU)    
    
    应用层的作用就是规定应用程序使用的数据格式，TCP之上常见的Email、HTTP、FTP等协议   
    至上而下 HTTP数据->TCP+HTTP->IP+TCP+HTTP->以太网+IP+TCP+HTTP  
2. socket编程  
    Socket又称“套接字”，应用程序通常通过“套接字”向网络发出请求或者应答网络请求  
    常用的Socket类型有两种：流式Socket和数据报式Socket，流式是一种面向连接的Socket，针对于面向连接的TCP服务应用，数据报式Socket是一种无连接的Socket，针对于无连接的UDP服务应用  
    
    TCP：比较靠谱，面向连接，比较慢  
    UDP：不是太靠谱，比较快(直播一般用UDP)  
    
    Socket可以理解为TCP/IP网络的API，可以用它们来开发TCP/IP网络上的应用程序    
    Socket是应用层与TCP/IP协议族通信的中间软件抽象层，它把复杂的TCP/IP协议族隐藏在Socket后面，对用户来说只需要调用Socket规定的相关函数，让Socket去组织符合指定的协议数据然后进行通信。   
3.TCP编程  
    TCP服务端程序处理流程及代码
```
1.监听端口
2.接收客户端请求建立链接
3.创建goroutine处理链接。
    
package main

import (
	"bufio"
	"fmt"
	"net"
)

// 处理函数
func process(conn net.Conn) {
	defer conn.Close() // 关闭连接
	for {
		reader := bufio.NewReader(conn)
		var buf [128]byte
		n, err := reader.Read(buf[:]) // 读取数据
		if err != nil {
			fmt.Println("read from client failed, err:", err)
			break
		}
		recvStr := string(buf[:n])
		fmt.Println("收到client端发来的数据：", recvStr)
		conn.Write([]byte(recvStr)) // 发送数据
	}
}

func main() {
	listen, err := net.Listen("tcp", "127.0.0.1:11111") //监听
	if err != nil {
		fmt.Println("listen failed, err:", err)
		return
	}
	for {
		conn, err := listen.Accept() // 建立连接
		if err != nil {
			fmt.Println("accept failed, err:", err)
			continue
		}
		go process(conn) // 启动一个goroutine处理连接
	}
}
```
    TCP客户端程序处理流程及代码
```
1.建立与服务端的链接
2.进行数据收发
3.关闭链接

package main

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"strings"
)

// 客户端
func main() {
	conn, err := net.Dial("tcp", "127.0.0.1:11111")
	if err != nil {
		fmt.Println("err :", err)
		return
	}
	defer conn.Close() // 关闭连接
	inputReader := bufio.NewReader(os.Stdin)
	for {
		input, _ := inputReader.ReadString('\n') // 读取用户输入
		//inputInfo := strings.Trim(input, "\r\n")	//如果发送空消息 程序就会卡死 因为去除了\r\n 但不去除服务端接收到的数据就会包含\r\n
		if strings.ToUpper(input) == "Q\r\n" { // 如果输入q就退出
			return
		}
		_, err = conn.Write([]byte(input)) // 发送数据
		if err != nil {
			return
		}
		buf := [512]byte{}
		n, err := conn.Read(buf[:])
		if err != nil {
			fmt.Println("recv failed, err:", err)
			return
		}
		temp := string(buf[:n])
		prin := strings.Trim(temp, "\r\n")
		fmt.Println("发送的数据为", prin)
	}
}
```
4. udp编程  
    一种无连接的传输层协议，不需要建立连接就能直接进行数据发送和接收，属于不可靠的、没有时序的通信，但是UDP协议的实时性比较好，通常用于视频直播相关领域  
```
udp服务端

// UDP/server/main.go

// UDP server端
func main() {
    listen, err := net.ListenUDP("udp", &net.UDPAddr{
        IP:   net.IPv4(0, 0, 0, 0), //0.0.0.0代表监听本机所有网卡的ip地址
        Port: 30000,
    })
    if err != nil {
        fmt.Println("listen failed, err:", err)
        return
    }
    defer listen.Close()
    for {
        var data [1024]byte
        n, addr, err := listen.ReadFromUDP(data[:]) // 接收数据
        if err != nil {
            fmt.Println("read udp failed, err:", err)
            continue
        }
        fmt.Printf("data:%v addr:%v count:%v\n", string(data[:n]), addr, n)
        _, err = listen.WriteToUDP(data[:n], addr) // 发送数据
        if err != nil {
            fmt.Println("write to udp failed, err:", err)
            continue
        }
    }
}

udp客户端

// UDP 客户端
func main() {
    socket, err := net.DialUDP("udp", nil, &net.UDPAddr{
        IP:   net.IPv4(0, 0, 0, 0),
        Port: 30000,
    })
    if err != nil {
        fmt.Println("连接服务端失败，err:", err)
        return
    }
    defer socket.Close()
    sendData := []byte("Hello server")
    _, err = socket.Write(sendData) // 发送数据
    if err != nil {
        fmt.Println("发送数据失败，err:", err)
        return
    }
    data := make([]byte, 4096)
    n, remoteAddr, err := socket.ReadFromUDP(data) // 接收数据
    if err != nil {
        fmt.Println("接收数据失败，err:", err)
        return
    }
    fmt.Printf("recv:%v addr:%v count:%v\n", string(data[:n]), remoteAddr, n)
}
```
5. tcp粘包(主要分为发送端发送粘包 接收端缓存区读取不及时粘包 关键点在于如何处理这种粘包 这种情况肯定是不能完全避免的)  //明日根据代码进行测试 注意收发的次数  

a.由Nagle算法造成的发送端的粘包：Nagle算法是一种改善网络传输效率的算法。简单来说就是当我们提交一段数据给TCP发送时，TCP并不立刻发送此段数据，而是等待一小段时间看看在等待期间是否还有要发送的数据，若有则会一次把这两段数据发送出去。  
b.接收端接收不及时造成的接收端粘包：TCP会把接收到的数据存在自己的缓冲区中，然后通知应用层取数据。当应用层由于某些原因不能及时的把TCP的数据取出来，就会造成TCP缓冲区中存放了几段数据。  
```
编码解码

// socket_stick/proto/proto.go
package proto

import (
    "bufio"
    "bytes"
    "encoding/binary"
)

// Encode 将消息编码
func Encode(message string) ([]byte, error) {
    // 读取消息的长度，转换成int32类型（占4个字节）
    var length = int32(len(message))
    var pkg = new(bytes.Buffer)
    // 写入消息头
    err := binary.Write(pkg, binary.LittleEndian, length)
    if err != nil {
        return nil, err
    }
    // 写入消息实体
    err = binary.Write(pkg, binary.LittleEndian, []byte(message))
    if err != nil {
        return nil, err
    }
    return pkg.Bytes(), nil
}

// Decode 解码消息
func Decode(reader *bufio.Reader) (string, error) {
    // 读取消息的长度
    lengthByte, _ := reader.Peek(4) // 读取前4个字节的数据
    lengthBuff := bytes.NewBuffer(lengthByte)
    var length int32
    err := binary.Read(lengthBuff, binary.LittleEndian, &length)
    if err != nil {
        return "", err
    }
    // Buffered返回缓冲中现有的可读取的字节数。
    if int32(reader.Buffered()) < length+4 {
        return "", err
    }

    // 读取真正的消息数据
    pack := make([]byte, int(4+length))
    _, err = reader.Read(pack)
    if err != nil {
        return "", err
    }
    return string(pack[4:]), nil
}

服务端

// socket_stick/server2/main.go

func process(conn net.Conn) {
    defer conn.Close()
    reader := bufio.NewReader(conn)
    for {
        msg, err := proto.Decode(reader)
        if err == io.EOF {
            return
        }
        if err != nil {
            fmt.Println("decode msg failed, err:", err)
            return
        }
        fmt.Println("收到client发来的数据：", msg)
    }
}

func main() {

    listen, err := net.Listen("tcp", "127.0.0.1:30000")
    if err != nil {
        fmt.Println("listen failed, err:", err)
        return
    }
    defer listen.Close()
    for {
        conn, err := listen.Accept()
        if err != nil {
            fmt.Println("accept failed, err:", err)
            continue
        }
        go process(conn)
    }
}

客户端

// socket_stick/client2/main.go

func main() {
    conn, err := net.Dial("tcp", "127.0.0.1:30000")
    if err != nil {
        fmt.Println("dial failed, err", err)
        return
    }
    defer conn.Close()
    for i := 0; i < 20; i++ {
        msg := `Hello, Hello. How are you?`
        data, err := proto.Encode(msg)
        if err != nil {
            fmt.Println("encode msg failed, err:", err)
            return
        }
        conn.Write(data)
    }
}
```
明日阅读粘包解决代码 理解解决粘包不是防止粘包 而是正确解析粘包

### 5.27 网络编程再探
1.粘包再探  
    解码如何解决粘包  
    知识点 bufio.Reader.Peek是引用 但是不会读出数据  
           bufio.Reader.read会读出数据  
           io.EOF end of file 文件结束  
           小端(little endian) 数据在存储器中的存放顺序 高高低低 即高地址对应高字节  
           
    字节数组转化为int32(和binary.Write对应 4个字节)
```
    pack1 := make([]byte, 4)
    _, err = reader.Read(pack1)
    lenbuf := bytes.NewBuffer(pack1)
    var len int32
    err = binary.Read(lenbuf, binary.LittleEndian, &len)
```
    总结 缓存中粘包可以按照读包头 读包体依次读取  
    直到出现EOF或者错误(重点就是读取了的缓存中就不存在了)  
2. http编程  
    2.1. web工作流程  
    客户机通过TCP/IP协议建立到服务器的TCP连接(连接)  
    客户端向服务器发送HTTP协议请求包，请求服务器里的资源文档(请求)  
    服务器向客户机发送HTTP协议应答包，如果请求的资源包含有动态语言的内容，那么服务器会调用动态语言的解释引擎负责处理“动态内容”，并将处理得到的数据返回给客户端(应答)  
    客户机与服务器断开。由客户端解释HTML文档，在客户端屏幕上渲染图形结果(渲染 即数据转化为可视化结果)  
    2.2 http协议   
    超文本传输协议(HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议，它详细规定了浏览器和万维网服务器之间互相通信的规则，通过因特网传送万维网文档的数据传送协议  
    HTTP协议通常承载于TCP协议之上  
    
    服务端  
    //HandleFunc为给定的模式注册处理函数 模式即为链接的后缀 第二个参数为处理函数  
    //ListenAndServe 监听的链接-端口  
    ////Write方法 回复数据  

```
package main

import (
	"fmt"
	"net/http"
)

func main() {
	//http://127.0.0.1:8000/go
	// 单独写回调函数
	http.HandleFunc("/go", myHandler) //HandleFunc为给定的模式注册处理函数 模式即为链接的后缀 第二个参数为处理函数
	//http.HandleFunc("/ungo",myHandler2 )
	// addr：监听的地址
	// handler：回调函数
	http.ListenAndServe("127.0.0.1:8000", nil) //ListenAndServe 监听的链接-端口
}

// handler函数
func myHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.RemoteAddr, "连接成功")
	// 请求方式：GET POST DELETE PUT UPDATE
	fmt.Println("method:", r.Method)
	// /go
	fmt.Println("url:", r.URL.Path)
	fmt.Println("header:", r.Header)
	fmt.Println("body:", r.Body)
	// 回复
	w.Write([]byte("www.baidu.com"))	//Write方法 回复数据
}
```
    客户端  
    //http.Get 向链接发出请求 还有其他请求方法 详情见标准库文档  
    //defer resp.Body.Close() 程序使用完后 关闭回复主题  
    //resp.Body.Read(buf) 对应服务端的write 接收服务端消息  
    
```
package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	//resp, _ := http.Get("http://www.baidu.com")
	//fmt.Println(resp)
	resp, err := http.Get("http://127.0.0.1:8000/go") //http.Get 向链接发出请求 还有其他请求方法 详情见标准库文档
	if err != nil {
		fmt.Println("err: ", err)
		return
	}
	defer resp.Body.Close() //defer resp.Body.Close() 程序使用完后 关闭回复主题
	// 200 OK
	fmt.Println(resp.Status)
	fmt.Println(resp.Header)

	buf := make([]byte, 1024)
	for {
		// 接收服务端信息
		n, err := resp.Body.Read(buf) //resp.Body.Read(buf) 对应服务端的write 接收服务端消息
		if err != nil && err != io.EOF {
			fmt.Println(err)
			return
		} else {
			fmt.Println("读取完毕")
			res := string(buf[:n])
			fmt.Println(res)
			time.Sleep(3 * time.Second)
			//break
		}
	}
}
```
3. WebSocket编程(聊天室程序 结合了前端三件套 后续可以考虑仔细学习)  
    WebSocket是一种在单个TCP连接上进行全双工通信的协议  
    WebSocket使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据  
    在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输  
    需要安装第三方包：  
    cmd中：go get -u -v github.com/gorilla/websocket github.com/gorilla/mux  
 4. http与websocket对比  
    从根本上讲，HTTP还是半双工的协议，也就是说，在同一时刻流量只能单向流动：客户端向服务器发送请求（单向），然后服务器响应请求（单向）。  

    WebSocket是一种自然的全双工、双向、单套接字连接。使用WebSocket，一旦建立连接，服务器与客户端可以随时发送消息。与HTTP轮询不同，WebSocket只发送一次请求，服务器不需要等待来自客户端的请求。相似的，客户端可以在任何时候想服务器发送消息。相比轮询，不管是否用可用消息，每隔一段时间都发送一个请求，单一请求大大减少了延迟
### 5.28 数据库基础(千锋的教学资料)  
1. SQL必知必会  
    https://mp.weixin.qq.com/s/RMbbKrolNAAAussCnVXnhw  
### 6.1 数据库基础  
1、数据库(database): 存储数据的仓库，为了方便数据的存储和管理，将数据按照特定的规律存储在磁盘上    
2、数据库管理系统(DBMS): 使用DBMS创建和操作数据库  
3、数据库系统: 包含数据库和数据库管理系统  
4、数据库分类: 主要分为关联型(MySQL)和非关联型(Redis) 两种都要入门  
5、关联型数据库: 二维表格形式 通过对关联的表格分类、合并、连接或选取等运算来实现数据库的管理  
6、表(table)是数据库中存储数据的基本单位  
7、列(column)表中的一个字段 表由一个或多个列组成  
8、数据类型(datatype)每个列对应数据类型 限制该列存储的数据  
9、行(row)表中的一个记录 即表中的数据是按照行存储的 可以理解为行是列的数据  
10、主键(primary key)一列或一组列 值用以区分表中的行 每一行都应有标识自己的主键   
11、主键规则: 任何两行不具有相同的主键  
    每行都必须有主键  
    主键一般是不更改的  
12、SQL: 结构化查询语言(Structured Query Language)  
    SQL作用 客户端使用SQL来操作服务器    
    语法: 1、可以单行或多行书写 以分号结尾 可使用空格和缩进增加可读性 不区分大小写   
13、基本操作:  
    1、连接mysql  
    	mysql -u root -p 输入密码  
    2、查看版本  
    	select version();
    3、查看当前时间
    	select now();
    4、退出 
    	exit或quit  
    5、显示所有的数据库  
    	show databases;  
    6、创建数据库  
    	create database 数据库名 character set utf8(一般指定utf8 不要出现中文)  
    7、切换数据库  
    	use 数据库名;
    8、查看当前数据库名
    	select database();
    9、删除数据库  
    	drop database [if exists]数据库名;  
14、MySQL数据类型  
	主要分为数值 日期 字符串  
    1、数值
    	主要分为int float double decimal(小数)  
    2、日期
    	主要为date time year datatime timesamp(时间戳 格林尼治1970年至今的秒数)  
    3、字符串类型  
    	主要为char varchar(长字符串) blob(二进制文本 byte类型) text(长文本)  
    表的基本操作  
    1、查看当前数据库中的表  
    	show tables;
    2、创建表  
    	create table table_name(column_name column_type(可指定宽度) 约束 默认值, ..);  
    3、查看表结构  
    	desc 表名  
    4、查看表的创建语句  
    	show create table 表名  
    5、修改表 alter table 表名...
    	添加字段：add(列名 列类型,);  
    	修改列类型：modify 列名 列类型;
    	修改列名: change 原列名 新列名 列类型;
    	删除列：drop 列名;
    	修改表名: rename to 新表名;
    或rename table 原表名 to 新表名  
    6、删除表  
    	drop table [if exists] 表名；  
15、增删改查(CRUD) 重点是查  
    1、select * from 表名  
    2、全列插入(即每一列的数据都要添加)  
    	insert into 表名 values(val1, val2, ..);
    3、部分插入
    	insert into 表名(列1，列2，..) values(值1，值2，..); 主键和not null必须赋值 其他未赋值则为默认值  
    4、可同时插入多条数据  
    	insert into 表名 values(val1, val2, ..), (val1,val2, ..);  
    5、更新数据    
    	update 表名 set 列1=值1,列2=值2,... [where 条件]  
    	例如:   
    	update stus set sex='男',age=100 where sex is null;  	 
    	条件:  
    	条件必须是bool类型的值或者表达式(即能判断真假)    
    	运算符 =,!=,<>,>,<,>=,<=,between..and, in(...),or ,and ,not, is null，is not   null(null不能作为比较 null可以理解为0 区别于空值 不占空间)  
    6、删除数据  
    	delete from 表名 [where 条件]    
16、约束(constraint) 用于限定该列数值    
    1、默认值 default  
    2、非空约束 not null  
    3、唯一性约束 unique    
    	表示该字段所有数值不允许重复 允许空值  
    4、主键约束 primary key  
    	not null + unique  
    	用于每一个行记录的唯一标识符  
    	通常设置为int 并使其auto increment  
    5、外键约束 foreign key  
    	父表(班级表)的主键是子表(学生表)的外键  
    	即子表中的外键需要受到父表约束  
    	子表插入外键数据时，要根据父表的主键数据插入  
    	父表删除数据时，要考虑子表中是否引用该数据    
    6、外键的设置   
    	创建时 声明外键    
    	references 父表(主键);  
      	constraint classno_FK  foreign key (classno) references class(classno);  
    	或使用alter语句添加  
    	alter table student add constraint stu_classno foreign key(classno) references class(classno);  
    7、外键的级联操作(可创建时设置 亦可后续添加)    
    	on delete cascade,删除父表的时候，子表的数据直接删除，级联删除  
     	on delete set null，删除父表的时候，子表的数据置null。  
    	on delete restict(限制)，默认值，抛异常    
17、==查询和复杂查询==  
查询语法规则  
select {columns}  
  from {table|view|other select}  
  [where 查询条件]  
  [group by 分组条件]  
  [having 分组后再限定]  
  [order by 排序]	 
简单查询    
	select 列名1，列名2 from 表名   
	指定别名   
	selecet 列名 as 别名，列名 别名 from 表名(as可省略)   
	列运算   
	select检索到的字段类型若为number 则可以算术表达式 加减乘除及括号(如果该列有null 则计算后结果为null)    
	字符串拼接   
	concat(str1,str2);  
	去除重复数据	 
	distinct 字段名(distinct 字段1 字段2 多个字段时要满足同时重复)   
条件查询 根据需求过滤数据    
  	select 检索列 from 表名 where 筛选条件   
	比较运算符 = != <> > < <= >=   
	逻辑运算符  add && or || not !   
模糊查询 like关键字   
	select * from stus where name like '%张%'; //%表示任意多个字符 _表示任意一个字符   
区间查询   
	in(...)  //表示在一个离散的范围中查找  
	select * from stus where id in (1,3,4);  
	between...and...  //在一个连续的区间查找  
	select * from stus where id between 3 and 7;  
null判断 使用is null判断是否为null   
排序(将查找的数据重新排序 默认是数据库中的顺序)   
	默认为升序(asc) 降序为(desc)  
	select * from stus order by age asc;   
	多种排序约束 若age相等的情况 按照id排序  
	select * from stus order by age asc, id desc;  
聚合函数    
	sum(列) max(列) min(列) avg(列) 上述函数操作非null数值   
	count(列)  统计列中的记录数 即行数   
		count(*) 包括所有列 //推荐使用这个  
		count(1) //作用与*相同  
		count(列) 返回指定列的记录数    
		count(主键)   
分组(group by)查询   
	按照指定的列进行分组 值相同的会分在一起    
	select 列名 from 表名 group by 列名;  
	可按多列分组    
	select name, sex from stus group by name, sex; 即name和sex均相同的分在一组    
	分组后使用聚合函数    
	select sex, count(*) from stus group by sex;   
分组后限定查询 having   
	select 列名 from 表名 group by 列名 having 条件： //即二次筛选   
分页查询   
	limit(mysql专有)  限定查询结果的起始行 总行数   
	select * from 表名 limit start, count;  
内置函数   
	字符串函数   
	数学函数   
	日期时间函数   
多表查询 对有关系的多张表进行查询时 使用连接join   
	要求被合并的表中 列的类型和列数相同   
	UNION 去除重复行  
	UNION ALL 不去除重复行    
	分类   
		内连接(INNER JOIN)  查询出的所有记录都满足条件  
		外连接(LEFT JOIN与RIGHT JOIN) 作为内连接的拓展 包括不满足连接条件的记录(左外连接 右外连接 全外连接(mysql不支持))  
		自连接 将表定义别名 即把一张表看为两张 自我查询  典例 查询员工的上级名称   
	笛卡尔积(冗余数据)   
		如果两张表连接查询时 无连接条件 就会产生笛卡尔积   
子查询(语句中嵌套select语句 子查询需在()里且不能使用order by 在from后则作为表 在where后作为条件)    
总结  
	完整的select语句   
	select distinct *  
	from 表名  
	where ....  
	group by ... having ...  
	order by ...  
	limit start,count    
	执行顺序   
	from 表名  
	where ...  
	group by ...  
	having ...  
	select distinct*..  
	order by ...  
	limit start,count  
以上 mysql基础完  
### 6.2 Gin框架入门 重点  
后续考虑  
redis 基于内存的数据库 主要是键值对 用于高速读写 高并发 暂且了解到这   
==前端== ==刷题== ==项目与复习== ==准备简历== 预期==6.20==开始找工作 ==7月底==必须找到相对满意的  
1、框架安装 go get -u github.com/gin-gonic/gin(需将go设置为代理模式)  
    但是仍然不行  
    编写hello world程序查看报错 依次go get  
    google.golang.org/protobuf无法go get  
    git clone https://e.coding.net/robinqiwei/googleprotobuf.git protobuf  
2、hello world程序(localhost 127.0.0.1)  
    即监听此端口 hello world是服务器的返回  
```
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// 1.创建路由
	r := gin.Default()
	// 2.绑定路由规则，执行的函数
	// gin.Context，封装了request和response
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "hello World!")
	})
	// 3.监听端口，默认在8080
	// Run("里面不指定端口号默认为8080")
	r.Run(":8000")
}
```
3、RESTful API(Representational State Transfer)  
    REST的含义就是客户端与Web服务器之间进行交互的时候，使用HTTP协议中的4个请求方法代表不同的动作。  
```
GET用来获取资源
POST用来新建资源
PUT用来更新资源
DELETE用来删除资源
```
4、http路由(工作在网络层)  
    路由可以说是处理url和函数关系的程序吧,配置一系列的url访问规则,提供对应url访问的模板   
    gin 框架中采用的路由库是基于httprouter做的  
    httprouter是一个高性能、可扩展的HTTP路由(net/http的加强版)  
5、API参数  
    在url中包含参数 通过gin.Context解析  
```
package main

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/user/:name/:action", func(c *gin.Context) {
		name := c.Param("name")
		action := c.Param("action")
		//截取/
		action = strings.Trim(action, "/")
		c.String(http.StatusOK, name+" is "+action)
	})
	//默认为监听8080端口
	r.Run(":8000")
}
```
6、url中querystring参数(?后参数)  
```
package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/user", func(c *gin.Context) {
		//指定默认值
		//http://localhost:8080/user 才会打印出来默认的值
		name := c.DefaultQuery("name", "hovinlu")
		//若使用c.Query("name")则默认为""空字符串
		c.String(http.StatusOK, fmt.Sprintf("hello %s", name))
	})
	r.Run()
}
```
7、表单参数  
    表单传输为post请求，http常见的传输格式为四种：  
    application/json  
    application/x-www-form-urlencoded  
    application/xml  
    multipart/form-data  
    表单参数可以通过PostForm()方法获取，该方法默认解析的是x-www-form-urlencoded或from-data格式的参数  
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="http://localhost:8080/form" method="post" action="application/x-www-form-urlencoded">
        用户名：<input type="text" name="username" placeholder="请输入你的用户名">  <br> <!-- br换行  &nbsp;表示空格-->
        密&nbsp;&nbsp;&nbsp;码：<input type="password" name="userpassword" placeholder="请输入你的密码">  <br>
        <input type="submit" value="提交">
    </form>
</body>
</html>

package main

//
import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.POST("/form", func(c *gin.Context) {
		types := c.DefaultPostForm("type", "post")
		username := c.PostForm("username")
		password := c.PostForm("userpassword")
		// c.String(http.StatusOK, fmt.Sprintf("username:%s,password:%s,type:%s", username, password, types))
		c.String(http.StatusOK, fmt.Sprintf("username:%s,password:%s,type:%s", username, password, types))
	})
	r.Run()
}
```
8、单个文件上传  
    multipart/form-data格式用于文件上传  
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>上传文件示例</title>
</head>
<body>
<form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="f1">
    <input type="submit" value="上传">
</form>
</body>
</html>

func main() {
	router := gin.Default()
	// 处理multipart forms提交文件时默认的内存限制是32 MiB
	// 可以通过下面的方式修改
	// router.MaxMultipartMemory = 8 << 20  // 8 MiB
	router.POST("/upload", func(c *gin.Context) {
		// 单个文件
		file, err := c.FormFile("f1")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err.Error(),
			})
			return
		}

		log.Println(file.Filename)
		dst := fmt.Sprintf("C:/tmp/%s", file.Filename)
		// 上传文件到指定的目录 若不指定目录则会存在exe所在目录
		c.SaveUploadedFile(file, dst)
		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf("'%s' uploaded!", file.Filename),
		})
	})
	router.Run()
}
```
9、多个文件上传  
    前端部分增加关键字 后端部分for遍历处理files    
```
<input type="file" name="files" multiple> <!--增加关键字multiple-->

func main() {
	router := gin.Default()
	// 处理multipart forms提交文件时默认的内存限制是32 MiB
	// 可以通过下面的方式修改
	// router.MaxMultipartMemory = 8 << 20  // 8 MiB
	router.POST("/upload", func(c *gin.Context) {
		// Multipart form
		form, _ := c.MultipartForm()
		files := form.File["file"]

		for index, file := range files {
			log.Println(file.Filename)
			dst := fmt.Sprintf("C:/tmp/%s_%d", file.Filename, index)
			// 上传文件到指定的目录
			c.SaveUploadedFile(file, dst)
		}
		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf("%d files uploaded!", len(files)),
		})
	})
	router.Run()
}
```
10、routes group  
    管理一些相同的url  
    我们可以将拥有共同URL前缀的路由划分为一个路由组。习惯性一对{}包裹同组的路由，这只是为了看着清晰，你用不用{}包裹功能上没什么区别  
    路由组支持嵌套  
```
func main() {
	r := gin.Default()
	userGroup := r.Group("/user")
	{
		userGroup.GET("/index", func(c *gin.Context) {...})
		userGroup.GET("/login", func(c *gin.Context) {...})
		userGroup.POST("/login", func(c *gin.Context) {...})

	}
	shopGroup := r.Group("/shop")
	{
		shopGroup.GET("/index", func(c *gin.Context) {...})
		shopGroup.GET("/cart", func(c *gin.Context) {...})
		shopGroup.POST("/checkout", func(c *gin.Context) {...})
	}
	r.Run()
}
```
11、路由原理  
    基本原理就是构造一个路由地址的前缀树  
12、路由拆分与注册(详见枯藤网站)  
    主要是针对业务量提升 分别创建路由文件 通过总路由文件注册  
13、参数绑定  
    基于请求的Content-Type识别请求数据类型并利用反射机制自动提取请求中QueryString、form表单、JSON、XML等参数到结构体中。  
    下面的示例代码演示了.ShouldBind()强大的功能，它能够基于请求自动提取JSON、form表单和QueryString类型的数据，并把值绑定到指定的结构体对象  
    顺序  
    如果是 GET 请求，只使用 Form 绑定引擎（query）。  
    如果是 POST 请求，首先检查 content-type 是否为 JSON 或 XML，然后再使用 Form（form-data） 
    可用.ShouldBindJSON() .ShouldBindUri()..具体解析  
```
// Binding from JSON
type Login struct {
	User     string `form:"user" json:"user" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

func main() {
	router := gin.Default()

	// 绑定JSON的示例 ({"user": "q1mi", "password": "123456"})
	router.POST("/loginJSON", func(c *gin.Context) {
		var login Login

		if err := c.ShouldBind(&login); err == nil {
			fmt.Printf("login info:%#v\n", login)
			c.JSON(http.StatusOK, gin.H{
				"user":     login.User,
				"password": login.Password,
			})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
	})

	// 绑定form表单示例 (user=q1mi&password=123456)
	router.POST("/loginForm", func(c *gin.Context) {
		var login Login
		// ShouldBind()会根据请求的Content-Type自行选择绑定器
		if err := c.ShouldBind(&login); err == nil {
			c.JSON(http.StatusOK, gin.H{
				"user":     login.User,
				"password": login.Password,
			})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
	})

	// 绑定QueryString示例 (/loginQuery?user=q1mi&password=123456)
	router.GET("/loginForm", func(c *gin.Context) {
		var login Login
		// ShouldBind()会根据请求的Content-Type自行选择绑定器
		if err := c.ShouldBind(&login); err == nil {
			c.JSON(http.StatusOK, gin.H{
				"user":     login.User,
				"password": login.Password,
			})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
	})

	// Listen and serve on 0.0.0.0:8080
	router.Run(":8080")
}
```
14、重定向  
```
http重定向
r.GET("/test", func(c *gin.Context) {
	c.Redirect(http.StatusMovedPermanently, "http://www.sogo.com/")
})

路由重定向  
r.GET("/test", func(c *gin.Context) {
    // 指定重定向的URL
    c.Request.URL.Path = "/test2"
    r.HandleContext(c)
})
r.GET("/test2", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{"hello": "world"})
})
```
15、Gin渲染(可以理解为显示数据) 详见李文周  
    HTML渲染  
    JSON渲染  
    XML渲染
16、同步异步  
    goroutine机制可以方便地实现异步处理  
    另外，在启动新的goroutine时，不应该使用原始上下文，必须使用它的只读副本  
```
package main

import (
    "log"
    "time"

    "github.com/gin-gonic/gin"
)

func main() {
    // 1.创建路由
    // 默认使用了2个中间件Logger(), Recovery()
    r := gin.Default()
    // 1.异步
    r.GET("/long_async", func(c *gin.Context) {
        // 需要搞一个副本
        copyContext := c.Copy()
        // 异步处理
        go func() {
            time.Sleep(3 * time.Second)
            log.Println("异步执行：" + copyContext.Request.URL.Path)
        }()
    })
    // 2.同步
    r.GET("/long_sync", func(c *gin.Context) {
        time.Sleep(3 * time.Second)
        log.Println("同步执行：" + c.Request.URL.Path)
    })

    r.Run(":8000")
}
```
17、多服务  
    可以在多个端口启动服务  
```
package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/sync/errgroup"
)

var (
	g errgroup.Group
)

func router01() http.Handler {
	e := gin.New()
	e.Use(gin.Recovery())
	e.GET("/", func(c *gin.Context) {
		c.JSON(
			http.StatusOK,
			gin.H{
				"code":  http.StatusOK,
				"error": "Welcome server 01",
			},
		)
	})

	return e
}

func router02() http.Handler {
	e := gin.New()
	e.Use(gin.Recovery())
	e.GET("/", func(c *gin.Context) {
		c.JSON(
			http.StatusOK,
			gin.H{
				"code":  http.StatusOK,
				"error": "Welcome server 02",
			},
		)
	})

	return e
}

func main() {
	server01 := &http.Server{
		Addr:         ":8080",
		Handler:      router01(),
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	server02 := &http.Server{
		Addr:         ":8081",
		Handler:      router02(),
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
   // 借助errgroup.Group或者自行开启两个goroutine分别启动两个服务
	g.Go(func() error {
		return server01.ListenAndServe()
	})

	g.Go(func() error {
		return server02.ListenAndServe()
	})

	if err := g.Wait(); err != nil {
		log.Fatal(err)
	}
}
```
18、Gin中间件  
    Gin框架允许开发者在处理请求的过程中，加入用户自己的钩子（Hook）函数。这个钩子函数就叫中间件，中间件适合处理一些公共的业务逻辑，比如登录认证、权限校验、数据分页、记录日志、耗时统计等  
    
    定义中间件  
    Gin中的中间件必须是一个gin.HandlerFunc类型  
```
// StatCost 是一个统计耗时请求耗时的中间件
func StatCost() gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		c.Set("name", "小王子") // 可以通过c.Set在请求上下文中设置值，后续的处理函数能够取到该值
		// 调用该请求的剩余处理程序
		c.Next()
		// 不调用该请求的剩余处理程序
		// c.Abort()
		// 计算耗时
		cost := time.Since(start)
		log.Println(cost)
	}
}
```
    为全局路由注册中间件  
```
func main() {
	// 新建一个没有任何默认中间件的路由
	r := gin.New()
	// 注册一个全局中间件
	r.Use(StatCost())
	
	r.GET("/test", func(c *gin.Context) {
		name := c.MustGet("name").(string) // 从上下文取值
		log.Println(name)
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello world!",
		})
	})
	r.Run()
}
```
    局部中间件  
```
// 给/test2路由单独注册中间件（可注册多个）
	r.GET("/test2", StatCost(), func(c *gin.Context) {
		name := c.MustGet("name").(string) // 从上下文取值
		log.Println(name)
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello world!",
		})
	})
```
    中间件注意事项  
    gin.Default()默认使用了Logger和Recovery中间件  
    Logger中间件将日志写入gin.DefaultWriter，即使配置了GIN_MODE=release。  
    Recovery中间件会recover任何panic。如果有panic的话，会写入500响应码。  
    如果不想使用上面两个默认的中间件，可以使用gin.New()新建一个没有任何默认中间件的路由  
    
    gin中间件中使用goroutine  
    当在中间件或handler中启动新的goroutine时，不能使用原始的上下文（c *gin.Context），必须使用其只读副本（c.Copy()）  
19、会话控制  
    Cookie  
    Cookie实际上就是服务器保存在浏览器上的一段信息。浏览器有了Cookie之后，每次向服务器发送请求时都会同时将该信息发送给服务器，服务器收到请求后，就可以根据该信息处理请求  
    Cookie由服务器创建，并发送给浏览器，最终由浏览器保存  
    Cookie缺点  
    不安全，明文  
    增加带宽消耗  
    可以被禁用  
    cookie有上限  
    
    Sessions  
    一般考虑安全的数据用session 反之用cookie
    cookie数据存放在客户的浏览器上，session数据放在服务器上  
    当访问服务器否个网页的时候，会在服务器端的内存里开辟一块内存，这块内存就叫做session，而这个内存是跟浏览器关联在一起的。这个浏览器指的是浏览器窗口，或者是浏览器的子窗口，意思就是，只允许当前这个session对应的浏览器访问，就算是在同一个机器上新启的浏览器也是无法访问的  
### 6.3 前端入门 html css js
    后续刷题(剑指offer 程序员面试宝典(c++) go语言面试宝典) 项目与复习   
    go语言面试 
        https://blog.csdn.net/caoshiminYQS/article/details/100415466  
        https://goquiz.github.io/  
        https://studygolang.com/articles/17796  
    github面试题汇总  
        https://github.com/0voice/interview_internal_reference#9  
1、html css js快速入门(百度 + 菜鸟教程) 一天时间  ==完成==   
### 6.4 先刷题(剑指offer刷完) 然后重点考虑1到2个项目 再刷面试题目和宝典(重点是数据结构部分)(后期) 最后进行一遍汇总复习    
 
### 6.19 开始复习 从基础内容开始 复习到网络编程相关的时候做博客项目 最后看面试题和宝典  
#### 枯藤网站有面试题目  
1、正式开始复习 今日复习到394行  
2、枯藤的面试题 到第二题完

### 6.21 
1、枯藤面试题到第十天  
2、950行  

### 6.22 今日目标把文档复习完 第二天专注小项目 第三天简历  
1、http 超文本传输协议，是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统   
2、TCP三次握手四次挥手    
    三次 发送同步包 响应并发同步包 再响应(如果两次可能会存在A失效了 但是还占用连接资源的情况)  
    四次挥手 发送结束包 响应 数据发送完后 发送结束包 响应 结束(确保数据收发完整)  
3、本周重点 博客 + 爬虫 先学beego  
```
MVC架构
1.1.1 项目配置：conf
1.1.2 控制器：controllers
1.1.3 数据层：models
1.1.4 路由层：routers
1.1.5 静态资源目录：static
1.1.6 视图模板：views
```
4、beego程序流程分析  
```
init方法分析完毕后，程序会继续往下执行，就到了main函数，在main函数中执行：beego.Run()代码。分析一下Run代码的逻辑，在Run方法内部，主要做了几件事：
* 解析配置文件，也就是我们的app.conf文件，比如端口，应用名称等信息。

* 检查是否开启session，如果开启session，就会初始化一个session对象。

* 是否编译模板，beego框架会在项目启动的时候根据配置把views目录下的所有模板进行预编译，然后存放在map中，这样可以有效的提高模板运行的效率，不需要进行多次编译。

* 监听服务端口。根据app.conf文件中的端口配置，启动监听。
```
5、beego路由设置  
```
**基础路由**，**固定路由**，**正则路由**和**自动路由**
```
6、beego连接数据库  
```
//dbConn := user + ":" + pwd + "@tcp(" + host + ":" + port + ")/" + dbname + "?charset=utf8"
//我丢 需要启动服务(管理员模式命令行 net start mysql)
dbConn := "root:mysql@tcp(127.0.0.1:3306)/myblogweb?charset=utf8"
```
以上 今日完成了beego的入门 和 beego连接数据库 以及 粗略过了一遍文档 在后续博客项目中加深

### 6.23 今日尽量把博客项目做完
1、select * from users(表名) //显示表中所有记录  
2、go操作mysql  
```
关于插入数据的时候占位符是通过问号：？

插入数据的后可以通过LastInsertId可以获取插入数据的id

通过RowsAffected可以获取受影响的行数

执行sql语句是通过exec
```
3、接触了部分前端知识  

### 6.24 博客还得慢慢来 加油
1、MySQL更新字段值  
```
update 表名 set 字段名 = '要修改的值' where 条件;
例子：
update student set name = '张三' where sno='2012001' ;
```
2、beego配置文件   
文件中 driverName = mysql  
取配置 conf.string("字段")  
3、包的特殊引入方式  
```
1. 点操作   有时候会看到如下的方式导入包     import( . “fmt” ) 

这个点操作的含义就是这个包导入之后在你调用这个包的函数时，你可以省略前缀的包名，也就是前面你调用的fmt.Println(“hello world”)  可以省略的写成Println(“hello world”)

2. 别名操作   别名操作顾名思义可以把包命名成另一个用起来容易记忆的名字

   import( f “fmt” )   别名操作调用包函数时前缀变成了重命名的前缀，即f.Println(“hello world”)

3.  _操作   这个操作经常是让很多人费解的一个操作符，请看下面这个import

  import ( “database/sql” _ “github.com/ziutek/mymysql/godrv” ) 
```
4、jQuery Validate  
表单验证 #是根据id找元素 .是根据class找元素  
rules 规则  
messages 提示  
$(form).ajaxSubmit 异步交互 提交表格  
data是返回数据 和 status是交互状态是否成功  
5、前端页面存在兼容性问题 遇到问题尝试更换浏览器  
6、MySQL删除记录  
```
delete from 表名 [where 条件]
```
7、今日收获还是挺大的 明日继续

### 6.25 博客明日弄完 总结 开启爬虫 简历  
1、mysql插入记录  
```
全列插入(即每一列的数据都要添加)  
    	insert into 表名 values(val1, val2, ..);
部分插入
    	insert into 表名(列1，列2，..) values(值1，值2，..); 主键和not null必须赋值
```
2、页面文章渲染有问题 但是能从数据库读出 log如下  
```
loginuser----> <nil>
---------->page 0
IsLogin: false <nil>
tag--> 记录第一次
tag--> 111111111111111
```

### 6.26  
1、markdown转html包很有用  
    即规定了文章的格式markdown 并提高可读性  
    
### 6.27 今天一定把博客弄完  
1、博客弄完之后  
    聊天室小案例  
    爬虫小案例  
2、url中:后跟参数  
    例:id 通过":id"可读取此参数 这个:id是key 通过key获取字符串  
    区别于?后跟的参数 ?后直接跟参数名=参数值  

### 6.28  
1、常用数据结构与算法  
    栈 队列 二叉树 链表 数组 字符串  
    冒泡 快排 二分查找 动态规划 深度优先 迭代(具体见刷题记录)  
2、简历上写的内容一定要熟悉(一边投简历 一边继续熟悉)








