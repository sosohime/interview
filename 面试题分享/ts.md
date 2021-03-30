# 实现一个TS中的xxx系列

>（完整参考[type-challenges](https://github.com/type-challenges/type-challenges))

## Pick

```Typescript
interface Todo {
    title: string
    description: string
    completed: boolean
  }

type MyPick<T, U extends keyof T> = {[E in U]: T[E]}
  
type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

## MyReadonly

```Typescript
interface Todo {
    title: string
    description: string
}

type MyReadonly<T> = {readonly [E in keyof T]:  T[E]}
  
const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

## TupleToObject

```Typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K extends symbol | string ? K : never
  }

type D = typeof tuple

const result: TupleToObject<typeof tuple> = { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
 expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

## FirstOfArray

```Typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type First<T extends any[]> = T[number] extends never ? never : T[0]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3>
```

## Length of Tuple

```Typescript
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends any[]> = T['length']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```


## Exclude

```Typescript
type A = 'a' | 'b' | 'c'

type B = Exclude<A, 'a'>

type MyExclude<T, U> = T extends U ? never : T

type C = MyExclude<A, 'a'>
```

## Awaited

```Typescript
type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<number>>

type Awaited<T> = T extends PromiseLike<infer U>
    ? U extends Promise<any>
        ? Awaited<U>
        : U
    : never

type Str = Awaited<X>
type F = Awaited<Y>
type Num = Awaited<Z>
```

## IF

```Typescript
type If<U, K, P> = U extends true ? K : P

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

## Concat

```Typescript
type Concat<T extends unknown[], P extends unknown[]> = [...T, ...P]

type Result = Concat<[1], [2]> // expected to be [1, 2]
```

## Includes

```Typescript
type Includes<T extends any[], U> = U extends T[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // expected to be `false`
```