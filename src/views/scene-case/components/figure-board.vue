<template>
   <div class = "board-wrap">
        <img :src = "img_src" alt = "figure-board" />
        <div class = "board-figure">
            <span>{{ count }}</span>个
        </div>
        <div class = "board-title">
            <span>{{ title }}</span>
        </div>
   </div>
</template>

<script>
export default {
    name: "Figureboard",
    props: {
        img_src: {
            type: String,
            default: "src/views/scene-case/imgs/icon-qbcj.png"
        },
        count: {
            type: Number,
            default: 236
        },
        title: {
            type: String,
            default: "应用场景"
        }
    }
}


</script>

<style lang = "scss" scoped>
    .board-wrap {
        height: 80%;
        width: 6vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-image: url("../imgs/bg-figure-board.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        cursor: pointer;
    }
    img {
        height: 50%;
        padding-top: 15%;
        padding-bottom: 5%;
        
    }
    .board-figure {
        width: 100%;
        height: 28%;
        display: flex;
        justify-content: center;
        align-items:baseline;
        background: linear-gradient(to bottom, white, #B2EBFF, #0DCAF0);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 600;
        font-size: 16px;
        span{
            font-size: 32px;
        }
    }
    .board-title {
        width: 100%;
        height: 22%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        color: #A7B5C6;
    }

</style>