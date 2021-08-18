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
          <tab title="All"><TabContent /></tab>
          <tab title="Succeeded"><TabContent /></tab>
          <tab title="Refunded"><TabContent /></tab>
          <tab title="Uncaptured"><TabContent /></tab>
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
import TabContent from '../components/Tab/TabContent.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    NavBar,
    Tab,
    Tabs,
    TabContent,

  }
}
</script>
