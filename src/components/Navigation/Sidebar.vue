<template>
    <div>
        <div class="sidebar" v-if="!mobile || hover" @mouseleave="hover = false">
            <div class="d-flex align-items-center">
                <img src="../../assets/image/store-icon.svg" 
                width="28px" class="store-icon" alt="stripe icon" /> 
                <span>Store Name</span> 
                <img src="../../assets/image/caret-down.svg" alt="caret down" width="10.59px">
            </div>

            <ul class="nav-link p-0">
                <SidebarLinks 
                    imageUrl="home.svg" linkText="Home"
                    alt="home icon" width="16px"
                    imageClass="store-icon"
                    listItemClass="nav-items"
                    linkUrl="/dashboard"
                />

                <li @click="isOpen = !isOpen"  :class="{'my-4': isOpen}" class="nav-items my-2">
                    <router-link to="/dashboard">
                        <img v-if="isOpen" src="../../assets/image/payment.svg" 
                            width="16px" class="store-icon" alt="Payments icon" 
                        /> 
                        <img v-else src="../../assets/image/developers.svg" 
                            width="16px" class="store-icon" alt="Payments icon" 
                        /> 
                        <span :class="{'purple': isOpen}">Payments</span> 
                    </router-link>
                    <div :class="[ isOpen ? 'show' : 'hide' ]">
                        <ul class="sub-list">
                            <li class="mt-3 mb-2">
                                <router-link to="/dashboard">Reviews</router-link>
                            </li>
                            <li class="mb-2">
                                <router-link to="/dashboard">Disputed</router-link>
                            </li>
                            <li class="mb-2">
                                <router-link to="/dashboard">Top-ups</router-link>
                            </li>
                            <li class="mb-2">
                                <router-link to="/dashboard">Collected fees</router-link>
                            </li>
                            <li class="mb-2">
                                <router-link to="/dashboard">Transfers</router-link>
                            </li>
                            <li class="mb-2">
                                <router-link to="/dashboard">Payouts</router-link>
                            </li>
                            <li>
                                <router-link to="/dashboard">All transactions</router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="balances.svg"
                    alt="Balances icon" width="16px"
                    imageClass="store-icon"
                    linkText="Balances"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="customers.svg"
                    alt="Customers icon" width="16px"
                    imageClass="store-icon"
                    linkText="Customers"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="connected-account.svg"
                    alt="Connected accounts icon" width="16px"
                    imageClass="store-icon"
                    linkText="Connected accounts"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="products.svg"
                    alt="Products icon" width="16px"
                    imageClass="store-icon"
                    linkText="Products"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-3"
                    linkUrl="/dashboard"
                    imageUrl="reports.svg"
                    alt="Reports icon" width="16px"
                    imageClass="store-icon"
                    linkText="Reports"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="developers.svg"
                    alt="Developers icon" width="16px"
                    imageClass="store-icon"
                    linkText="Developers"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="toggle-off.svg"
                    alt="View test data icon" width="16px"
                    imageClass="store-icon"
                    linkText="View test data"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="settings.svg"
                    alt="Settings icon" width="16px"
                    imageClass="store-icon"
                    linkText="Settings"
                />
            </ul>
        </div>
        <div class="mobile-sidebar" v-else @mouseover="hover = true" @mouseleave="hover = false">
            <div class="d-flex align-items-center">
                <img src="../../assets/image/store-icon.svg" 
                width="50px" class="store-icon" alt="stripe icon" />
            </div>

            <ul class="nav-link p-0">
                <SidebarLinks 
                    imageUrl="home.svg"
                    alt="home icon" width="20px"
                    imageClass="store-icon"
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                />

                <li class="nav-items mb-2">
                    <router-link to="/dashboard">
                        <img src="../../assets/image/developers.svg" 
                            width="20px" class="store-icon" alt="Payments icon" 
                        /> 
                    </router-link>
                </li>

                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="balances.svg"
                    alt="Balances icon" width="20px"
                    imageClass="store-icon"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="customers.svg"
                    alt="Customers icon" width="20px"
                    imageClass="store-icon"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="connected-account.svg"
                    alt="Connected accounts icon" width="20px"
                    imageClass="store-icon"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="products.svg"
                    alt="Products icon" width="20px"
                    imageClass="store-icon"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="reports.svg"
                    alt="Reports icon" width="20px"
                    imageClass="store-icon"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="developers.svg"
                    alt="Developers icon" width="20px"
                    imageClass="store-icon"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items mb-2"
                    linkUrl="/dashboard"
                    imageUrl="toggle-off.svg"
                    alt="View test data icon" width="20px"
                    imageClass="store-icon"
                />
                
                <SidebarLinks 
                    listItemClass="nav-items"
                    linkUrl="/dashboard"
                    imageUrl="settings.svg"
                    alt="Settings icon" width="20px"
                    imageClass="store-icon"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import SidebarLinks from "./SidebarLinks.vue"

export default {
    components: {
        SidebarLinks
    },
    data:() => ({
        isOpen: false,
        mobile: null,
        hover: false,
    }),
    created () {
        this.checkScreen()
        window.addEventListener('resize', this.checkScreen)
    },
    methods: {
        checkScreen () {
            const windowWidth = window.innerWidth
            if (windowWidth <= 803) {
                this.mobile = true
                return
            }
            this.mobile = false
        }
    }
}
</script>

<style lang="scss">
    .show {
        display: block;
    }
    .hide {
        display: none;
    }
    .purple {
        color: #5469D4 !important;
        font-weight: 900 !important;
    }


.mobile-sidebar {
    max-width: 60px !important;
}
</style>