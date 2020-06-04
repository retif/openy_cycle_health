<template>
  <div>
    <div class="message">Click an activity below. Keep going until you've clicked them all!</div>

    <p v-if="isUserGuest" class="register-promo">
      Want more games? <a href="/user/register">Create an account</a> so each family member can play Hidden Picture, Bingo, and 7Summits (coming June 22).
    </p>

    <div class="container" v-bind:class="{'visually-disabled': disabled}">
      <div class="today-progress-item"
           v-for="exercise in exerciseList"
           v-on:click="onExerciseSelected(exercise)"
           :class="{'checked': isExerciseFinished(exercise)}"
      >
        <div
          v-bind:class="{'checked': isExerciseFinished(exercise)}"
          class="checkbox"
        ></div>
        <div class="title">{{ exercise.label }}</div>
        <div class="description" v-html="exercise.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import user from "../../helper/twelve/user";

  export default {
    props: {
      exerciseList: Array,
      isExerciseFinished: Function,
      onExerciseSelected: Function,
      disabled: Boolean
    },

    computed: {
      isUserGuest: function() {
        return user.is_guest();
      }
    }
  }
</script>
