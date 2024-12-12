<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/admin/user">
                        <a class="nav-link" href="/admin/user">
                            <div class="parent-icon"><i class="fa-brands fa-product-hunt"></i>
                            </div>
                            <div class="menu-title">Danh Muc</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/caidat">
                        <a class="nav-link" href="/admin/caidat">
                            <div class="parent-icon"><i class="fa-solid fa-person"></i>
                            </div>
                            <div class="menu-title">Cai Dat</div>
                        </a>
                    </router-link>
                </li>

            </ul>
        </nav>
    </div>

</template>
<script>
export default {

}
</script>
<style></style>