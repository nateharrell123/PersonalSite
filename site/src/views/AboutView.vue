<template>
    <div>
        <AboutHeader/>
        <AboutContent id="fade-in"/>
        <ProjectFooter/>
    </div>
</template>

<script>
import AboutHeader from "../components/About/AboutHeader.vue"
import AboutContent from "../components/About/AboutContent.vue"
import ProjectFooter from "../components/ProjectFooter.vue"
    export default {
        name: "AboutView",
        components: {
            AboutHeader,
            AboutContent,
            ProjectFooter,
        }
    }
</script>

<style scoped>
#fade-in{
    animation: 1s ease 0s normal forwards 1 fadein;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>