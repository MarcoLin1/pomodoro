<template>
  <div class="todo__container">
    <div class="todo__wrapper">
      <div class="todo__wrapper__left">
        <Clock :initial-todo-list="todoList" />
        <div class="todo__wrapper__left__circle" />
      </div>
      <div class="todo__wrapper__right">
        <Background />
        <div class="todo__wrapper__right__container">
          <form
            action=""
            @submit.stop.prevent="addNewTodo"
          >
            <div class="todo__wrapper__right__input__group">
              <input
                v-model="newTodo"
                type="text"
                class="todo__wrapper__right__input"
              >
              <button
                type="submit"
                class="todo__wrapper__right__button"
              >
                +
              </button>
            </div>
          </form>
          <div class="todo__wrapper__right__table">
            <div class="todo__wrapper__right__calendar__group">
              <div class="todo__wrapper__right__calendar__icon" />
              <input
                id="date"
                type="date"
                name="date"
                class="todo__wrapper__right__calendar"
              >
            </div>
            <div class="todo__wrapper__right__list">
              <div
                v-for="todo in todoList"
                :key="todo.id"
                class="todo__wrapper__right__item"
              >
                <input
                  id="checkbox"
                  type="checkbox"
                  name="checkbox"
                  class="todo__wrapper__right__checkbox"
                >
                <div
                  for="checkbox"
                  class="todo__wrapper__right__label"
                />
                <div class="todo__wrapper__right__item__name">
                  {{ todo.item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from './../components/Clock.vue'
import Background from './../components/Background.vue'
import { mapState } from 'vuex'
export default {
  name: 'Todo',
  components: {
    Clock,
    Background
  },
  data () {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapState(['todoList'])
  },
  methods: {
    addNewTodo () {
      const text = this.newTodo && this.newTodo.trim()
      const length = this.todoList.length - 1
      const newId = this.todoList[length].id + 1
      if (!text) {
        return
      }
      this.todoList.push({
        id: newId,
        item: text,
        isCheck: false
      })
      this.newTodo = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.todo__wrapper {
  position: relative;
  display: flex;
  .todo__wrapper__left {
    width: 100%;
  }
  .todo__wrapper__right {
    width: 100%;
    height: 100%;
    position: relative;
    max-width: 800px;
    .todo__wrapper__right__input__group {
      position: relative;
      width: 95%;
      margin: 0 auto;
      .todo__wrapper__right__input {
        background: $gold;
        width: 97%;
        height: 20px;
        border: none;
        border-radius: 3px;
        padding: 5px;
        &:focus {
          outline: none;
          color: #BC2B35;
        }
      }
      .todo__wrapper__right__button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translate(0, -50%);
        background: none;
        border: none;
        color: #BC2B35;
      }
    }
    .todo__wrapper__right__table {
      height: 100%;
      .todo__wrapper__right__calendar__group {
        width: 95%;
        margin: 10px auto 10px auto;
        background: #E9414C;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        .todo__wrapper__right__calendar {
          border: none;
          color: $gold;
          background: none;
          padding: 5px;
          width: 50%;
          &:focus {
            outline: none;
          }
        }
      }
      .todo__wrapper__right__list {
        width: 95%;
        height: 100%;
        margin: 0 auto;
        background: #D9343F;
        border-radius: 5px;
        padding: 10px 0 10px 0;
      }
      .todo__wrapper__right__item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 0 5px 5px 5px;
      }
    }
    .todo__wrapper__right__checkbox {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid $gold;
      margin-right: 10px;
      cursor: pointer;
      &:focus {
        outline: 0;
      }
      &:checked ~ .todo__wrapper__right__label {
        mask-image: url('./../assets/image/icon_checked.svg');
        -webkit-mask-image: url('./../assets/image/icon_checked.svg');
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        width: 15px;
        height: 15px;
        background: $gold;
        position: absolute;
        top: 3px;
        left: 10px;
      }
      &:checked ~ .todo__wrapper__right__item__name {
        text-decoration: line-through;
        font-style: italic;
      }
    }
    .todo__wrapper__right__item__name {
      color: $gold;
      width: 100%;
      font-size: 1rem;
      padding: 5px;
      border-bottom: 1px dashed $gold;
    }
  }
}

@media screen and (min-width: 700px) {
  .todo__wrapper {
    .todo__wrapper__left {
      .todo__wrapper__left__circle {
        display: block;
        width: 200px;
        height: 350px;
        background: #C12C37;
        border-radius: 0px 200px 200px 0px;
        position: absolute;
        top: 0;
      }
    }
  }
}
@media screen and (min-width: 850px) {
  .todo__wrapper {
    .todo__wrapper__left {
      padding-top: 40px;
    }
    .todo__wrapper__right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .todo__wrapper__right__container {
        position: absolute;
        top: 10%;
        width: 340px;
        margin-right: 10px;
      }
    }
  }
}
@media screen and (min-width: 1016px) {
  .todo__wrapper {
    .todo__wrapper__right {
      .todo__wrapper__right__container {
        width: 380px;
      }
    }
  }
}
@media screen and (min-width: 1230px) {
  .todo__wrapper {
    .todo__wrapper__right {
      .todo__wrapper__right__container {
        width: 400px;
      }
    }
  }
}
</style>
