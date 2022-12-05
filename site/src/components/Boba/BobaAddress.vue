<template>
        <div class="body">
            <strong>Mankato</strong>
            <br/>
            <br/>
            <p class="body">
                <strong>Address:</strong>
                {{Address}}
            <br/>
            <br/>
            <strong>Store Hours: </strong>
            {{Hours}}
            <br/>
            <br/>
            <strong> Email: </strong>
            {{Email}}
            <br/>
            <br/>
            <strong> Phone: </strong>
            {{Phone}}
            <br/>
            </p>
        </div>
</template>

<script>
export default {
    name: "BobaAddress",
    props: {
        Location: String,
        Address: String,
        Hours: String,
        Email: String,
        Phone: String,
    }
}
</script>

<style scoped>
.body{
    color:white;
    font-size:12px;
    letter-spacing:.5px;
}
.header{
    color:white;
    text-align:center;
    font-family: 'Passion One' serif;
    font-size:12px;
}
</style>