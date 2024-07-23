### [Vue learning course](https://fpt-software.udemy.com/course/vuejs-2-the-complete-guide)

# Summary key

### Lesson 1

#### data

```javascript
{
  data() {
    return {
      var: "value"
    }
  }
}
```

#### methods

```javascript
{
  methods: {
    showFullName() {
      return this.firstName + this.lastName
    }
  }
}
```

#### v-bind

```html
<input v-bind:value="var" />
```

#### v-html

```html
<div v-html="<b>important</b>"></div>
```

### Lesson 2

#### v-on

```html
<!-- prevent default -->
<form v-on:submit.default="method"></form>
<input v-on:input="onInput" v-on:keyup.enter="onEnter" />
<!-- passing window event argument -->
<button v-on:click.left="onLeftClick($event)"></button>
<!-- stop propagation -->
<div @click.stop="onClick"></div>
```

#### v-once

```html
<div v-once>{{ showFullName() }}</div>
```

### Lesson 3

#### v-model

```html
<input v-model="var" />
```

#### computed

```html
<div>{{ fullName }}</div>
```

```javascript
{
  computed: {
    fullName() {
      return this.firstName + this.lastName
    }
  }
}
```

#### watch

```javascript
{
  data() {
    return {
      firstName: "Jon",
      lastName: "Doe",
      fullName: ""
    }
  },
  watch: {
    firstName(value) {
      this.fullName = value + this.lastName
    }
  }
}
```

#### Methods vs Computed vs Watch

![methods-computed-watch](./methods-computed-watch.png)

#### v-on and v-bind shorthands

```html
<input :value="value" @input="onInput" />
```

### Lesson 4

#### Styling

```html
<div :style="{ backgroundColor: 'red', 'margin-top': '10px' }"></div>
```

#### Classes

```javascript
computed: {
  classes() {
    return ["default", { active: this.isActive, error: this.isError }]
  }
}
```

```html
<div :class="classes"></div>
```

### Lesson 5

#### v-if, v-else and v-else-if

```html
<div v-if="!data.length">There is no data</div>
<!-- v-else-if need to be right after v-if/v-else-if -->
<div v-else-if="data.length === 1">There is only one record</div>
<!-- v-else need to be right after v-if/v-else-if -->
<div v-else>There are some records</div>
```

#### v-show

```html
<div v-show="isShow">Show/Hide</div>
```

#### v-for

```html
<li v-for="goal in goals">{{ goal }}</li>
<li v-for="(goal, index) in goals">{{ index + 1}}. <b>{{ goal }}</b></li>
<li v-for="(value, key) in { name: 'Max', age: 31 }">{{ key }}: {{ value }}</li>
<!-- Print from 1 to 10 -->
<li v-for="num in 10">{{ num }}</li>
```

```javascript
{
  data() {
    return {
      goals: [...]
    }
  }
}
```

#### Lists and Keys

```html
<li v-for="goal in goals" :key="goal">{{ goal }}</li>
```

> **_Key should be assigned to a unique value_**
