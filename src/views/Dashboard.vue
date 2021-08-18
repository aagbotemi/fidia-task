<template>
  <div>
    <Sidebar />
    <NavBar />

    <div class="dashboard">
      <div class="dashboard-header d-flex align-items-center justify-content-between">
        <h1>Payments</h1>

        <!-- displays on small screen and above -->
        <div class="d-sm-flex d-none d-sm-block">
          <button class="d-flex align-items-center">
            <img src="../assets/image/filter.svg" alt="filter icon">
            Filter
          </button>
          <button class="d-flex align-items-center">
            <img src="../assets/image/export.svg" alt="filter icon">
            Export
          </button>
          <button class="d-flex align-items-center">
            <img src="../assets/image/create-payment.svg" alt="filter icon">
            Create Payment
          </button>
        </div>

        <!-- displays on large screen and above -->
        <div class="d-flex d-sm-none d-block">
          <button class="d-flex align-items-center">
            <img src="../assets/image/filter.svg" alt="filter icon">
          </button>
          <button class="d-flex align-items-center">
            <img src="../assets/image/export.svg" alt="filter icon">
          </button>
          <button class="d-flex align-items-center">
            <img src="../assets/image/create-payment.svg" alt="filter icon">
          </button>
        </div>
      </div>

      <div>
        <tabs>
          <tab title="All">Hello World 1</tab>
          <tab title="Succeeded">Hello World 2</tab>
          <tab title="Refunded">Hello World 3</tab>
          <tab title="Uncaptured">Hello World 4</tab>
        </tabs>
      </div>

      

      

      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '../components/Navigation/Sidebar.vue'
import NavBar from '../components/Navigation/NavBar.vue'
import Tab from '../components/Tab/Tab.vue'
import Tabs from '../components/Tab/Tabs.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    NavBar,
    Tab,
    Tabs,

  }
}
</script>
