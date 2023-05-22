export default {
  name: "daybook",
  component: () => import("/src/modules/daybook/layouts/DayBookLayout.vue"),
  //rutas hijas
  children: [
    {
      path: "",
      name: "no-entry",
      component: () => import("/src/modules/daybook/views/NoEntrySelected.vue"),
    },
    {
      path: ":id",
      name: "entry",
      component: () => import("/src/modules/daybook/views/EntryView.vue"),
      props:( route ) => {
        return {
          id: route.params.id
        }
      }
    },
  ],
};
