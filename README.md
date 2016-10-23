![alt tag](https://raw.githubusercontent.com/sterjakovigor/rower/master/logo.jpg)
Rower is a simple API for your array of objects which always return a new array.

# What you can do with rower?

```javascript
  import rower from 'rower'
  
  let ducks = rower([
    { id: 0, name: 'Igor'      },
    { id: 1, name: 'Anastasia' },
    { id: 2, name: 'Gloria'    },
  ])
```

## Find

```javascript
  ducks
    .where(duck => duck.name == 'Anastasia')
    .where(duck => duck.name == 'Gloria')    
    .find()

  // [
  //   { id: 1, name: 'Anastasia' },
  //   { id: 2, name: 'Gloria'   },
  // ]
```

## Update

```javascript
  ducks
    .where(duck => duck.name == 'Igor')
    .update({ name: 'Cinderella' })
  
  // [
  //   { id: 0, name: 'Cinderella' },  
  //   { id: 1, name: 'Anastasia'  },
  //   { id: 2, name: 'Gloria'     },
  // ]  
```

## Delete

```javascript
  ducks
    .where(duck => duck.id > 0)
    .where(duck => duck.id < 2)    
    .delete()
    
  // [
  //   { id: 0, name: 'Cinderella' },  
  //   { id: 2, name: 'Gloria'     },
  // ]      
```

## Toggle

```javascript
  ducks
    .where(duck => duck.name == 'Anastasia')
    .toggle({ id: 777, name: 'Joker' })

  // [
  //   { id: 0,   name: 'Igor'   },
  //   { id: 777, name: 'Joker'  },    
  //   { id: 2,   name: 'Gloria' },
  // ]
```


## Pluck

```javascript
  ducks
    .where(duck => duck.id > 0)
    .pluck('id')
    
  // [ 1, 2 ]
```
