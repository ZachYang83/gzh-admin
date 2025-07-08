const getters = {
    // app
    pageLoading: (state) => state.app.pageLoading,
    sysLoading: (state) => state.app.sysLoading,
    sysTitle: (state) => state.app.sysTitle,
    currentEnv: (state) => state.app.currentEnv,
    companyName: (state) => state.app.companyName,
    // permission
    permissionRoutes: state => state.permission.routes,
    // user
    token: (state) => state.user.token,
    user: (state) => state.user.user,
    roles: (state) => state.user.user.roles,
};

export default getters;