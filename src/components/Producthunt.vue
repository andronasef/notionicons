<script setup lang='ts'>

const darkimg = ref(`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=366586&theme=light`)

</script>

<template>
    <div class="absolute bottom-5 right-5 z-1 scalehalf lg:transform">
        <a href="https://www.producthunt.com/posts/notion-icons-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-notion&#0045;icons&#0045;2"
            target="_blank">
            <img v-bind:src="darkimg"
                alt="Notion&#0032;Icons - &#0043;100k&#0032;icons&#0032;just&#0032;for&#0032;your&#0032;notion&#0032;pages | Product Hunt"
                style="width: 250px; height: 54px;" width="250" height="54" /></a>
    </div>
</template>

<style>
.scalehalf {
    transform: scale(.75);
}

@media only screen and (min-width: 768px) {
    .scalehalf {
        transform: scale(.9);
    }
}
</style>