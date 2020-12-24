<template>
  <div class="card">
    <h5 class="header">นับถอยหลังสู่ 2021</h5>
   <h1 v-if="beforeDestination" :class="`time ${willBlink ? 'blinking' : ''}`">
      {{ humanTime }}
  </h1>
  <h1 v-else class="past-time">
    Hello, 2021. New patches will arrive soon.
  </h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  metaInfo() {
    return {
      title: `${(this as HelloWorld).hours}:${(this as HelloWorld).displayMinutes}:${(this as HelloWorld).displaySeconds}`,
    };
  },
})
export default class HelloWorld extends Vue {

  private hours: number = 0;
  private minutes: number = 0;
  private seconds: number = 0;
  private displayMinutes: string = '0';
  private displaySeconds: string = '0';
  private beforeDestination = true;
  private willBlink = false;

  get humanTime() {
    return `${this.hours} hour(s) ${this.displayMinutes} minute(s) ${this.displaySeconds} second(s)`;
  }

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

.header {
 @apply text-3xl text-center;
}

.time {
 @apply text-center font-display text-xl;
}

.past-time {
  @apply font-display text-center text-6xl;
}

.card {
 @apply text-gray-900 rounded-lg p-4;
 backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
 background: rgba(234, 234, 234, .2);
}

@screen lg {
    
  .header {
  @apply text-3xl text-center;
  }

  .time {
  @apply text-center font-display text-6xl;
  }

  .past-time {
    @apply font-display text-center text-6xl;
  }
}
</style>
