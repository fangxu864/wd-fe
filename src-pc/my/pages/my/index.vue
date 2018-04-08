<template>
  <div class="g-body f-cb">

    <!-- 顶部导航区域 -->
    <div class="m-topnav">
      <draggable v-model="topnavData" :options="{handle:'.handle'}" :move="onMove" @update="onUpdate">
        <div class="topnav-item btn-group" v-for="item in topnavData">
          <span v-if="topnavIsedit" class="btn handle btn-move">
            <i class="icon wdfont wd-yidong"></i>
          </span>
          <span class="btn content-btn">{{item}}</span>
          <span v-if="topnavIsedit" class="btn btn-edit">
            <i class="icon wdfont wd-bianji"></i>
          </span>
        </div>
        <div class="topnav-item btn-group ignore-elements">
          <span class="btn operate-btn"><i class="icon wdfont wd-xinzeng"></i>新增</span>
          <span class="btn operate-btn" @click="topnavIsedit = !topnavIsedit"><i class="icon wdfont wd-bianji"></i>{{editText}}</span>
        </div>
      </draggable>
    </div>

    <!-- 标题区域 -->
    <div class="m-title">
      前端开发导航
    </div>

    <!-- 左侧导航区域 -->
    <div class="m-sidenav">
      <ul class="sidenav-box">
        <draggable v-model="sidenavData" :options="{handle:'.handle'}" :move="onMove" @update="onUpdate">
          <li class="sidenav-item" :class="sidenavIseidt ? 'is-edit' : ''" v-for="item in sidenavData">
            <span class="sidenav-item__move handle">
              <i class="icon wdfont wd-yidong"></i>
            </span>
            <span class="sidenav-item__con">{{item}}</span>
            <span class="sidenav-item__edit">
              <i class="icon wdfont wd-bianji"></i>
            </span>
          </li>
        </draggable>
      </ul>
      <div class="topnav-item btn-group ignore-elements ">
        <span class="btn operate-btn"><i class="icon wdfont wd-xinzeng"></i>新增</span>
        <span class="btn operate-btn" @click="sidenavIseidt = !sidenavIseidt"><i class="icon wdfont wd-bianji"></i>{{editSlideText}}</span>
      </div>
    </div>

    <!-- 右侧卡片区域 -->
    <div class="m-rightCon">
      <div class="grid">
        <draggable v-model="cardData" :options="{handle:'.handle'}" :move="onMove" @update="onUpdate">
          <div class="grid__cell 1/5" v-for="item in cardData">
            <div class="card">
              <h3 class="card__tit f-ellipsis">{{item.title}}</h3>
              <p class="card__con f-ellipsis--l2">{{item.content}}</p>
              <span class="card__move handle">
                <i class="icon wdfont wd-yidong"></i>
              </span>
              <span class="card__edit">
                <i class="icon wdfont wd-bianji"></i>
              </span>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
<style src="./index.scss" lang="scss" scoped></style>
<script src="./index.js"></script>

