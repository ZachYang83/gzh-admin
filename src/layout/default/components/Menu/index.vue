<template>
    <div class="navbar-container">
      <!-- 导航 -->
      <div class="nav-list-container">
        <el-menu
          :default-active="activeMenu"
          class="nav-list"
          mode="vertical"
           :collapse-transition="false"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :active-text-color="variables.menuActiveText"
        >
          <NavItem
            class="nav-list-menu"
            v-for="(route, index) in permissionRoutes"
            :key="'route.path' + index"
            :item="route"
            :base-path="route.path"
          />
        </el-menu>
      </div>
    </div>
  </template>
  
  <script setup>
  import common from "common";
  import NavItem from "./NavItem.vue";
  
  const { store, route } = common();

  
  const variables = ref({
    menuBg: "transparent",
    menuText: "#000",
    menuActiveText: "#000"
  })
  
  const activeMenu = computed(() => {
    const { meta, path } = route;
    // console.log(meta.activeMenu,'mate');
    // console.log(path,'path');
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
  
    return path;
  });
  
  const permissionRoutes = computed(() => store.getters.permissionRoutes);
  
  </script>
  
  <style lang="scss" scoped>
  @mixin nav-list-item-hover {
    color: $primary-color !important;
    background: transparent !important;
  }
  
  .navbar-container {
    overflow: hidden;
  }
  
  </style>
  