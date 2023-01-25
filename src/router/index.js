import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserComp from '../components/UserComp.vue'
import UserModal from '../components/users/UserModal.vue'
import StoreComp from '../components/StoreComp.vue'
import StoreModal from '../components/stores/StoreModal.vue'
import CustomerComp from '../components/CustomerComp.vue'
import CustomerModal from '../components/customers/CustomerModal.vue'
import TicketingComp from '../components/TicketingComp.vue'
import TicketModal from '../components/tickets/TicketModal.vue'
import LoginView from '../views/LoginView.vue'
import RecoverView from '../views/RecoverView.vue'
import RegisterView from '../views/RegisterView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: "/users",
        name: "user page",
        component: UserComp,
        children: [
          {
            path: "new",
            name: "new user page",
            component: UserModal
          },
          {
            path: "edit",
            name: "edit user page",
            component: UserModal
          }
        ]
      },
      {
        path: "/stores",
        name: "store page",
        component: StoreComp,
        children: [
          {
            path: "new",
            name: "new store page",
            component: StoreModal
          },
          {
            path: "edit",
            name: "edit store page",
            component: StoreModal
          }
        ]
      },
      {
        path: "/customers",
        name: "customer page",
        component: CustomerComp,
        children: [
          {
            path: "new",
            name: "new customer page",
            component: CustomerModal
          },
          {
            path: "edit",
            name: "edit customer page",
            component: CustomerModal
          }
        ]
      },
      {
        path: "/ticketing",
        name: "ticketing page",
        component: TicketingComp,
        children: [
          {
            path: "new",
            name: "new ticket page",
            component: TicketModal
          },
          {
            path: "edit",
            name: "edit ticket page",
            component: TicketModal
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/recover",
    name: "recover page",
    component: RecoverView
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  if(to.name !== 'register') {
    if ((sessionStorage.getItem("token") === null || sessionStorage.getItem("token") === "null") &&
      to.name !== 'login'
    ) {
      return { name: 'login' }
    }
  }

})

export default router
