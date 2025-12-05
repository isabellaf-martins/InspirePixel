<script setup>

</script>

<template>
    <section class="hero">
        <div>
            <h2>Onde a paisagem vira <span>inspiração</span>.</h2>
            <p>Explore paisagens, cores e luzes que inspiram novas histórias através da fotografia.</p>
        </div>
        
        <img src="../assets/fotografo.png" alt="Imagem ilustrativa">
    </section>
</template>

<style scoped lang="scss">
.hero{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 2.5rem;
    padding: 2rem;

    div{
        max-width: 600px;

        h2{
            font-size: 3.6rem;
            margin-bottom: 1.6rem;

            span{
                color: #E1306C;
                font-size: 5.4rem;
            }
        }
        img{
            width: 40vw;
            }
        }
    }

@media (max-width: 768px) {
    .hero {
        flex-direction: column-reverse;
        text-align: center;
        margin: 2rem 1rem;
        padding: 1rem 0;

        div {
            max-width: 90%;

            h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
                margin-top: 2rem;

                span {
                    font-size: 2.6rem;
                }
            }
        }

        img {
            width: 80vw;
            margin-top: 2rem;
        }
    }
}
</style>  