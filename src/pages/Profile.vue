<template>
    <div class="profile">
        <h2>顏文字</h2>
        <p v-for="(text, index) in textList" :key="index">
            <span class="emoji" @click="copyText(text)">{{ text }}</span>
            <span v-if = "copiedText === text" class="copied-msg">✅ 已複製</span>
        </p>
    </div>
</template>

<script setup lang="ts">
    import { ref} from 'vue';
    const textList = ref<string[]>(
        ['(´・ω・｀)', 'ヽ(✿ﾟ▽ﾟ)ノ', 'ヽ(´▽｀)ノ','OWO']
    );
    const copiedText = ref<string | null>(null);
    function copyText(text: string) {
        navigator.clipboard.writeText(text)
        .then(() => {
            copiedText.value = text; //設定以複製的文字
            setTimeout(() =>{
                copiedText.value = null; //1.5秒後隱藏訊息
            },1500);
        })
        .catch((err) => {
            console.error('複製失敗', err);
        });
    }
</script>

<style scoped>
h2 {
    text-align: left;
}
.profile {
    border: 2px solid black;
    margin-top: 10px;
    padding: 10px;
    width: 98%;
}
.emoji {
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
    padding: 5px;
    border-radius: 5px;
    transition: background 0.2s ease;
}
.emoji:hover {
    background: #f0f0f0;
}
.copied-msg {
    margin-left: 10px;  /* 與顏文字保持間距 */
    color: green;       /* 設定文字顏色為綠色 */
    font-size: 14px;    /* 設定字體大小 */
    animation: fadeOut 1.5s ease forwards; /* 套用 `fadeOut` 動畫 */
}

@keyframes fadeOut {
    0% { opacity: 1; }   /* 開始時完全可見 */
    100% { opacity: 0; } /* 結束時完全透明（消失） */
}
</style>