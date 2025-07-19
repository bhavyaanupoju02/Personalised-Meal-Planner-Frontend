interface ISideBar {
    name:string,
    link:string
}
 
 
export const userSideBarRouteList:ISideBar[]=[
    {
        name:"BMI",
        link: "/dashboard"
    },
    {
        name:"DailyPlan",
        link: "/dashboard/daily-mealPlan"
    },
    {
        name:"Weekly Plan",
        link: "/dashboard/weekly-mealPlan"
    },

]
