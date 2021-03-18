<template>
  <div>
    <div class="header">
      <ul>
        <li>
          <a href="">首页</a>
        </li>
        <li>
          <a href="">文章</a>
        </li>
        <li>
          <a href="">问答</a>
        </li>
        <li>
          <a href="">个人中心</a>
        </li>
      </ul>
    </div>
    <Nuxt />
    <div>
      <h3>底部</h3>
    </div>
  </div>
</template>

<style>
* {
  margin: 0 auto;
  font-size: 18px;
}
.header{
  width: 100%;
  height: 50px;
  background-color: black;
}
.header ul {
  margin-left: 80px;
}
.header li {
  display: inline;
  line-height: 50px;
  margin-left: 60px;
}
.header a {
  color: #fff;
  text-decoration: none;
}
.header a:hover {
  color: aqua;
}
</style>
