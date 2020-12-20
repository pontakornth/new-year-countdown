<template>
  <div class="text-gray-100 rounded-lg">
    <h5 class="text-3xl text-center">นับถอยหลังสู่ 2021</h5>
   <h1 v-if="beforeDestination" :class="`text-center font-display text-6xl ${willBlink ? 'blinking' : ''}`">
     {{hours}} hour(s) {{displayMinutes}} minute(s) {{displaySeconds}} second(s)
  </h1>
  <h1 v-else class="font-display text-center text-6xl">
    Hello, 2021. New patches will arrive soon.
  </h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  private hours: number = 0;
  private minutes: number = 0;
  private seconds: number = 0;
  private displayMinutes: string = '0';
  private displaySeconds: string = '0';
  private beforeDestination = true;
  private willBlink = false;
  public mounted(): void {
    setInterval(this.countdown, 1000);
  }
  private countdown(): void {
    const now: number = Date.now();
    const destination: Date = new Date('2021-01-01') ;

    // Milliseconds of format
    const mSeconds: number = 1000;
    const mMinutes: number = mSeconds * 60;
    const mHours: number = mMinutes * 60;

    // Calculation
    const timeDiff = destination.getTime() - now;
    if (timeDiff <= (10 * mSeconds)) {
      this.willBlink = true;
    }
    if (timeDiff <= 0) {
      this.beforeDestination = false;
    }
    this.hours = Math.floor(timeDiff / mHours);
    this.minutes = Math.floor((timeDiff % mHours) / mMinutes);
    this.seconds = Math.floor((timeDiff % mMinutes) / mSeconds);

    this.displayMinutes = this.minutes >= 10 ? this.minutes.toString() : '0'.concat(this.minutes.toString());
    this.displaySeconds = this.seconds >= 10 ? this.seconds.toString() : '0'.concat(this.seconds.toString());

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes scale {
  0% {
    transform: scale(1);
    color: red;
    @apply text-gray-100;
  }
  100% {
    transform: scale(1.2);
    @apply text-red-500;
  }
}
.blinking {
  animation: scale 0.5s ease-in-out 0s infinite alternate none;
}
</style>
