export default [
  {
    path: "/",
    component: (): Promise<typeof import("*.vue")> => import(
      /* webpackChunkName: "main-route" */
      /* webpackPrefetch: 0 */
      "@/routes/routeMain.vue"
    ),
    children: [
      {
        path: ":uri?",
        name: "home",
        components: {
          viewMain: (): Promise<typeof import("*.vue")> => import(
            /* webpackChunkName: "main-route-view" */
            /* webpackPrefetch: 1 */
            "@/views/viewMain.vue"
          ),
        },
      },
    ],
  },

  {
    path: "*",
    redirect: "/",
  },
]
