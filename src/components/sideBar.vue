<script setup>

</script>

<template>
    <div id="mainRectangle">
        <div id="topRectangle">
            <div id="profileImg"></div>
            <div id="lowerRectangle">
                <ul id="routes">
                    <li class="tabs">Home</li>
                    <li class="tabs">Projects</li>
                    <li class="tabs">Contact</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>

#mainRectangle {
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #000000;
    width: 300px;
    height: 100vh;
    align-items: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.8);
}

#topRectangle {
    display: flex;
    position: inherit;
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
}

#profileImg {
    display: flex;
    position: inherit;
    background-color: #F0F0F0;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 50px;
}

#lowerRectangle {
    display: flex;
    position: relative;
    width: 100%;
    left: 20%;
    flex: 1;
}

#routes {
    display: flex;
    flex-direction: column;
    position: inherit;
    color: var(--color-text);
    text-decoration: none;
    list-style: none;
    text-align: left;
    justify-content: space-around;
}

.tabs {
    display: flex;
    position: relative;
    text-align: left;
    cursor:pointer;
}

ul {
    padding: 0;
    margin: 0;

}
</style>