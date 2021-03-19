<template>
  <div>
    <div class="header">
      <ul>
        <li>
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/article">文章</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">问答</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">个人中心</nuxt-link>
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
