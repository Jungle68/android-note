Kotlin学习教程(五)
===


### 泛型   

```kotlin
class Data<T>(var t : T)
interface Data<T>
fun <T> logic(t : T){}
```


定义:  

```kotlin
class TypedClass<T>(parameter: T) {
    val value: T = parameter
}
```
这个类现在可以使用任何的类型初始化，并且参数也会使用定义的类型，我们可以这么做：
```kotlin
val t1 = TypedClass<String>("Hello World!")
val t2 = TypedClass<Int>(25)
```
但是Kotlin很简单并且缩减了模版代码，所以如果编译器能够推断参数的类型，我们甚至也就不需要去指定它：
```kotlin
val t1 = TypedClass("Hello World!")
val t2 = TypedClass(25)
val t3 = TypedClass<String?>(null)
```


##### 类型擦除 

```kotlin
class Data<T>{}

Log.d("test", Data<Int>().javaClass.name)
Log.d("test", Data<String>().javaClass.name)

// 输出
com.study.jcking.weatherkotlin.exec.Data
com.study.jcking.weatherkotlin.exec.Data
```
声明了一个泛型类`Data<T>`，并实现了两种不同类型的实例。但是在获取类名是，却发现得到了同样的结果`com.study.jcking.weatherkotlin.exec.Data`，这其实是在编译期擦除了泛型类型声明。

### 嵌套类

嵌套类顾名思义，就是嵌套在其他类中的类。而嵌套类外部的类一般被称为包装类或者外部类。
```kotlin
class Outter{
    class Nested{
        fun execute(){
            Log.d("test", "Nested -> execute")
        }
    }
}

// 调用
Outter.Nested().execute()

//输出
Nested -> execute
```
嵌套类可以直接创建实例，方式是包装类.嵌套类
`val nested : Outter.Nested()`

### 内部类   

内部类和嵌套类有些类似，不同点是内部类用关键字`inner`修饰。

```kotlin
class Outter{
    val testVal = "test"
    inner class Inner{
        fun execute(){
            Log.d("test", "Inner -> execute : can read testVal=$testVal")
        }
    }
}

// 调用
val outter = Outter()
outter.Inner().execute()

// 输出
Inner -> execute : can read testVal=test
```

内部类不能直接创建实例，需要通过外部类调用
```kotlin
val outter = Outter()
outter.Inner().execute()
```



匿名内部类

```kotlin
text.setOnClickListener(object : View.OnClickListener{
    override fun onClick(p0: View?) {
        Log.d("test", p0.string())
    }
})
```


### 枚举    

```kotlin
enum class Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY
}
```
枚举可以带参数:   

```kotlin
enum class Icon(val res: Int) {
    UP(R.drawable.ic_up),
    SEARCH(R.drawable.ic_search),
    CAST(R.drawable.ic_cast)
}

val searchIconRes = Icon.SEARCH.res
```
枚举可以通过String匹配名字来获取，我们也可以获取包含所有枚举的Array，所以我们可以遍历它。
```kotlin
val search: Icon = Icon.valueOf("SEARCH")
val iconList: Array<Icon> = Icon.values()
```
而且每一个枚举都有一些函数来获取它的名字、声明的位置：
```kotlin
val searchName: String = Icon.SEARCH.name()
val searchPosition: Int = Icon.SEARCH.ordinal()

```

### 异常    

在`Kotlin`中，所有的`Exception`都是实现了`Throwable`，含有一个`message`且未经检查。这表示我们不会强迫我们在任何地方使用`try/catch`。这与`Java`中不太一样，比如在抛出`IOException`的方法，我们需要使用`try-catch`包围代码块。但是通过检查`exception`来处理显示并不是一个好的方法。

抛出异常的方式与`Java`很类似：
```kotlin
throw MyException("Exception message")
```

`try`表达式也是相同的：
```kotlin
try{
    // 一些代码
}
catch (e: SomeException) {
    // 处理
}
finally {
    // 可选的finally块
}
```
在`Kotlin`中，`throw`和`try`都是表达式，这意味着它们可以被赋值给一个变量。这个在处理一些边界问题的时候确实非常有用:   
```kotlin
val s = when(x){
    is Int -> "Int instance"
    is String -> "String instance"
    else -> throw UnsupportedOperationException("Not valid type")
}
```
或者
```kotlin
val s = try { x as String } catch(e: ClassCastException) { null }
```

### 单例

```kotlin
object Resource {
    val name = "Name"
}
```

### 委托(代理)

##### 类委托

委托模式是最常用的设计模式的一种，在委托模式中，有两个对象参与处理同一个请求，接受请求的对象将请求委托给另一个对象来处理。kotlin中的委托可以算是对委托模式的官方支持。
`Kotlin`直接支持委托模式，更加优雅，简洁。`Kotlin`通过关键字`by`实现委托。

```kotlin
interface Base{
    fun print()
}

class BaseImpl(val x : Int) : Base{
    override fun print() {
        Log.d(JTAG, "BaseImpl -> ${x.string()}")
    }
}

class Printer(b : Base) : Base by b

fun test(){
    val b = BaseImpl(5)
    Printer(b).print()
}

// 输出
BaseImpl -> 5
```

可以看到`Printer`类没有实现接口`Base`的方法`print()`，而是通过关键字`by`将实现委托给了`b`，而输出也和预想的一样。



##### 属性委托

语法是`val/var <属性名>: <类型> by <表达式>`。在`by`后面的表达式是该委托，因为属性对应的`get()`和`set()`会被委托给它的`getValue()`和`setValue()`方法。 属性的委托不必实现任何的接口，但是需要提供一个`getValue()`函数（和`setValue()`——对于`var属性）。

```kotlin
class Example {
    var property : String by DelegateProperty()
}

class DelegateProperty {
    var temp = "old"

    operator fun getValue(ref: Any?, p: KProperty<*>): String {
        return "DelegateProperty --> ${p.name} --> $temp"
    }

    operator fun setValue(ref: Any?, p: KProperty<*>, value: String) {
        temp = value
    }
}

fun test(){
    val e = Example()
    Log.d(JTAG, e.property)
    e.property = "new"
    Log.d(JTAG, e.property)
}

// 输出
DelegateProperty --> property --> old
DelegateProperty --> property --> new
```

像上面的`DelegateProperty`这样，被一个属性委托的类，我叫它被委托类，委托它的属性叫委托属性。其中:   

- 如果委托属性是只读属性即`val`，则被委托类需要实现`getValue`方法
- 如果委托属性是可变属性即`var`，则被委托类需要实现`getValue`方法和`setValue`方法
- `getValue`方法的返回类型必须是与委托属性相同或是其子类
- `getValue`方法和`setValue`方法必须要用关键字`operator`标记


`Kotlin`通过属性委托的方式，为我们实现了一些常用的功能，包括:   

- 延迟属性`lazy properties`
- 可观察属性`observable properties`
- `map`映射

##### 延迟属性    

延迟属性我们应该不陌生，也就是通常说的懒汉，在定义的时候不进行初始化，把初始化的工作延迟到第一次调用的时候。`kotlin`中实现延迟属性很简单，来看一下。

```kotlin
val lazyValue: String by lazy {
    Log.d(JTAG, "Just run when first being used")
    "value"
}

fun test(){
    Log.d(JTAG, lazyValue)
    Log.d(JTAG, lazyValue)
}

// 输出
Just run when first being used
value
value
```
可以看到，只有第一次调用了`lazy`里的日志输出，说明`lazy`方法块只有第一次执行了。按照个人理解，上面的`lazy`模块可以这么翻译

```kotlin
String lazyValue;
String getLazyValue(){
    if(lazyValue == null){
        Log.d(JTAG, "Just run when first being used");
        lazyValue = "value";
    }
    return lazyValue;
}

void test(){
    Log.d(JTAG, getLazyValue());
    Log.d(JTAG, getLazyValue());
}
```

##### 可观察属性

可观察属性对应的是我们常用的观察者模式，机制类似于我们给`View`增加`Listener`。同样的`kotlin`给了我们很方便的实现:

```kotlin
class User {
    var name: Int by Delegates.observable(0) {
        prop, old, new -> Log.d(JTAG, "$old -> $new")
    }

    var gender: Int by Delegates.vetoable(0) {
        prop, old, new -> (old < new)
    }
}

fun test(){
    val user = User()
    user.name = 2    // 输出 0 -> 2        
    user.name = 1   // 输出 2 -> 1    

    user.gender = 2
    Log.d(JTAG, user.gender.string())   // 输出 2
    user.gender = 1
    Log.d(JTAG, user.gender.string())   // 输出 2
}
```
`Delegates.observable()`接受两个参数:初始值和修改时处理程序`handler`。 每当我们给属性赋值时会调用该处理程序（在赋值后执行）。
它有三个参数：被赋值的属性、旧值和新值。在上面的例子中，我们对`user.name`赋值，`set`变化触发了观察者，执行了`Log.d`代码段。

除了`Delegates.observable()`之外，我们还把`gender`委托给了`Delegates.vetoable()`,和`observable`不同的是，`observable`是执行了`set`变化之后，才触发`observable`,而`vetoable`则是在`set`执行之前被触发，它返回一个`Boolean`，如果为`true`才会继续执行`set`。在上面的例子中，我们看到在第一次赋值`user.gender = 2`时，由于`2>0`，所以`old<new`判断成立，所以执行了`set`方法，`gender`为2,第二次赋值`user.gender = 1`则没有通过判断，所以`gender`依然为2。   


##### map映射

一个常见的用例是在一个映射`map`里存储属性的值。这经常出现在像解析`JSON`或者做其他“动态”事情的应用中。在这种情况下，你可以使用映射实例自身作为委托来实现委托属性。

```kotlin
class User(val map: Map<String, Any?>) {
    val name: String by map
    val age: Int     by map
}
// 在这个例子中，构造函数接受一个映射参数
val user = User(mapOf(
    "name" to "John Doe",
    "age"  to 25
))
委托属性会从这个映射中取值（通过字符串键——属性的名称）
println(user.name) // Prints "John Doe"
println(user.age)  // Prints 25
这也适用于var属性，如果把只读的Map换成MutableMap的话
class MutableUser(val map: MutableMap<String, Any?>) {
    var name: String by map
    var age: Int     by map
}
```

---

- 邮箱 ：charon.chui@gmail.com  
- Good Luck! 

